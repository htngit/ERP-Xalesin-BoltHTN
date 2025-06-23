import React, { useState, useEffect } from 'react';
import { useDebounce } from '../hooks';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { Plus, Search, Package, Warehouse, MapPin, ArrowRightLeft } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/Select';
import { inventoryApi, warehouseApi, locationApi, itemApi } from '../lib/api/warehouse';
import type { Item, Warehouse as WarehouseType, Location, StockTransferForm } from '../lib/types';

export const StockTransfer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<StockTransferForm>({
    item_id: '',
    source_warehouse_id: '',
    source_location_id: '',
    destination_warehouse_id: '',
    destination_location_id: '',
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

  // Fetch source locations based on selected warehouse
  const { data: sourceLocations = [] } = useQuery({
    queryKey: ['sourceLocations', formData.source_warehouse_id],
    queryFn: () => formData.source_warehouse_id 
      ? locationApi.getLocationsByWarehouse(formData.source_warehouse_id) 
      : [],
    enabled: !!formData.source_warehouse_id,
  });

  // Fetch destination locations based on selected warehouse
  const { data: destinationLocations = [] } = useQuery({
    queryKey: ['destinationLocations', formData.destination_warehouse_id],
    queryFn: () => formData.destination_warehouse_id 
      ? locationApi.getLocationsByWarehouse(formData.destination_warehouse_id) 
      : [],
    enabled: !!formData.destination_warehouse_id,
  });

  // Fetch batches for the selected item
  const { data: batches = [] } = useQuery({
    queryKey: ['batches', formData.item_id],
    queryFn: () => formData.item_id ? inventoryApi.getBatchesByItem(formData.item_id) : [],
    enabled: !!formData.item_id,
  });

  // Fetch current stock level for the selected source item/location
  const { data: sourceStock = { quantity: 0 } } = useQuery({
    queryKey: ['sourceStockLevel', formData.item_id, formData.source_warehouse_id, formData.source_location_id, formData.batch_id],
    queryFn: () => {
      if (!formData.item_id || !formData.source_warehouse_id || !formData.source_location_id) {
        return { quantity: 0 };
      }
      return inventoryApi.getStockLevel({
        item_id: formData.item_id,
        warehouse_id: formData.source_warehouse_id,
        location_id: formData.source_location_id,
        batch_id: formData.batch_id || undefined,
      });
    },
    enabled: !!(formData.item_id && formData.source_warehouse_id && formData.source_location_id),
  });

  // Mutation for stock transfer
  const transferMutation = useMutation({
    mutationFn: (data: StockTransferForm) => inventoryApi.stockTransfer(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stockLevels'] });
      queryClient.invalidateQueries({ queryKey: ['stockMovements'] });
      queryClient.invalidateQueries({ 
        queryKey: ['sourceStockLevel', formData.item_id, formData.source_warehouse_id, formData.source_location_id] 
      });
      toast.success(`Transfer stok berhasil dilakukan`);
      resetForm();
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal melakukan transfer stok');
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

  // Reset destination location when destination warehouse changes
  useEffect(() => {
    if (formData.destination_warehouse_id) {
      setFormData(prev => ({
        ...prev,
        destination_location_id: '',
      }));
    }
  }, [formData.destination_warehouse_id]);

  // Reset source location when source warehouse changes
  useEffect(() => {
    if (formData.source_warehouse_id) {
      setFormData(prev => ({
        ...prev,
        source_location_id: '',
      }));
    }
  }, [formData.source_warehouse_id]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.item_id) {
      toast.error('Pilih item terlebih dahulu');
      return;
    }
    if (!formData.source_warehouse_id) {
      toast.error('Pilih gudang sumber terlebih dahulu');
      return;
    }
    if (!formData.source_location_id) {
      toast.error('Pilih lokasi sumber terlebih dahulu');
      return;
    }
    if (!formData.destination_warehouse_id) {
      toast.error('Pilih gudang tujuan terlebih dahulu');
      return;
    }
    if (!formData.destination_location_id) {
      toast.error('Pilih lokasi tujuan terlebih dahulu');
      return;
    }
    if (!formData.quantity || formData.quantity <= 0) {
      toast.error('Kuantitas harus lebih dari 0');
      return;
    }

    // Check if source and destination are the same
    if (formData.source_warehouse_id === formData.destination_warehouse_id && 
        formData.source_location_id === formData.destination_location_id) {
      toast.error('Lokasi sumber dan tujuan tidak boleh sama');
      return;
    }

    // Check if transfer would result in negative stock
    if (formData.quantity > sourceStock.quantity) {
      toast.error(`Stok tidak cukup. Stok saat ini: ${sourceStock.quantity}`);
      return;
    }

    // Submit transfer
    transferMutation.mutate(formData);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      item_id: '',
      source_warehouse_id: '',
      source_location_id: '',
      destination_warehouse_id: '',
      destination_location_id: '',
      batch_id: null,
      quantity: 0,
      reason: '',
      reference: '',
      date: new Date().toISOString().split('T')[0],
    });
    setShowForm(false);
  };

  // Filter items based on debounced search term
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    item.sku.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Transfer Stok</h1>
          <p className="text-gray-600">Pindahkan stok antar lokasi</p>
        </div>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Transfer Baru
        </Button>
      </div>

      {/* Transfer Form */}
      {showForm && (
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Form Transfer Stok</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="item_id" className="block text-sm font-medium text-gray-700 mb-1">
                  Item <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.item_id}
                  onValueChange={(value) => handleInputChange({ target: { name: 'item_id', value } } as React.ChangeEvent<HTMLSelectElement>)}
                >
                  <SelectTrigger className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
                    <SelectValue placeholder="Pilih Item" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredItems.map(item => (
                      <SelectItem key={item.id} value={item.id}>
                        {item.name} ({item.sku})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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

              {/* Source Location */}
              <div className="md:col-span-2">
                <h3 className="text-md font-medium text-gray-800 mb-3 border-b pb-2">Lokasi Sumber</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="source_warehouse_id" className="block text-sm font-medium text-gray-700 mb-1">
                      Gudang Sumber <span className="text-red-500">*</span>
                    </label>
                    <Select
                      value={formData.source_warehouse_id}
                      onValueChange={(value) => handleInputChange({ target: { name: 'source_warehouse_id', value } } as React.ChangeEvent<HTMLSelectElement>)}
                    >
                      <SelectTrigger className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
                        <SelectValue placeholder="Pilih Gudang" />
                      </SelectTrigger>
                      <SelectContent>
                        {warehouses.map(warehouse => (
                          <SelectItem key={warehouse.id} value={warehouse.id}>
                            {warehouse.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="source_location_id" className="block text-sm font-medium text-gray-700 mb-1">
                      Lokasi Sumber <span className="text-red-500">*</span>
                    </label>
                    <Select
                      value={formData.source_location_id}
                      onValueChange={(value) => handleInputChange({ target: { name: 'source_location_id', value } } as React.ChangeEvent<HTMLSelectElement>)}
                      disabled={!formData.source_warehouse_id}
                    >
                      <SelectTrigger className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
                        <SelectValue placeholder="Pilih Lokasi" />
                      </SelectTrigger>
                      <SelectContent>
                        {sourceLocations.map(location => (
                          <SelectItem key={location.id} value={location.id}>
                            {location.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Destination Location */}
              <div className="md:col-span-2">
                <h3 className="text-md font-medium text-gray-800 mb-3 border-b pb-2">Lokasi Tujuan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="destination_warehouse_id" className="block text-sm font-medium text-gray-700 mb-1">
                      Gudang Tujuan <span className="text-red-500">*</span>
                    </label>
                    <Select
                      value={formData.destination_warehouse_id}
                      onValueChange={(value) => handleInputChange({ target: { name: 'destination_warehouse_id', value } } as React.ChangeEvent<HTMLSelectElement>)}
                    >
                      <SelectTrigger className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
                        <SelectValue placeholder="Pilih Gudang" />
                      </SelectTrigger>
                      <SelectContent>
                        {warehouses.map(warehouse => (
                          <SelectItem key={warehouse.id} value={warehouse.id}>
                            {warehouse.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="destination_location_id" className="block text-sm font-medium text-gray-700 mb-1">
                      Lokasi Tujuan <span className="text-red-500">*</span>
                    </label>
                    <Select
                      value={formData.destination_location_id}
                      onValueChange={(value) => handleInputChange({ target: { name: 'destination_location_id', value } } as React.ChangeEvent<HTMLSelectElement>)}
                      disabled={!formData.destination_warehouse_id}
                    >
                      <SelectTrigger className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
                        <SelectValue placeholder="Pilih Lokasi" />
                      </SelectTrigger>
                      <SelectContent>
                        {destinationLocations.map(location => (
                          <SelectItem key={location.id} value={location.id}>
                            {location.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Batch and Quantity */}
              <div className="md:col-span-2">
                <h3 className="text-md font-medium text-gray-800 mb-3 border-b pb-2">Detail Transfer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formData.item_id && items.find(i => i.id === formData.item_id)?.is_batch_tracked && (
                    <div className="mb-4">
                      <label htmlFor="batch_id" className="block text-sm font-medium text-gray-700 mb-1">Batch (Opsional)</label>
                      <Select
                        value={formData.batch_id || ''}
                        onValueChange={(value) => handleInputChange({ target: { name: 'batch_id', value } } as React.ChangeEvent<HTMLSelectElement>)}
                        disabled={!formData.item_id}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pilih Batch" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Pilih Batch</SelectItem>
                          {batches.map((batch) => (
                            <SelectItem key={batch.id} value={batch.id}>
                              {batch.batch_number} (Qty: {batch.quantity})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
                    {formData.item_id && formData.source_warehouse_id && formData.source_location_id && (
                      <p className="mt-1 text-sm text-gray-500">
                        Stok tersedia: {sourceStock.quantity}
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
                      placeholder="Alasan transfer stok"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <Button type="button" variant="outline" onClick={resetForm}>
                Batal
              </Button>
              <Button 
                type="submit" 
                disabled={transferMutation.isPending}
              >
                {transferMutation.isPending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Memproses...
                  </>
                ) : (
                  <>
                    <ArrowRightLeft className="h-4 w-4 mr-2" />
                    Transfer Stok
                  </>
                )}
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Recent Transfers */}
      <Card>
        <div className="mb-4">
          <h2 className="text-lg font-medium text-gray-900">Transfer Stok Terbaru</h2>
          <p className="text-sm text-gray-600">Lihat riwayat transfer stok terbaru</p>
        </div>
        
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Cari transfer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
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
                  Dari
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ke
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
                  Lihat riwayat transfer stok di halaman Pergerakan Stok
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};