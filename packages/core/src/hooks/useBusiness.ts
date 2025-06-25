/**
 * Business logic hooks for Xalesin ERP
 * React hooks for common business operations and calculations
 */

import { useState, useEffect, useCallback, useMemo } from 'react'
import type {
  Money,
  Quantity,
  TaxCalculation,
  DiscountCalculation,
  PriceCalculation,
  InventoryMovement,
  StockLevel,
  ValidationResult,
  DocumentStatus
} from '../types/business'
import type {
  Item,
  ItemPrice,
  PriceList,
  Tax,
  SalesOrder,
  SalesOrderItem,
  PurchaseOrder,
  PurchaseOrderItem,
  Invoice,
  InvoiceItem,
  InventoryTransaction,
  Currency,
  ExchangeRate
} from '../types/database'
import { moneyUtils, quantityUtils, numberUtils, statusUtils } from '../utils/helpers'
import { ValidationError } from '../utils/errors'

/**
 * Price calculation hook
 */
export function usePriceCalculation() {
  /**
   * Calculate item price based on price list and quantity
   */
  const calculateItemPrice = useCallback((
    item: Item,
    quantity: Quantity,
    priceList?: PriceList,
    itemPrices: ItemPrice[] = []
  ): PriceCalculation => {
    // Find applicable price
    let unitPrice = item.basePrice
    let priceSource = 'base' as const

    if (priceList && itemPrices.length > 0) {
      // Find price for this item in the price list
      const applicablePrice = itemPrices
        .filter(price => 
          price.itemId === item.id && 
          price.priceListId === priceList.id &&
          (!price.minQuantity || quantity.value >= price.minQuantity) &&
          (!price.maxQuantity || quantity.value <= price.maxQuantity) &&
          (!price.validFrom || new Date(price.validFrom) <= new Date()) &&
          (!price.validTo || new Date(price.validTo) >= new Date())
        )
        .sort((a, b) => (b.minQuantity || 0) - (a.minQuantity || 0))[0]

      if (applicablePrice) {
        unitPrice = applicablePrice.price
        priceSource = 'priceList'
      }
    }

    const subtotal = moneyUtils.multiply(unitPrice, quantity.value)

    return {
      unitPrice,
      quantity,
      subtotal,
      priceSource,
      priceListId: priceList?.id,
      itemId: item.id,
      calculatedAt: new Date()
    }
  }, [])

  /**
   * Calculate bulk pricing for multiple items
   */
  const calculateBulkPricing = useCallback((
    items: Array<{ item: Item; quantity: Quantity }>,
    priceList?: PriceList,
    itemPrices: ItemPrice[] = []
  ): PriceCalculation[] => {
    return items.map(({ item, quantity }) => 
      calculateItemPrice(item, quantity, priceList, itemPrices)
    )
  }, [calculateItemPrice])

  return {
    calculateItemPrice,
    calculateBulkPricing
  }
}

/**
 * Tax calculation hook
 */
