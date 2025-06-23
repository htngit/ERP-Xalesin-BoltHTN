import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  FileText, 
  AlertCircle,
  Calendar,
  PieChart
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Cell } from 'recharts';

const monthlyData = [
  { month: 'Jan', pendapatan: 45000000, pengeluaran: 32000000 },
  { month: 'Feb', pendapatan: 52000000, pengeluaran: 35000000 },
  { month: 'Mar', pendapatan: 48000000, pengeluaran: 38000000 },
  { month: 'Apr', pendapatan: 61000000, pengeluaran: 42000000 },
  { month: 'Mei', pendapatan: 55000000, pengeluaran: 45000000 },
  { month: 'Jun', pendapatan: 67000000, pengeluaran: 48000000 },
];

const accountTypeData = [
  { name: 'Aset', value: 450000000, color: '#2196F3' },
  { name: 'Kewajiban', value: 180000000, color: '#FF9800' },
  { name: 'Ekuitas', value: 270000000, color: '#4CAF50' },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
};

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Ringkasan keuangan dan aktivitas perusahaan</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="h-4 w-4" />
          <span>Periode: Juni 2024</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Pendapatan</p>
              <p className="text-2xl font-bold text-success-600">
                {formatCurrency(328000000)}
              </p>
              <p className="text-sm text-success-600 flex items-center mt-1">
                <TrendingUp className="h-4 w-4 mr-1" />
                +12.5% dari bulan lalu
              </p>
            </div>
            <div className="h-12 w-12 bg-success-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-success-600" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Pengeluaran</p>
              <p className="text-2xl font-bold text-error-600">
                {formatCurrency(240000000)}
              </p>
              <p className="text-sm text-error-600 flex items-center mt-1">
                <TrendingDown className="h-4 w-4 mr-1" />
                +8.2% dari bulan lalu
              </p>
            </div>
            <div className="h-12 w-12 bg-error-100 rounded-lg flex items-center justify-center">
              <TrendingDown className="h-6 w-6 text-error-600" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Laba Bersih</p>
              <p className="text-2xl font-bold text-primary-600">
                {formatCurrency(88000000)}
              </p>
              <p className="text-sm text-success-600 flex items-center mt-1">
                <TrendingUp className="h-4 w-4 mr-1" />
                +18.7% dari bulan lalu
              </p>
            </div>
            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-primary-600" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Transaksi Bulan Ini</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
              <p className="text-sm text-success-600 flex items-center mt-1">
                <FileText className="h-4 w-4 mr-1" />
                +5.4% dari bulan lalu
              </p>
            </div>
            <div className="h-12 w-12 bg-secondary-100 rounded-lg flex items-center justify-center">
              <FileText className="h-6 w-6 text-secondary-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Revenue/Expense Chart */}
        <Card>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Pendapatan vs Pengeluaran</h3>
            <p className="text-sm text-gray-600">Perbandingan bulanan dalam 6 bulan terakhir</p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `${value / 1000000}M`} />
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Bar dataKey="pendapatan" fill="#4CAF50" name="Pendapatan" />
                <Bar dataKey="pengeluaran" fill="#F44336" name="Pengeluaran" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Account Types Pie Chart */}
        <Card>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Komposisi Neraca</h3>
            <p className="text-sm text-gray-600">Distribusi aset, kewajiban, dan ekuitas</p>
          </div>
          <div className="h-80 flex items-center">
            <div className="w-1/2">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <RechartsPieChart data={accountTypeData}>
                    {accountTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </RechartsPieChart>
                  <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/2 space-y-4">
              {accountTypeData.map((item) => (
                <div key={item.name} className="flex items-center space-x-3">
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: item.color }}
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">{formatCurrency(item.value)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activities & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Aktivitas Terbaru</h3>
            <p className="text-sm text-gray-600">Transaksi dan perubahan terkini</p>
          </div>
          <div className="space-y-4">
            {[
              {
                type: 'Jurnal',
                description: 'Pembayaran gaji karyawan bulan Juni',
                amount: '-45,000,000',
                time: '2 jam yang lalu',
                user: 'Ahmad Budiman'
              },
              {
                type: 'Penjualan',
                description: 'Penjualan produk ke PT Maju Jaya',
                amount: '+12,500,000',
                time: '4 jam yang lalu',
                user: 'Siti Nurhaliza'
              },
              {
                type: 'Pembelian',
                description: 'Pembelian bahan baku dari supplier',
                amount: '-8,750,000',
                time: '6 jam yang lalu',
                user: 'Budi Santoso'
              },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <FileText className="h-4 w-4 text-primary-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <span>{activity.type}</span>
                    <span className="mx-1">•</span>
                    <span>{activity.user}</span>
                    <span className="mx-1">•</span>
                    <span>{activity.time}</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className={`text-sm font-medium ${
                    activity.amount.startsWith('+') ? 'text-success-600' : 'text-error-600'
                  }`}>
                    Rp {activity.amount.replace(/^[+-]/, '')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Alerts & Notifications */}
        <Card>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Peringatan & Notifikasi</h3>
            <p className="text-sm text-gray-600">Hal-hal yang memerlukan perhatian</p>
          </div>
          <div className="space-y-4">
            {[
              {
                type: 'warning',
                title: 'Pembayaran Pajak Segera Jatuh Tempo',
                description: 'SPT Masa PPN bulan Mei harus dilaporkan sebelum 30 Juni 2024',
                priority: 'Tinggi'
              },
              {
                type: 'info',
                title: 'Rekonsiliasi Bank Diperlukan',
                description: 'Terdapat selisih Rp 2,500,000 pada rekening BCA',
                priority: 'Sedang'
              },
              {
                type: 'success',
                title: 'Laporan Keuangan Berhasil Dibuat',
                description: 'Laporan laba rugi bulan Mei telah selesai dan siap untuk review',
                priority: 'Rendah'
              },
            ].map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                <div className="flex-shrink-0 mt-0.5">
                  <AlertCircle className={`h-5 w-5 ${
                    alert.type === 'warning' ? 'text-warning-600' :
                    alert.type === 'info' ? 'text-primary-600' :
                    'text-success-600'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">{alert.title}</p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      alert.priority === 'Tinggi' ? 'bg-error-100 text-error-800' :
                      alert.priority === 'Sedang' ? 'bg-warning-100 text-warning-800' :
                      'bg-success-100 text-success-800'
                    }`}>
                      {alert.priority}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};