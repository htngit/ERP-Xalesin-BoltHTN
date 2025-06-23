import React, { useState } from 'react';
import { Plus, Search, Filter, Download, Upload, Edit, Trash2 } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

interface Account {
  id: string;
  code: string;
  name: string;
  type: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE';
  parent_id?: string;
  is_active: boolean;
  balance: number;
}

const mockAccounts: Account[] = [
  // Assets
  { id: '1', code: '1100', name: 'Kas', type: 'ASSET', is_active: true, balance: 50000000 },
  { id: '2', code: '1200', name: 'Bank BCA', type: 'ASSET', is_active: true, balance: 150000000 },
  { id: '3', code: '1300', name: 'Piutang Dagang', type: 'ASSET', is_active: true, balance: 75000000 },
  { id: '4', code: '1400', name: 'Persediaan', type: 'ASSET', is_active: true, balance: 200000000 },
  { id: '5', code: '1500', name: 'Peralatan Kantor', type: 'ASSET', is_active: true, balance: 125000000 },
  
  // Liabilities
  { id: '6', code: '2100', name: 'Utang Dagang', type: 'LIABILITY', is_active: true, balance: 45000000 },
  { id: '7', code: '2200', name: 'Utang Gaji', type: 'LIABILITY', is_active: true, balance: 25000000 },
  { id: '8', code: '2300', name: 'Utang Pajak', type: 'LIABILITY', is_active: true, balance: 15000000 },
  
  // Equity
  { id: '9', code: '3100', name: 'Modal Disetor', type: 'EQUITY', is_active: true, balance: 500000000 },
  { id: '10', code: '3200', name: 'Laba Ditahan', type: 'EQUITY', is_active: true, balance: 15000000 },
  
  // Revenue
  { id: '11', code: '4100', name: 'Pendapatan Penjualan', type: 'REVENUE', is_active: true, balance: 300000000 },
  { id: '12', code: '4200', name: 'Pendapatan Lain-lain', type: 'REVENUE', is_active: true, balance: 5000000 },
  
  // Expenses
  { id: '13', code: '5100', name: 'Beban Gaji', type: 'EXPENSE', is_active: true, balance: 120000000 },
  { id: '14', code: '5200', name: 'Beban Sewa', type: 'EXPENSE', is_active: true, balance: 36000000 },
  { id: '15', code: '5300', name: 'Beban Listrik', type: 'EXPENSE', is_active: true, balance: 12000000 },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
};

const getAccountTypeLabel = (type: string) => {
  const labels = {
    ASSET: 'Aset',
    LIABILITY: 'Kewajiban',
    EQUITY: 'Ekuitas',
    REVENUE: 'Pendapatan',
    EXPENSE: 'Beban',
  };
  return labels[type as keyof typeof labels] || type;
};

const getAccountTypeColor = (type: string) => {
  const colors = {
    ASSET: 'bg-primary-100 text-primary-800',
    LIABILITY: 'bg-error-100 text-error-800',
    EQUITY: 'bg-secondary-100 text-secondary-800',
    REVENUE: 'bg-success-100 text-success-800',
    EXPENSE: 'bg-warning-100 text-warning-800',
  };
  return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

export const ChartOfAccounts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [showInactiveAccounts, setShowInactiveAccounts] = useState(false);

  const filteredAccounts = mockAccounts.filter(account => {
    const matchesSearch = account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         account.code.includes(searchTerm);
    const matchesType = selectedType === '' || account.type === selectedType;
    const matchesActive = showInactiveAccounts || account.is_active;
    
    return matchesSearch && matchesType && matchesActive;
  });

  const groupedAccounts = filteredAccounts.reduce((groups, account) => {
    const type = account.type;
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(account);
    return groups;
  }, {} as Record<string, Account[]>);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Buku Besar Akun</h1>
          <p className="text-gray-600">Kelola chart of accounts dan struktur akuntansi perusahaan</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Tambah Akun
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari berdasarkan kode atau nama akun..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Semua Tipe</option>
              <option value="ASSET">Aset</option>
              <option value="LIABILITY">Kewajiban</option>
              <option value="EQUITY">Ekuitas</option>
              <option value="REVENUE">Pendapatan</option>
              <option value="EXPENSE">Beban</option>
            </select>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showInactiveAccounts}
                onChange={(e) => setShowInactiveAccounts(e .target.checked)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">Tampilkan akun nonaktif</span>
            </label>
          </div>
        </div>
      </Card>

      {/* Account Summary */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {Object.entries({
          ASSET: { label: 'Total Aset', total: mockAccounts.filter(a => a.type === 'ASSET').reduce((sum, a) => sum + a.balance, 0) },
          LIABILITY: { label: 'Total Kewajiban', total: mockAccounts.filter(a => a.type === 'LIABILITY').reduce((sum, a) => sum + a.balance, 0) },
          EQUITY: { label: 'Total Ekuitas', total: mockAccounts.filter(a => a.type === 'EQUITY').reduce((sum, a) => sum + a.balance, 0) },
          REVENUE: { label: 'Total Pendapatan', total: mockAccounts.filter(a => a.type === 'REVENUE').reduce((sum, a) => sum + a.balance, 0) },
          EXPENSE: { label: 'Total Beban', total: mockAccounts.filter(a => a.type === 'EXPENSE').reduce((sum, a) => sum + a.balance, 0) },
        }).map(([type, data]) => (
          <Card key={type} padding="sm">
            <div className="text-center">
              <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium mb-2 ${getAccountTypeColor(type)}`}>
                {getAccountTypeLabel(type)}
              </div>
              <p className="text-lg font-bold text-gray-900">{formatCurrency(data.total)}</p>
              <p className="text-sm text-gray-600">{data.label}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Accounts Table */}
      <Card padding="none">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kode & Nama Akun
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipe
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Saldo
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Object.entries(groupedAccounts).map(([type, accounts]) => (
                <React.Fragment key={type}>
                  <tr className="bg-gray-25">
                    <td colSpan={5} className="px-6 py-2">
                      <div className="flex items-center">
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getAccountTypeColor(type)}`}>
                          {getAccountTypeLabel(type)}
                        </span>
                        <span className="ml-2 text-sm text-gray-600">
                          ({accounts.length} akun)
                        </span>
                      </div>
                    </td>
                  </tr>
                  {accounts.map((account) => (
                    <tr key={account.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4">
                        <div>
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-900">
                              {account.code}
                            </span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-sm text-gray-900">{account.name}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getAccountTypeColor(account.type)}`}>
                          {getAccountTypeLabel(account.type)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-sm font-medium text-gray-900">
                          {formatCurrency(account.balance)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                          account.is_active 
                            ? 'bg-success-100 text-success-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {account.is_active ? 'Aktif' : 'Nonaktif'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button className="text-primary-600 hover:text-primary-900 transition-colors duration-200">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-error-600 hover:text-error-900 transition-colors duration-200">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};