export function useTaxCalculation() {
  /**
   * Calculate tax for an amount
   */
  const calculateTax = useCallback((
    amount: Money,
    taxRate: number,
    taxType: 'inclusive' | 'exclusive' = 'exclusive'
  ): TaxCalculation => {
    let taxAmount: Money
    let netAmount: Money
    let grossAmount: Money

    if (taxType === 'inclusive') {
      // Tax is included in the amount
      grossAmount = amount
      taxAmount = moneyUtils.multiply(amount, taxRate / (100 + taxRate))
      netAmount = moneyUtils.subtract(grossAmount, taxAmount)
    } else {
      // Tax is added to the amount
      netAmount = amount
      taxAmount = moneyUtils.multiply(amount, taxRate / 100)
      grossAmount = moneyUtils.add(netAmount, taxAmount)
    }

    return {
      netAmount,
      taxAmount,
      grossAmount,
      taxRate,
      taxType,
      calculatedAt: new Date()
    }
  }, [])

  /**
   * Calculate multiple taxes
   */
  const calculateMultipleTaxes = useCallback((
    amount: Money,
    taxes: Tax[],
    taxType: 'inclusive' | 'exclusive' = 'exclusive'
  ): TaxCalculation[] => {
    return taxes.map(tax => 
      calculateTax(amount, tax.rate, taxType)
    )
  }, [calculateTax])

  /**
   * Calculate compound taxes (tax on tax)
   */
  const calculateCompoundTaxes = useCallback((
    amount: Money,
    taxes: Tax[]
  ): TaxCalculation => {
    let currentAmount = amount
    let totalTaxAmount = moneyUtils.create(0, amount.currency)

    const calculations = taxes.map(tax => {
      const calculation = calculateTax(currentAmount, tax.rate, 'exclusive')
      currentAmount = calculation.grossAmount
      totalTaxAmount = moneyUtils.add(totalTaxAmount, calculation.taxAmount)
      return calculation
    })

    return {
      netAmount: amount,
      taxAmount: totalTaxAmount,
      grossAmount: currentAmount,
      taxRate: taxes.reduce((sum, tax) => sum + tax.rate, 0),
      taxType: 'exclusive',
      calculatedAt: new Date(),
      breakdown: calculations
    }
  }, [calculateTax])

  return {
    calculateTax,
    calculateMultipleTaxes,
    calculateCompoundTaxes
  }
}

/**
 * Discount calculation hook
 */
export function useDiscountCalculation() {
  /**
   * Calculate discount
   */
  const calculateDiscount = useCallback((
    amount: Money,
    discountValue: number,
    discountType: 'percentage' | 'fixed'
  ): DiscountCalculation => {
    let discountAmount: Money

    if (discountType === 'percentage') {
      discountAmount = moneyUtils.multiply(amount, discountValue / 100)
    } else {
      discountAmount = moneyUtils.create(discountValue, amount.currency)
    }

    // Ensure discount doesn't exceed the original amount
    if (moneyUtils.isGreaterThan(discountAmount, amount)) {
      discountAmount = amount
    }

    const finalAmount = moneyUtils.subtract(amount, discountAmount)

    return {
      originalAmount: amount,
      discountAmount,
      finalAmount,
      discountValue,
      discountType,
      calculatedAt: new Date()
    }
  }, [])

  /**
   * Calculate tiered discounts
   */
  const calculateTieredDiscount = useCallback((
    amount: Money,
    tiers: Array<{ threshold: number; discount: number; type: 'percentage' | 'fixed' }>
  ): DiscountCalculation => {
    // Find applicable tier (highest threshold that amount meets)
    const applicableTier = tiers
      .filter(tier => amount.amount >= tier.threshold)
      .sort((a, b) => b.threshold - a.threshold)[0]

    if (!applicableTier) {
      return {
        originalAmount: amount,
        discountAmount: moneyUtils.create(0, amount.currency),
        finalAmount: amount,
        discountValue: 0,
        discountType: 'percentage',
        calculatedAt: new Date()
      }
    }

    return calculateDiscount(amount, applicableTier.discount, applicableTier.type)
  }, [calculateDiscount])

  return {
    calculateDiscount,
    calculateTieredDiscount
  }
}

/**
 * Currency conversion hook
 */
export function useCurrencyConversion() {
  /**
   * Convert money between currencies
   */
  const convertCurrency = useCallback((
    amount: Money,
    targetCurrency: string,
    exchangeRate: number
  ): Money => {
    if (amount.currency === targetCurrency) {
      return amount
    }

    const convertedAmount = amount.amount * exchangeRate
    return moneyUtils.create(convertedAmount, targetCurrency)
  }, [])

  /**
   * Get exchange rate between currencies
   */
  const getExchangeRate = useCallback((
    fromCurrency: string,
    toCurrency: string,
    exchangeRates: ExchangeRate[]
  ): number => {
    if (fromCurrency === toCurrency) {
      return 1
    }

    // Find direct rate
    const directRate = exchangeRates.find(rate => 
      rate.fromCurrency === fromCurrency && 
      rate.toCurrency === toCurrency &&
      new Date(rate.effectiveDate) <= new Date()
    )

    if (directRate) {
      return directRate.rate
    }

    // Find inverse rate
    const inverseRate = exchangeRates.find(rate => 
      rate.fromCurrency === toCurrency && 
      rate.toCurrency === fromCurrency &&
      new Date(rate.effectiveDate) <= new Date()
    )

    if (inverseRate) {
      return 1 / inverseRate.rate
    }

    throw new ValidationError(`Exchange rate not found for ${fromCurrency} to ${toCurrency}`)
  }, [])

  return {
    convertCurrency,
    getExchangeRate
  }
}

