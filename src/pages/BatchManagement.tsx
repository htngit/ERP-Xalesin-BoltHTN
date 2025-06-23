import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, Search, Edit, Trash2, Package, Calendar, Clock, BarChart } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { itemApi, batchApi } from '../lib/api/warehouse';
import type { Item, Batch } from '../lib/types';
import toast from 'react-hot-toast';

export const BatchManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingBatch, setEditingBatch] = useState<Batch | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<string>('');

  const queryClient = useQueryClient();

  // Fetch all items that are stock tracked
  const { data: items = [], isLoading: isLoadingItems } = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const allItems = await itemApi.getItems();
      return allItems.filter(item => item.is_stock_tracked);
    },
  });

  // Fetch batches based on selected item
  const { data: batches = [], isLoading: isLoadingBatches } = useQuery({
    queryKey: ['batches', selectedItemId],
    queryFn: () => selectedItemId ? batchApi.getBatchesByItem(selectedItemId) : Promise.resolve([]),
    enabled: !!selectedItemId,
  });

  // Set first item as selected by default when items are loaded
  useEffect(() => {
    if (items.length > 0 && !selectedItemId) {
      setSelectedItemId(items[0].id);
    }
  }, [items, selectedItemId]);

  // Mutations
  const createBatchMutation = useMutation({
    mutationFn: batchApi.createBatch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['batches', selectedItemId] });
      setShowForm(false);
      toast.success('Batch berhasil dibuat');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal membuat batch');
    },
  });

  const updateBatchMutation = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<Batch> }) =>
      batchApi.updateBatch(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['batches', selectedItemId] });
      setEditingBatch(null);
      toast.success('Batch berhasil diperbarui');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal memperbarui batch');
    },
  });

  const deleteBatchMutation = useMutation({
    mutationFn: batchApi.deleteBatch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['batches', selectedItemId] });
      toast.success('Batch berhasil dihapus');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal menghapus batch');
    },
  });

  const filteredBatches = batches.filter(batch =>
    batch.batch_number.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const batchData = {
      item_id: selectedItemId,
      batch_number: formData.get('batch_number') as string,
      production_date: formData.get('production_date') as string || null,
      expiry_date: formData.get('expiry_date') as string || null,
      quantity: parseFloat(formData.get('quantity') as string) || 0,
    };

    if (editingBatch) {
      updateBatchMutation.mutate({ id: editingBatch.id, updates: batchData });
    } else {
      createBatchMutation.mutate(batchData);
    }
  };

  const selectedItem = items.find(item => item.id === selectedItemId);
  const totalQuantity = batches.reduce((sum, batch) => sum + batch.quantity, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manajemen Batch</h1>
          <p className="text-gray-600">Kelola batch untuk item yang tertelusuri stoknya</p>
        </div>
        <Button 
          onClick={() => setShowForm(true)}
          disabled={!selectedItemId}
        >
          <Plus className="h-4 w-4 mr-2" />
          Tambah Batch
        </Button>
      </div>

      {/* Item Selection */}
      <Card>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Pilih Item</h3>
          {isLoadingItems ? (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
              <p className="mt-2 text-sm text-gray-600">Memuat item...</p>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-gray-600">Tidak ada item yang tertelusuri stoknya</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItemId(item.id)}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors duration-200 ${selectedItemId === item.id ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-300'}`}
                >
                  <div className="flex items-center">
                    <Package className={`h-5 w-5 mr-2 ${selectedItemId === item.id ? 'text-primary-600' : 'text-gray-500'}`} />
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">SKU: {item.sku}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>

      {selectedItemId && (
        <>
          {/* Search */}
          <Card>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari batch berdasarkan nomor batch..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </Card>

          {/* Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Item Terpilih</p>
                  <p className="text-lg font-bold text-gray-900">{selectedItem?.name}</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Batch</p>
                  <p className="text-2xl font-bold text-gray-900">{batches.length}</p>
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
                  <p className="text-2xl font-bold text-gray-900">{totalQuantity}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Batches Table */}
          <Card>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nomor Batch
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tanggal Produksi
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tanggal Kadaluarsa
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kuantitas
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tanggal Dibuat
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {isLoadingBatches ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
                        <p className="mt-2 text-sm text-gray-600">Memuat batch...</p>
                      </td>
                    </tr>
                  ) : filteredBatches.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center">
                        <p className="text-gray-600">
                          {searchTerm ? 'Tidak ada batch yang sesuai dengan pencarian' : 'Belum ada batch untuk item ini'}
                        </p>
                      </td>
                    </tr>
                  ) : (
                    filteredBatches.map((batch) => (
                      <tr key={batch.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {batch.batch_number}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {batch.production_date ? new Date(batch.production_date).toLocaleDateString('id-ID') : '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {batch.expiry_date ? new Date(batch.expiry_date).toLocaleDateString('id-ID') : '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {batch.quantity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(batch.created_at).toLocaleDateString('id-ID')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end space-x-2">
                            <button
                              onClick={() => setEditingBatch(batch)}
                              className="text-primary-600 hover:text-primary-900 transition-colors duration-200"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm('Yakin ingin menghapus batch ini?')) {
                                  deleteBatchMutation.mutate(batch.id);
                                }
                              }}
                              className="text-error-600 hover:text-error-900 transition-colors duration-200"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      )}

      {/* Form Modal */}
      {(showForm || editingBatch) && selectedItemId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {editingBatch ? 'Edit Batch' : 'Tambah Batch'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="batch_number"
                label="Nomor Batch"
                defaultValue={editingBatch?.batch_number}
                required
                placeholder="Contoh: B001"
              />
              <Input
                name="production_date"
                label="Tanggal Produksi"
                type="date"
                defaultValue={editingBatch?.production_date?.split('T')[0]}
                placeholder="YYYY-MM-DD"
              />
              <Input
                name="expiry_date"
                label="Tanggal Kadaluarsa"
                type="date"
                defaultValue={editingBatch?.expiry_date?.split('T')[0]}
                placeholder="YYYY-MM-DD"
              />
              <Input
                name="quantity"
                label="Kuantitas"
                type="number"
                defaultValue={editingBatch?.quantity.toString()}
                required
                placeholder="0"
                min="0"
                step="0.01"
              />
              <div className="flex justify-end space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowForm(false);
                    setEditingBatch(null);
                  }}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  loading={createBatchMutation.isPending || updateBatchMutation.isPending}
                >
                  {editingBatch ? 'Perbarui' : 'Simpan'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};