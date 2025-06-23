import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, Filter, Package, Warehouse, MapPin, BarChart } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { inventoryApi, warehouseApi, locationApi, itemApi } from '../lib/api/warehouse';
import type { Item, Warehouse as WarehouseType, Location } from '../lib/types';

export const StockLevels: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    itemId: '',
    warehouseId: '',
    locationId: '',
    showZeroStock: true,
  });
  const [showFilters, setShowFilters] = useState(false);

  // Fetch stock levels with filters
  const { data: stockLevels = [], isLoading: isLoadingStock } = useQuery({
    queryKey: ['stockLevels', filters],
    queryFn: () => inventoryApi.getStockLevels({
      item_id: filters.itemId || undefined,
      warehouse_id: filters.warehouseId || undefined,
      location_id: filters.locationId || undefined,
    }),
  });

  // Fetch items for filter dropdown
  const { data: items = [] } = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const allItems = await itemApi.getItems();
      return allItems.filter(item => item.is_stock_tracked);
    },
  });

  // Fetch warehouses for filter dropdown
  const { data: warehouses = [] } = useQuery({
    queryKey: ['warehouses'],
    queryFn: warehouseApi.getWarehouses,
  });

  // Fetch locations based on selected warehouse
  const { data: locations = [] } = useQuery({
    queryKey: ['locations', filters.warehouseId],
    queryFn: () => filters.warehouseId 
      ? locationApi.getLocationsByWarehouse(filters.warehouseId) 
      : locationApi.getAllLocations(),
    enabled: true, // Always fetch all locations or filtered by warehouse
  });

  // Filter stock levels based on search term and zero stock filter
  const filteredStockLevels = stockLevels
    .filter(stock => {
      const item = items.find(i => i.id === stock.item_id);
      const itemName = item ? item.name : '';
      const itemSku = item ? item.sku : '';
      
      const matchesSearch = 
        itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        itemSku.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesZeroStock = filters.showZeroStock || stock.quantity > 0;
      
      return matchesSearch && matchesZeroStock;
    });

  // Apply filters
  const handleApplyFilters = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    setFilters({
      itemId: formData.get('itemId') as string || '',
      warehouseId: formData.get('warehouseId') as string || '',
      locationId: formData.get('locationId') as string || '',
      showZeroStock: formData.get('showZeroStock') === 'on',
    });

    setShowFilters(false);
  };

  // Reset filters
  const handleResetFilters = () => {
    setFilters({
      itemId: '',
      warehouseId: '',
      locationId: '',
      showZeroStock: true,
    });
    setShowFilters(false);
  };

  // Get item name by ID
  const getItemName = (itemId: string) => {
    const item = items.find(i => i.id === itemId);
    return item ? item.name : 'Unknown Item';
  };

  // Get item SKU by ID
  const getItemSku = (itemId: string) => {
    const item = items.find(i => i.id === itemId);
    return item ? item.sku : '';
  };

  // Get warehouse name by ID
  const getWarehouseName = (warehouseId: string) => {
    const warehouse = warehouses.find(w => w.id === warehouseId);
    return warehouse ? warehouse.name : 'Unknown Warehouse';
  };

  // Get location name by ID
  const getLocationName = (locationId: string) => {
    const location = locations.find(l => l.id === locationId);
    return location ? location.name : 'Unknown Location';
  };

  // Calculate total stock quantity
  const totalStockQuantity = stockLevels.reduce((sum, stock) => sum + stock.quantity, 0);

  // Calculate total number of items with stock
  const itemsWithStock = new Set(stockLevels.filter(stock => stock.quantity > 0).map(stock => stock.item_id)).size;

  // Calculate total number of locations with stock
  const locationsWithStock = new Set(
    stockLevels
      .filter(stock => stock.quantity > 0)
      .map(stock => `${stock.warehouse_id}-${stock.location_id}`)
  ).size;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Level Stok</h1>
          <p className="text-gray-600">Lihat level stok saat ini di semua lokasi</p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="flex items-center">
            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <Package className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Item dengan Stok</p>
              <p className="text-2xl font-bold text-gray-900">{itemsWithStock}</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Lokasi dengan Stok</p>
              <p className="text-2xl font-bold text-gray-900">{locationsWithStock}</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <BarChart className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Kuantitas</p>
              <p className="text-2xl font-bold text-gray-900">{totalStockQuantity}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      {showFilters && (
        <Card>
          <form onSubmit={handleApplyFilters} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label htmlFor="itemId" className="block text-sm font-medium text-gray-700 mb-1">
                  Item
                </label>
                <select
                  id="itemId"
                  name="itemId"
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue={filters.itemId}
                >
                  <option value="">Semua Item</option>
                  {items.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="warehouseId" className="block text-sm font-medium text-gray-700 mb-1">
                  Gudang
                </label>
                <select
                  id="warehouseId"
                  name="warehouseId"
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue={filters.warehouseId}
                >
                  <option value="">Semua Gudang</option>
                  {warehouses.map(warehouse => (
                    <option key={warehouse.id} value={warehouse.id}>{warehouse.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="locationId" className="block text-sm font-medium text-gray-700 mb-1">
                  Lokasi
                </label>
                <select
                  id="locationId"
                  name="locationId"
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue={filters.locationId}
                >
                  <option value="">Semua Lokasi</option>
                  {locations
                    .filter(location => !filters.warehouseId || location.warehouse_id === filters.warehouseId)
                    .map(location => (
                      <option key={location.id} value={location.id}>{location.name}</option>
                    ))}
                </select>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="showZeroStock"
                  name="showZeroStock"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  defaultChecked={filters.showZeroStock}
                />
                <label htmlFor="showZeroStock" className="ml-2 block text-sm text-gray-700">
                  Tampilkan item dengan stok nol
                </label>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <Button type="button" variant="outline" onClick={handleResetFilters}>
                Reset
              </Button>
              <Button type="submit">
                Terapkan Filter
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Search */}
      <Card>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Cari berdasarkan nama item atau SKU..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </Card>

      {/* Active Filters */}
      {(filters.itemId || filters.warehouseId || filters.locationId || !filters.showZeroStock) && (
        <div className="flex flex-wrap gap-2">
          {filters.itemId && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
              <Package className="h-3 w-3 mr-1" />
              Item: {getItemName(filters.itemId)}
            </div>
          )}
          {filters.warehouseId && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
              <Warehouse className="h-3 w-3 mr-1" />
              Gudang: {getWarehouseName(filters.warehouseId)}
            </div>
          )}
          {filters.locationId && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
              <MapPin className="h-3 w-3 mr-1" />
              Lokasi: {getLocationName(filters.locationId)}
            </div>
          )}
          {!filters.showZeroStock && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
              <BarChart className="h-3 w-3 mr-1" />
              Hanya stok > 0
            </div>
          )}
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs" 
            onClick={handleResetFilters}
          >
            Reset Semua
          </Button>
        </div>
      )}

      {/* Stock Levels Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SKU
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gudang
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lokasi
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Batch
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kuantitas
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {isLoadingStock ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
                    <p className="mt-2 text-sm text-gray-600">Memuat data stok...</p>
                  </td>
                </tr>
              ) : filteredStockLevels.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center">
                    <p className="text-gray-600">
                      {searchTerm || Object.values(filters).some(v => v !== '' && v !== true) 
                        ? 'Tidak ada data stok yang sesuai dengan pencarian atau filter' 
                        : 'Belum ada data stok'}
                    </p>
                  </td>
                </tr>
              ) : (
                filteredStockLevels.map((stock, index) => (
                  <tr key={index} className={`hover:bg-gray-50 ${stock.quantity <= 0 ? 'bg-red-50' : ''}`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {getItemName(stock.item_id)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {getItemSku(stock.item_id)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {getWarehouseName(stock.warehouse_id)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {getLocationName(stock.location_id)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {stock.batch_id ? stock.batch_number : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">
                      <span className={`${stock.quantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {stock.quantity}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};