/**
 * Inventory management hook
 */
export function useInventoryManagement() {
  /**
   * Calculate stock level
   */
  const calculateStockLevel = useCallback((
    transactions: InventoryTransaction[]
  ): StockLevel => {
    let totalIn = quantityUtils.create(0, 'pcs')
    let totalOut = quantityUtils.create(0, 'pcs')
    let totalAdjustment = quantityUtils.create(0, 'pcs')

    transactions.forEach(transaction => {
      switch (transaction.type) {
        case 'in':
        case 'purchase':
        case 'return':
          totalIn = quantityUtils.add(totalIn, transaction.quantity)
          break
        case 'out':
        case 'sale':
        case 'transfer':
          totalOut = quantityUtils.add(totalOut, transaction.quantity)
          break
        case 'adjustment':
          if (transaction.quantity.value > 0) {
            totalAdjustment = quantityUtils.add(totalAdjustment, transaction.quantity)
          } else {
            totalAdjustment = quantityUtils.subtract(totalAdjustment, 
              quantityUtils.create(Math.abs(transaction.quantity.value), transaction.quantity.unit)
            )
          }
          break
      }
    })

    const currentStock = quantityUtils.add(
      quantityUtils.subtract(totalIn, totalOut),
      totalAdjustment
    )

    return {
      currentStock,
      totalIn,
      totalOut,
      totalAdjustment,
      lastUpdated: new Date(),
      transactions: transactions.length
    }
  }, [])

  /**
   * Check if item is in stock
   */
  const isInStock = useCallback((
    currentStock: Quantity,
    requiredQuantity: Quantity,
    minStockLevel?: Quantity
  ): boolean => {
    const hasEnoughStock = quantityUtils.isGreaterThanOrEqual(currentStock, requiredQuantity)
    
    if (minStockLevel) {
      const afterTransaction = quantityUtils.subtract(currentStock, requiredQuantity)
      const meetsMinLevel = quantityUtils.isGreaterThanOrEqual(afterTransaction, minStockLevel)
      return hasEnoughStock && meetsMinLevel
    }

    return hasEnoughStock
  }, [])

  /**
   * Calculate reorder point
   */
  const calculateReorderPoint = useCallback((
    averageDailyUsage: number,
    leadTimeDays: number,
    safetyStockDays: number = 0
  ): number => {
    return averageDailyUsage * (leadTimeDays + safetyStockDays)
  }, [])

  return {
    calculateStockLevel,
    isInStock,
    calculateReorderPoint
  }
}

/**
 * Document validation hook
 */
