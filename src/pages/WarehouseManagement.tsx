import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, Search, Edit, Trash2, Package, MapPin } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { warehouseApi, locationApi } from '../lib/api/warehouse';
import type { Warehouse, Location } from '../lib/types';
import toast from 'react-hot-toast';

export const WarehouseManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWarehouse, setSelectedWarehouse] = useState<string>('');
  const [showWarehouseForm, setShowWarehouseForm] = useState(false);
  const [showLocationForm, setShowLocationForm] = useState(false);
  const [editingWarehouse, setEditingWarehouse] = useState<Warehouse | null>(null);
  const [editingLocation, setEditingLocation] = useState<Location | null>(null);

  const queryClient = useQueryClient();

  // Fetch warehouses
  const { data: warehouses = [], isLoading: warehousesLoading } = useQuery({
    queryKey: ['warehouses'],
    queryFn: warehouseApi.getWarehouses,
  });

  // Fetch locations
  const { data: locations = [], isLoading: locationsLoading } = useQuery({
    queryKey: ['locations', selectedWarehouse],
    queryFn: () => selectedWarehouse 
      ? locationApi.getLocationsByWarehouse(selectedWarehouse)
      : locationApi.getAllLocations(),
  });

  // Mutations
  const createWarehouseMutation = useMutation({
    mutationFn: warehouseApi.createWarehouse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['warehouses'] });
      setShowWarehouseForm(false);
      toast.success('Gudang berhasil dibuat');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal membuat gudang');
    },
  });

  const updateWarehouseMutation = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<Warehouse> }) =>
      warehouseApi.updateWarehouse(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['warehouses'] });
      setEditingWarehouse(null);
      toast.success('Gudang berhasil diperbarui');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal memperbarui gudang');
    },
  });

  const deleteWarehouseMutation = useMutation({
    mutationFn: warehouseApi.deleteWarehouse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['warehouses'] });
      toast.success('Gudang berhasil dihapus');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal menghapus gudang');
    },
  });

  const createLocationMutation = useMutation({
    mutationFn: locationApi.createLocation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['locations'] });
      setShowLocationForm(false);
      toast.success('Lokasi berhasil dibuat');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal membuat lokasi');
    },
  });

  const updateLocationMutation = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<Location> }) =>
      locationApi.updateLocation(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['locations'] });
      setEditingLocation(null);
      toast.success('Lokasi berhasil diperbarui');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal memperbarui lokasi');
    },
  });

  const deleteLocationMutation = useMutation({
    mutationFn: locationApi.deleteLocation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['locations'] });
      toast.success('Lokasi berhasil dihapus');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal menghapus lokasi');
    },
  });

  const filteredWarehouses = warehouses.filter(warehouse =>
    warehouse.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    warehouse.address?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWarehouseSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const warehouseData = {
      name: formData.get('name') as string,
      address: formData.get('address') as string,
      description: formData.get('description') as string,
    };

    if (editingWarehouse) {
      updateWarehouseMutation.mutate({ id: editingWarehouse.id, updates: warehouseData });
    } else {
      createWarehouseMutation.mutate(warehouseData);
    }
  };

  const handleLocationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const locationData = {
      warehouse_id: formData.get('warehouse_id') as string,
      name: formData.get('name') as string,
      description: formData.get('description') as string,
    };

    if (editingLocation) {
      updateLocationMutation.mutate({ id: editingLocation.id, updates: locationData });
    } else {
      createLocationMutation.mutate(locationData);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manajemen Gudang</h1>
          <p className="text-gray-600">Kelola gudang dan lokasi penyimpanan</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button onClick={() => setShowLocationForm(true)}>
            <MapPin className="h-4 w-4 mr-2" />
            Tambah Lokasi
          </Button>
          <Button onClick={() => setShowWarehouseForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Tambah Gudang
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari gudang atau lokasi..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedWarehouse}
              onChange={(e) => setSelectedWarehouse(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Semua Gudang</option>
              {warehouses.map((warehouse) => (
                <option key={warehouse.id} value={warehouse.id}>
                  {warehouse.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <div className="flex items-center">
            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <Package className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Gudang</p>
              <p className="text-2xl font-bold text-gray-900">{warehouses.length}</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center">
            <div className="h-12 w-12 bg-secondary-100 rounded-lg flex items-center justify-center">
              <MapPin className="h-6 w-6 text-secondary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Lokasi</p>
              <p className="text-2xl font-bold text-gray-900">{locations.length}</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center">
            <div className="h-12 w-12 bg-success-100 rounded-lg flex items-center justify-center">
              <Package className="h-6 w-6 text-success-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Lokasi Aktif</p>
              <p className="text-2xl font-bold text-gray-900">{locations.length}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Warehouses Table */}
      <Card padding="none">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Daftar Gudang</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama Gudang
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Alamat
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deskripsi
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {warehousesLoading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                    Memuat data...
                  </td>
                </tr>
              ) : filteredWarehouses.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                    Tidak ada gudang ditemukan
                  </td>
                </tr>
              ) : (
                filteredWarehouses.map((warehouse) => (
                  <tr key={warehouse.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Package className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-sm font-medium text-gray-900">
                          {warehouse.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {warehouse.address || '-'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {warehouse.description || '-'}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          onClick={() => setEditingWarehouse(warehouse)}
                          className="text-primary-600 hover:text-primary-900"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm('Yakin ingin menghapus gudang ini?')) {
                              deleteWarehouseMutation.mutate(warehouse.id);
                            }
                          }}
                          className="text-error-600 hover:text-error-900"
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

      {/* Locations Table */}
      <Card padding="none">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Daftar Lokasi</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama Lokasi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gudang
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deskripsi
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {locationsLoading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                    Memuat data...
                  </td>
                </tr>
              ) : filteredLocations.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                    Tidak ada lokasi ditemukan
                  </td>
                </tr>
              ) : (
                filteredLocations.map((location) => (
                  <tr key={location.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-sm font-medium text-gray-900">
                          {location.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {location.warehouse?.name || '-'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {location.description || '-'}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          onClick={() => setEditingLocation(location)}
                          className="text-primary-600 hover:text-primary-900"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm('Yakin ingin menghapus lokasi ini?')) {
                              deleteLocationMutation.mutate(location.id);
                            }
                          }}
                          className="text-error-600 hover:text-error-900"
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

      {/* Warehouse Form Modal */}
      {(showWarehouseForm || editingWarehouse) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {editingWarehouse ? 'Edit Gudang' : 'Tambah Gudang'}
            </h3>
            <form onSubmit={handleWarehouseSubmit} className="space-y-4">
              <Input
                name="name"
                label="Nama Gudang"
                defaultValue={editingWarehouse?.name}
                required
              />
              <Input
                name="address"
                label="Alamat"
                defaultValue={editingWarehouse?.address || ''}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deskripsi
                </label>
                <textarea
                  name="description"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue={editingWarehouse?.description || ''}
                />
              </div>
              <div className="flex justify-end space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowWarehouseForm(false);
                    setEditingWarehouse(null);
                  }}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  loading={createWarehouseMutation.isPending || updateWarehouseMutation.isPending}
                >
                  {editingWarehouse ? 'Perbarui' : 'Simpan'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Location Form Modal */}
      {(showLocationForm || editingLocation) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {editingLocation ? 'Edit Lokasi' : 'Tambah Lokasi'}
            </h3>
            <form onSubmit={handleLocationSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gudang
                </label>
                <select
                  name="warehouse_id"
                  required
                  defaultValue={editingLocation?.warehouse_id}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Pilih Gudang</option>
                  {warehouses.map((warehouse) => (
                    <option key={warehouse.id} value={warehouse.id}>
                      {warehouse.name}
                    </option>
                  ))}
                </select>
              </div>
              <Input
                name="name"
                label="Nama Lokasi"
                defaultValue={editingLocation?.name}
                required
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deskripsi
                </label>
                <textarea
                  name="description"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue={editingLocation?.description || ''}
                />
              </div>
              <div className="flex justify-end space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowLocationForm(false);
                    setEditingLocation(null);
                  }}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  loading={createLocationMutation.isPending || updateLocationMutation.isPending}
                >
                  {editingLocation ? 'Perbarui' : 'Simpan'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};