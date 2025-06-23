import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { Plus, Search, Package, Warehouse, MapPin, ArrowUp, ArrowDown } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { inventoryApi, warehouseApi, locationApi, itemApi } from '../lib/api/warehouse';
import type { Item, Warehouse as WarehouseType, Location, InventoryAdjustmentForm } from '../lib/types';

export const StockAdjustment: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Form Penyesuaian Stok</h2>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="item_id" className="block text-sm font-medium text-gray-700 mb-1">
                  Item <span className="text-red-500">*</span>
                </label>
                <select
                  id="item_id"
                  name="item_id"
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.item_id}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Pilih Item</option>
                  {filteredItems.map(item => (
                    <option key={item.id} value={item.id}>{item.name} ({item.sku})</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Tanggal <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="warehouse_id" className="block text-sm font-medium text-gray-700 mb-1">
                  Gudang <span className="text-red-500">*</span>
                </label>
                <select
                  id="warehouse_id"
                  name="warehouse_id"
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.warehouse_id}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Pilih Gudang</option>
                  {warehouses.map(warehouse => (
                    <option key={warehouse.id} value={warehouse.id}>{warehouse.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="location_id" className="block text-sm font-medium text-gray-700 mb-1">
                  Lokasi <span className="text-red-500">*</span>
                </label>
                <select
                  id="location_id"
                  name="location_id"
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.location_id}
                  onChange={handleInputChange}
                  required
                  disabled={!formData.warehouse_id}
                >
                  <option value="">Pilih Lokasi</option>
                  {locations
                    .filter(location => !formData.warehouse_id || location.warehouse_id === formData.warehouse_id)
                    .map(location => (
                      <option key={location.id} value={location.id}>{location.name}</option>
                    ))}
                </select>
              </div>

              {formData.item_id && items.find(i => i.id === formData.item_id)?.is_batch_tracked && (
                <div>
                  <label htmlFor="batch_id" className="block text-sm font-medium text-gray-700 mb-1">
                    Batch
                  </label>
                  <select
                    id="batch_id"
                    name="batch_id"
                    className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                    value={formData.batch_id || ''}
                    onChange={handleInputChange}
                  >
                    <option value="">Tanpa Batch</option>
                    {batches.map(batch => (
                      <option key={batch.id} value={batch.id}>
                        {batch.batch_number} (Exp: {new Date(batch.expiry_date).toLocaleDateString()})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Kuantitas <span className="text-red-500">*</span>
                </label>
                <input
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
                <label htmlFor="reference" className="block text-sm font-medium text-gray-700 mb-1">
                  Referensi
                </label>
                <input
                  type="text"
                  id="reference"
                  name="reference"
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.reference}
                  onChange={handleInputChange}
                  placeholder="Nomor referensi (opsional)"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                  Alasan <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.reason}
                  onChange={handleInputChange}
                  placeholder="Alasan penyesuaian stok"
                  required
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
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
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
        </Card>
      )}

      {/* Recent Adjustments */}
      <Card>
        <div className="mb-4">
          <h2 className="text-lg font-medium text-gray-900">Penyesuaian Stok Terbaru</h2>
          <p className="text-sm text-gray-600">Lihat riwayat penyesuaian stok terbaru</p>
        </div>
        
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari berdasarkan nama item atau referensi..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lokasi
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipe
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kuantitas
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Alasan
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Referensi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* This would be populated with actual data from an API call */}
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
                  Lihat riwayat penyesuaian stok di halaman Pergerakan Stok
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};