import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, Search, Edit, Trash2, Package, Tag, Barcode, CheckCircle, XCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { itemApi, categoryApi } from '../lib/api/warehouse';
import type { Item, ProductCategory } from '../lib/types';
import toast from 'react-hot-toast';

export const Items: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const queryClient = useQueryClient();

  // Fetch items
  const { data: items = [], isLoading: isLoadingItems } = useQuery({
    queryKey: ['items'],
    queryFn: itemApi.getItems,
  });

  // Fetch categories for the dropdown
  const { data: categories = [], isLoading: isLoadingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: categoryApi.getCategories,
  });

  // Mutations
  const createItemMutation = useMutation({
    mutationFn: itemApi.createItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
      setShowForm(false);
      toast.success('Item berhasil dibuat');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal membuat item');
    },
  });

  const updateItemMutation = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<Item> }) =>
      itemApi.updateItem(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
      setEditingItem(null);
      toast.success('Item berhasil diperbarui');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal memperbarui item');
    },
  });

  const deleteItemMutation = useMutation({
    mutationFn: itemApi.deleteItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
      toast.success('Item berhasil dihapus');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal menghapus item');
    },
  });

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const itemData = {
      sku: formData.get('sku') as string,
      name: formData.get('name') as string,
      category_id: formData.get('category_id') as string || null,
      is_stock_tracked: formData.get('is_stock_tracked') === 'true',
      unit_price: parseFloat(formData.get('unit_price') as string) || 0,
    };

    if (editingItem) {
      updateItemMutation.mutate({ id: editingItem.id, updates: itemData });
    } else {
      createItemMutation.mutate(itemData);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Produk & Item</h1>
          <p className="text-gray-600">Kelola produk dan item inventaris</p>
        </div>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Tambah Item
        </Button>
      </div>

      {/* Search */}
      <Card>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Cari item berdasarkan nama, SKU, atau kategori..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
              <p className="text-sm font-medium text-gray-600">Total Item</p>
              <p className="text-2xl font-bold text-gray-900">{items.length}</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Item Tertelusuri</p>
              <p className="text-2xl font-bold text-gray-900">
                {items.filter(item => item.is_stock_tracked).length}
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Tag className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Kategori</p>
              <p className="text-2xl font-bold text-gray-900">{categories.length}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoadingItems ? (
          <div className="col-span-full text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Memuat item...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">
              {searchTerm ? 'Tidak ada item yang sesuai dengan pencarian' : 'Belum ada item'}
            </p>
          </div>
        ) : (
          filteredItems.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Package className="h-5 w-5 text-primary-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  </div>
                  <div className="flex items-center mb-2">
                    <Barcode className="h-4 w-4 text-gray-500 mr-2" />
                    <p className="text-sm text-gray-600">{item.sku}</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <Tag className="h-4 w-4 text-gray-500 mr-2" />
                    <p className="text-sm text-gray-600">
                      {item.category?.name || 'Tanpa Kategori'}
                    </p>
                  </div>
                  <div className="flex items-center mb-2">
                    {item.is_stock_tracked ? (
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ) : (
                      <XCircle className="h-4 w-4 text-gray-400 mr-2" />
                    )}
                    <p className="text-sm text-gray-600">
                      {item.is_stock_tracked ? 'Stok Tertelusuri' : 'Stok Tidak Tertelusuri'}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-primary-600 mb-2">
                    {formatCurrency(item.unit_price)}
                  </p>
                  <p className="text-xs text-gray-500">
                    Dibuat: {new Date(item.created_at).toLocaleDateString('id-ID')}
                  </p>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => setEditingItem(item)}
                    className="text-primary-600 hover:text-primary-900 transition-colors duration-200"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Yakin ingin menghapus item ini?')) {
                        deleteItemMutation.mutate(item.id);
                      }
                    }}
                    className="text-error-600 hover:text-error-900 transition-colors duration-200"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>

      {/* Form Modal */}
      {(showForm || editingItem) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {editingItem ? 'Edit Item' : 'Tambah Item'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="sku"
                label="SKU"
                defaultValue={editingItem?.sku}
                required
                placeholder="Contoh: ITM-001"
              />
              <Input
                name="name"
                label="Nama Item"
                defaultValue={editingItem?.name}
                required
                placeholder="Contoh: Beras Premium"
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kategori
                </label>
                <select
                  name="category_id"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue={editingItem?.category_id || ''}
                >
                  <option value="">Pilih Kategori</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <Input
                name="unit_price"
                label="Harga Satuan"
                type="number"
                defaultValue={editingItem?.unit_price.toString()}
                required
                placeholder="0"
                min="0"
                step="0.01"
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telusuri Stok
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="is_stock_tracked"
                      value="true"
                      defaultChecked={editingItem?.is_stock_tracked === true}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Ya</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="is_stock_tracked"
                      value="false"
                      defaultChecked={editingItem?.is_stock_tracked === false}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Tidak</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowForm(false);
                    setEditingItem(null);
                  }}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  loading={createItemMutation.isPending || updateItemMutation.isPending}
                >
                  {editingItem ? 'Perbarui' : 'Simpan'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};