import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, Filter, Calendar, Package, ArrowDownUp, Warehouse, MapPin } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { inventoryApi, warehouseApi, locationApi, itemApi } from '../lib/api/warehouse';
import type { InventoryMovement, Item, Warehouse, Location } from '../lib/types';

export const StockMovements: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    itemId: '',
    warehouseId: '',
    locationId: '',
    startDate: '',
    endDate: '',
    movementType: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  // Fetch stock movements with filters
  const { data: movements = [], isLoading: isLoadingMovements } = useQuery({
    queryKey: ['stockMovements', filters],
    queryFn: () => inventoryApi.getInventoryMovements({
      item_id: filters.itemId || undefined,
      warehouse_id: filters.warehouseId || undefined,
      location_id: filters.locationId || undefined,
      start_date: filters.startDate || undefined,
      end_date: filters.endDate || undefined,
      movement_type: filters.movementType || undefined,
    }),
  });

  // Fetch items for filter dropdown
  const { data: items = [] } = useQuery({
    queryKey: ['items'],
    queryFn: itemApi.getItems,
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

  // Filter movements based on search term
  const filteredMovements = movements.filter(movement =>
    movement.reference_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movement.notes?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movement.movement_type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Reset location when warehouse changes
  useEffect(() => {
    if (filters.warehouseId) {
      setFilters(prev => ({ ...prev, locationId: '' }));
    }
  }, [filters.warehouseId]);

  // Apply filters
  const handleApplyFilters = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    setFilters({
      itemId: formData.get('itemId') as string || '',
      warehouseId: formData.get('warehouseId') as string || '',
      locationId: formData.get('locationId') as string || '',
      startDate: formData.get('startDate') as string || '',
      endDate: formData.get('endDate') as string || '',
      movementType: formData.get('movementType') as string || '',
    });

    setShowFilters(false);
  };

  // Reset filters
  const handleResetFilters = () => {
    setFilters({
      itemId: '',
      warehouseId: '',
      locationId: '',
      startDate: '',
      endDate: '',
      movementType: '',
    });
    setShowFilters(false);
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Get movement type display name
  const getMovementTypeDisplay = (type: string) => {
    const types: Record<string, { name: string, color: string }> = {
      'adjustment_in': { name: 'Penyesuaian Masuk', color: 'text-green-600 bg-green-50' },
      'adjustment_out': { name: 'Penyesuaian Keluar', color: 'text-red-600 bg-red-50' },
      'transfer_in': { name: 'Transfer Masuk', color: 'text-blue-600 bg-blue-50' },
      'transfer_out': { name: 'Transfer Keluar', color: 'text-orange-600 bg-orange-50' },
      'purchase': { name: 'Pembelian', color: 'text-purple-600 bg-purple-50' },
      'sale': { name: 'Penjualan', color: 'text-indigo-600 bg-indigo-50' },
    };
    
    return types[type] || { name: type, color: 'text-gray-600 bg-gray-50' };
  };

  // Get item name by ID
  const getItemName = (itemId: string) => {
    const item = items.find(i => i.id === itemId);
    return item ? item.name : 'Unknown Item';
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pergerakan Stok</h1>
          <p className="text-gray-600">Riwayat pergerakan stok barang</p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
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
              
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Tanggal Mulai
                </label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  defaultValue={filters.startDate}
                />
              </div>
              
              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Tanggal Akhir
                </label>
                <Input
                  id="endDate"
                  name="endDate"
                  type="date"
                  defaultValue={filters.endDate}
                />
              </div>
              
              <div>
                <label htmlFor="movementType" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipe Pergerakan
                </label>
                <select
                  id="movementType"
                  name="movementType"
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue={filters.movementType}
                >
                  <option value="">Semua Tipe</option>
                  <option value="adjustment_in">Penyesuaian Masuk</option>
                  <option value="adjustment_out">Penyesuaian Keluar</option>
                  <option value="transfer_in">Transfer Masuk</option>
                  <option value="transfer_out">Transfer Keluar</option>
                  <option value="purchase">Pembelian</option>
                  <option value="sale">Penjualan</option>
                </select>
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
            placeholder="Cari berdasarkan nomor referensi atau catatan..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </Card>

      {/* Active Filters */}
      {(filters.itemId || filters.warehouseId || filters.locationId || filters.startDate || filters.endDate || filters.movementType) && (
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
          {filters.startDate && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
              <Calendar className="h-3 w-3 mr-1" />
              Dari: {new Date(filters.startDate).toLocaleDateString('id-ID')}
            </div>
          )}
          {filters.endDate && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
              <Calendar className="h-3 w-3 mr-1" />
              Sampai: {new Date(filters.endDate).toLocaleDateString('id-ID')}
            </div>
          )}
          {filters.movementType && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
              <ArrowDownUp className="h-3 w-3 mr-1" />
              Tipe: {getMovementTypeDisplay(filters.movementType).name}
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

      {/* Movements Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Referensi
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipe
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gudang
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lokasi
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kuantitas
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Catatan
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {isLoadingMovements ? (
                <tr>
                  <td colSpan={8} className="px-6 py-4 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
                    <p className="mt-2 text-sm text-gray-600">Memuat data pergerakan stok...</p>
                  </td>
                </tr>
              ) : filteredMovements.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-4 text-center">
                    <p className="text-gray-600">
                      {searchTerm || Object.values(filters).some(v => v) 
                        ? 'Tidak ada data pergerakan stok yang sesuai dengan pencarian atau filter' 
                        : 'Belum ada data pergerakan stok'}
                    </p>
                  </td>
                </tr>
              ) : (
                filteredMovements.map((movement) => {
                  const typeInfo = getMovementTypeDisplay(movement.movement_type);
                  return (
                    <tr key={movement.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(movement.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {movement.reference_number}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeInfo.color}`}>
                          {typeInfo.name}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {getItemName(movement.item_id)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {getWarehouseName(movement.warehouse_id)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {getLocationName(movement.location_id)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={movement.quantity > 0 ? 'text-green-600' : 'text-red-600'}>
                          {movement.quantity > 0 ? '+' : ''}{movement.quantity}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                        {movement.notes || '-'}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};