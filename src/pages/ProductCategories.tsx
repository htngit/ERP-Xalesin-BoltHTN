import React, { useState } from 'react';
import { useDebounce } from '../hooks';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, Search, Edit, Trash2, Tag } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { categoryApi } from '../lib/api/warehouse';
import type { ProductCategory } from '../lib/types';
import toast from 'react-hot-toast';

export const ProductCategories: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<ProductCategory | null>(null);

  const queryClient = useQueryClient();

  // Fetch categories
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: categoryApi.getCategories,
  });

  // Mutations
  const createCategoryMutation = useMutation({
    mutationFn: categoryApi.createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      setShowForm(false);
      toast.success('Kategori berhasil dibuat');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal membuat kategori');
    },
  });

  const updateCategoryMutation = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<ProductCategory> }) =>
      categoryApi.updateCategory(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      setEditingCategory(null);
      toast.success('Kategori berhasil diperbarui');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal memperbarui kategori');
    },
  });

  const deleteCategoryMutation = useMutation({
    mutationFn: categoryApi.deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      toast.success('Kategori berhasil dihapus');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal menghapus kategori');
    },
  });

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    category.description?.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const categoryData = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
    };

    if (editingCategory) {
      updateCategoryMutation.mutate({ id: editingCategory.id, updates: categoryData });
    } else {
      createCategoryMutation.mutate(categoryData);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kategori Produk</h1>
          <p className="text-gray-600">Kelola kategori untuk mengorganisir produk</p>
        </div>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Tambah Kategori
        </Button>
      </div>

      {/* Search */}
      <Card>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Cari kategori..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </Card>

      {/* Summary */}
      <Card>
        <div className="flex items-center">
          <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center">
            <Tag className="h-6 w-6 text-primary-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Total Kategori</p>
            <p className="text-2xl font-bold text-gray-900">{categories.length}</p>
          </div>
        </div>
      </Card>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="col-span-full text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Memuat kategori...</p>
          </div>
        ) : filteredCategories.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <Tag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">
              {searchTerm ? 'Tidak ada kategori yang sesuai dengan pencarian' : 'Belum ada kategori'}
            </p>
          </div>
        ) : (
          filteredCategories.map((category) => (
            <Card key={category.id} className="hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Tag className="h-5 w-5 text-primary-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {category.description || 'Tidak ada deskripsi'}
                  </p>
                  <p className="text-xs text-gray-500">
                    Dibuat: {new Date(category.created_at).toLocaleDateString('id-ID')}
                  </p>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => setEditingCategory(category)}
                    className="text-primary-600 hover:text-primary-900 transition-colors duration-200"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Yakin ingin menghapus kategori ini?')) {
                        deleteCategoryMutation.mutate(category.id);
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
      {(showForm || editingCategory) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {editingCategory ? 'Edit Kategori' : 'Tambah Kategori'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                label="Nama Kategori"
                defaultValue={editingCategory?.name}
                required
                placeholder="Contoh: Bahan Baku"
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deskripsi
                </label>
                <textarea
                  name="description"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue={editingCategory?.description || ''}
                  placeholder="Deskripsi kategori (opsional)"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowForm(false);
                    setEditingCategory(null);
                  }}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  loading={createCategoryMutation.isPending || updateCategoryMutation.isPending}
                >
                  {editingCategory ? 'Perbarui' : 'Simpan'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};