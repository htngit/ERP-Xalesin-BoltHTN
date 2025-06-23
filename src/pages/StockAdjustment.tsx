import React, { useState, useEffect } from 'react';
import { useDebounce } from '../hooks';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { Plus, Search, Package, Warehouse as WarehouseIcon, MapPin, ArrowUp, ArrowDown } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../components/ui/Select';
import { FormWrapper } from '../components/common/FormWrapper';
import { ErrorBoundary } from '../components/common/ErrorBoundary';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { TableWrapper, TableHead, TableBody, TableHeader, TableCell, TableEmpty } from '../components/common/TableWrapper';
import { inventoryApi, warehouseApi, locationApi, itemApi } from '../lib/api/warehouse';
import type { Item, Warehouse as WarehouseType, Location, InventoryAdjustmentForm } from '../lib/types';

/**
 * Komponen StockAdjustment untuk mengelola penyesuaian stok barang
 * Memungkinkan pengguna untuk menambah atau mengurangi stok barang di lokasi tertentu
 */
export const StockAdjustment: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [showForm, setShowForm] = useState(false);
  const [adjustmentType, setAdjustmentType] = useState<'in' | 'out'>('in');
  const [formData, setFormData] = useState<InventoryAdjustmentForm>({
    item_id: '',
    warehouse_id: '',
    location_id: '',
    batch_id: null,
    quantity: 0,
    reason: '',
    reference: '',
    date: new Date().toISOString().split('T')[0],
  });

  const queryClient = useQueryClient();

  // Fetch items that are stock tracked
  const { data: items = [] } = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const allItems = await itemApi.getItems();
      return allItems.filter(item => item.is_stock_tracked);
    },
  });

  // Fetch warehouses
  const { data: warehouses = [] } = useQuery({
    queryKey: ['warehouses'],
    queryFn: warehouseApi.getWarehouses,
  });

  // Fetch locations based on selected warehouse
  const { data: locations = [] } = useQuery({
    queryKey: ['locations', formData.warehouse_id],
    queryFn: () => formData.warehouse_id 
      ? locationApi.getLocationsByWarehouse(formData.warehouse_id) 
      : locationApi.getAllLocations(),
    enabled: true, // Always fetch all locations or filtered by warehouse
  });

  // Fetch batches for the selected item
  const { data: batches = [] } = useQuery({
    queryKey: ['batches', formData.item_id],
    queryFn: () => formData.item_id ? inventoryApi.getBatchesByItem(formData.item_id) : [],
    enabled: !!formData.item_id,
  });

  // Fetch current stock level for the selected item/location
  const { data: currentStock = { quantity: 0 } } = useQuery({
    queryKey: ['stockLevel', formData.item_id, formData.warehouse_id, formData.location_id],
    queryFn: () => {
      if (!formData.item_id || !formData.warehouse_id || !formData.location_id) {
        return { quantity: 0 };
      }
      return inventoryApi.getStockLevel({
        item_id: formData.item_id,
        warehouse_id: formData.warehouse_id,
        location_id: formData.location_id,
        batch_id: formData.batch_id || undefined,
      });
    },
    enabled: !!(formData.item_id && formData.warehouse_id && formData.location_id),
  });

  // Mutation for inventory adjustment
  const adjustmentMutation = useMutation({
    mutationFn: (data: InventoryAdjustmentForm) => {
      const adjustmentData = {
        ...data,
        adjustment_type: adjustmentType,
      };
      return inventoryApi.inventoryAdjustment(adjustmentData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stockLevels'] });
      queryClient.invalidateQueries({ queryKey: ['stockMovements'] });
      queryClient.invalidateQueries({ 
        queryKey: ['stockLevel', formData.item_id, formData.warehouse_id, formData.location_id] 
      });
      toast.success(`Penyesuaian stok berhasil dilakukan`);
      resetForm();
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal melakukan penyesuaian stok');
    },
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.item_id) {
      toast.error('Pilih item terlebih dahulu');
      return;
    }
    if (!formData.warehouse_id) {
      toast.error('Pilih gudang terlebih dahulu');
      return;
    }
    if (!formData.location_id) {
      toast.error('Pilih lokasi terlebih dahulu');
      return;
    }
    if (!formData.quantity || formData.quantity <= 0) {
      toast.error('Kuantitas harus lebih dari 0');
      return;
    }

    // Check if adjustment out would result in negative stock
    if (adjustmentType === 'out' && formData.quantity > currentStock.quantity) {
      toast.error(`Stok tidak cukup. Stok saat ini: ${currentStock.quantity}`);
      return;
    }

    // Submit adjustment
    adjustmentMutation.mutate(formData);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      item_id: '',
      warehouse_id: '',
      location_id: '',
      batch_id: null,
      quantity: 0,
      reason: '',
      reference: '',
      date: new Date().toISOString().split('T')[0],
    });
    setShowForm(false);
  };

  // Filter items based on search term
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ErrorBoundary>
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Penyesuaian Stok</h1>
          <p className="text-gray-600">Tambah atau kurangi stok barang</p>
        </div>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Penyesuaian Baru
        </Button>
      </div>

      {/* Adjustment Form */}
      {showForm && (
        <FormWrapper
          title="Form Penyesuaian Stok"
          description="Tambah atau kurangi stok barang di lokasi tertentu"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <Button
                  type="button"
                  variant={adjustmentType === 'in' ? 'default' : 'outline'}
                  onClick={() => setAdjustmentType('in')}
                  className={adjustmentType === 'in' ? 'bg-green-600 hover:bg-green-700' : ''}
                >
                  <ArrowUp className="h-4 w-4 mr-2" />
                  Stok Masuk
                </Button>
                <Button
                  type="button"
                  variant={adjustmentType === 'out' ? 'default' : 'outline'}
                  onClick={() => setAdjustmentType('out')}
                  className={adjustmentType === 'out' ? 'bg-red-600 hover:bg-red-700' : ''}
                >
                  <ArrowDown className="h-4 w-4 mr-2" />
                  Stok Keluar
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="item_id" className="block text-sm font-medium text-gray-700">Item</label>
                <Select
                  value={formData.item_id}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, item_id: value }))}
                >
                  <SelectTrigger className="mt-1 w-full">
                    <SelectValue placeholder="Pilih Item" />
                  </SelectTrigger>
                  <SelectContent>
                    {items.map((item) => (
                      <SelectItem key={item.id} value={item.id}>{item.name} ({item.sku})</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Tanggal</label>
                <Input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="mt-1 block w-full"
                />
              </div>

              <div>
                <label htmlFor="warehouse_id" className="block text-sm font-medium text-gray-700">Gudang</label>
                <Select
                  value={formData.warehouse_id}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, warehouse_id: value }))}
                >
                  <SelectTrigger className="mt-1 w-full">
                    <SelectValue placeholder="Pilih Gudang" />
                  </SelectTrigger>
                  <SelectContent>
                    {warehouses.map((warehouse) => (
                      <SelectItem key={warehouse.id} value={warehouse.id}>{warehouse.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="location_id" className="block text-sm font-medium text-gray-700 mb-1">
                  Lokasi <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.location_id}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, location_id: value }))}
                >
                  <SelectTrigger className="mt-1 w-full" disabled={!formData.warehouse_id}>
                    <SelectValue placeholder="Pilih Lokasi" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations
                      .filter(location => !formData.warehouse_id || location.warehouse_id === formData.warehouse_id)
                      .map((location) => (
                        <SelectItem key={location.id} value={location.id}>{location.name}</SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

              {formData.item_id && items.find(i => i.id === formData.item_id)?.is_batch_tracked && (
                <div>
                  <label htmlFor="batch_id" className="block text-sm font-medium text-gray-700">Batch</label>
                  <Select
                    value={formData.batch_id || ''}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, batch_id: value }))}
                  >
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue placeholder="Pilih Batch (Opsional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Pilih Batch (Opsional)</SelectItem>
                      {batches.map((batch) => (
                        <SelectItem key={batch.id} value={batch.id}>{batch.batch_number} (Qty: {batch.quantity})</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Kuantitas <span className="text-red-500">*</span>
                </label>
                <Input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="0.01"
                  step="0.01"
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                />
                {formData.item_id && formData.warehouse_id && formData.location_id && (
                  <p className="mt-1 text-sm text-gray-500">
                    Stok saat ini: {currentStock.quantity}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="reference" className="block text-sm font-medium text-gray-700">Referensi</label>
                <Input
                  type="text"
                  id="reference"
                  name="reference"
                  value={formData.reference}
                  onChange={handleInputChange}
                  className="mt-1 block w-full"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Alasan Penyesuaian</label>
                <Input
                  type="text"
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="mt-1 block w-full"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <Button type="button" variant="outline" onClick={resetForm}>
                Batal
              </Button>
              <Button 
                type="submit" 
                disabled={adjustmentMutation.isPending}
                className={adjustmentType === 'in' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}
              >
                {adjustmentMutation.isPending ? (
                  <>
                    <LoadingSpinner size={16} />
                    Memproses...
                  </>
                ) : (
                  <>
                    {adjustmentType === 'in' ? (
                      <>
                        <ArrowUp className="h-4 w-4 mr-2" />
                        Tambah Stok
                      </>
                    ) : (
                      <>
                        <ArrowDown className="h-4 w-4 mr-2" />
                        Kurangi Stok
                      </>
                    )}
                  </>
                )}
              </Button>
            </div>
          </form>
        </FormWrapper>
      )}

      {/* Recent Adjustments */}
      <FormWrapper
        title="Penyesuaian Stok Terbaru"
        description="Lihat riwayat penyesuaian stok terbaru"
      >
        
        <div className="mb-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Cari item..."
              className="pl-10 pr-4 py-2 border rounded-md w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <TableWrapper>
          <TableHead>
            <tr>
              <TableHeader>Tanggal</TableHeader>
              <TableHeader>Item</TableHeader>
              <TableHeader>Lokasi</TableHeader>
              <TableHeader>Tipe</TableHeader>
              <TableHeader align="right">Kuantitas</TableHeader>
              <TableHeader>Alasan</TableHeader>
              <TableHeader>Referensi</TableHeader>
            </tr>
          </TableHead>
          <TableBody>
            {/* This would be populated with actual data from an API call */}
            <TableEmpty colSpan={7} message="Lihat riwayat penyesuaian stok di halaman Pergerakan Stok" />
          </TableBody>
        </TableWrapper>
      </FormWrapper>
    </div>
    </ErrorBoundary>
  );
};