export function useDocumentValidation() {
  /**
   * Validate sales order
   */
  const validateSalesOrder = useCallback((
    order: Partial<SalesOrder>,
    items: SalesOrderItem[] = []
  ): ValidationResult => {
    const errors: string[] = []
    const warnings: string[] = []

    // Required fields
    if (!order.customerId) errors.push('Customer is required')
    if (!order.orderDate) errors.push('Order date is required')
    if (!order.currency) errors.push('Currency is required')

    // Items validation
    if (items.length === 0) {
      errors.push('At least one item is required')
    } else {
      items.forEach((item, index) => {
        if (!item.itemId) errors.push(`Item ${index + 1}: Item is required`)
        if (!item.quantity || item.quantity.value <= 0) {
          errors.push(`Item ${index + 1}: Quantity must be greater than 0`)
        }
        if (!item.unitPrice || item.unitPrice.amount <= 0) {
          errors.push(`Item ${index + 1}: Unit price must be greater than 0`)
        }
      })
    }

    // Business rules
    if (order.deliveryDate && order.orderDate) {
      if (new Date(order.deliveryDate) < new Date(order.orderDate)) {
        errors.push('Delivery date cannot be before order date')
      }
    }

    // Warnings
    if (order.deliveryDate) {
      const daysDiff = Math.ceil(
        (new Date(order.deliveryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
      )
      if (daysDiff < 1) {
        warnings.push('Delivery date is very soon')
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      validatedAt: new Date()
    }
  }, [])

  /**
   * Validate invoice
   */
  const validateInvoice = useCallback((
    invoice: Partial<Invoice>,
    items: InvoiceItem[] = []
  ): ValidationResult => {
    const errors: string[] = []
    const warnings: string[] = []

    // Required fields
    if (!invoice.customerId) errors.push('Customer is required')
    if (!invoice.invoiceDate) errors.push('Invoice date is required')
    if (!invoice.currency) errors.push('Currency is required')

    // Items validation
    if (items.length === 0) {
      errors.push('At least one item is required')
    } else {
      items.forEach((item, index) => {
        if (!item.itemId) errors.push(`Item ${index + 1}: Item is required`)
        if (!item.quantity || item.quantity.value <= 0) {
          errors.push(`Item ${index + 1}: Quantity must be greater than 0`)
        }
        if (!item.unitPrice || item.unitPrice.amount <= 0) {
          errors.push(`Item ${index + 1}: Unit price must be greater than 0`)
        }
      })
    }

    // Business rules
    if (invoice.dueDate && invoice.invoiceDate) {
      if (new Date(invoice.dueDate) < new Date(invoice.invoiceDate)) {
        errors.push('Due date cannot be before invoice date')
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      validatedAt: new Date()
    }
  }, [])

  return {
    validateSalesOrder,
    validateInvoice
  }
}

/**
 * Document status management hook
 */
export function useDocumentStatus() {
  /**
   * Get next possible statuses
   */
  const getNextStatuses = useCallback((currentStatus: DocumentStatus): DocumentStatus[] => {
    return statusUtils.getNextStatuses(currentStatus)
  }, [])

  /**
   * Check if status transition is valid
   */
  const canTransitionTo = useCallback((
    fromStatus: DocumentStatus,
    toStatus: DocumentStatus
  ): boolean => {
    const nextStatuses = getNextStatuses(fromStatus)
    return nextStatuses.includes(toStatus)
  }, [getNextStatuses])

  /**
   * Check if document is editable
   */
  const isEditable = useCallback((status: DocumentStatus): boolean => {
    return !statusUtils.isFinalStatus(status)
  }, [])

  /**
   * Check if document can be deleted
   */
  const isDeletable = useCallback((status: DocumentStatus): boolean => {
    return status === 'draft' || status === 'pending'
  }, [])

  return {
    getNextStatuses,
    canTransitionTo,
    isEditable,
    isDeletable
  }
}

/**
 * Business metrics calculation hook
 */
export function useBusinessMetrics() {
  /**
   * Calculate order fulfillment rate
   */
  const calculateFulfillmentRate = useCallback((
    orders: SalesOrder[]
  ): number => {
    if (orders.length === 0) return 0
    
    const fulfilledOrders = orders.filter(order => 
      order.status === 'delivered' || order.status === 'completed'
    ).length
    
    return (fulfilledOrders / orders.length) * 100
  }, [])

  /**
   * Calculate average order value
   */
  const calculateAverageOrderValue = useCallback((
    orders: SalesOrder[]
  ): Money | null => {
    if (orders.length === 0) return null
    
    const totalValue = orders.reduce((sum, order) => sum + order.totalAmount.amount, 0)
    const averageAmount = totalValue / orders.length
    
    return moneyUtils.create(averageAmount, orders[0].currency)
  }, [])

  /**
   * Calculate inventory turnover
   */
  const calculateInventoryTurnover = useCallback((
    costOfGoodsSold: number,
    averageInventoryValue: number
  ): number => {
    if (averageInventoryValue === 0) return 0
    return costOfGoodsSold / averageInventoryValue
  }, [])

  return {
    calculateFulfillmentRate,
    calculateAverageOrderValue,
    calculateInventoryTurnover
  }
}