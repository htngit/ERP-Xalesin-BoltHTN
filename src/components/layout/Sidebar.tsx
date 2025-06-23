import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  BarChart3, 
  Receipt, 
  Settings,
  Users,
  Building2,
  Calculator,
  Package,
  MapPin,
  Tag,
  Box,
  LogOut,
  Layers,
  ArrowDownUp,
  Database,
  Edit,
  ArrowRightLeft
} from 'lucide-react';
import { useAuth } from '../../lib/auth';
import { Button } from '../ui/Button';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Buku Besar', href: '/chart-of-accounts', icon: BookOpen },
  { name: 'Jurnal', href: '/journal-entries', icon: FileText },
  { name: 'Gudang', href: '/warehouse', icon: Package },
  { name: 'Kategori', href: '/categories', icon: Tag },
  { name: 'Item', href: '/items', icon: Box },
  { name: 'Batch', href: '/batches', icon: Layers },
  { name: 'Pergerakan Stok', href: '/stock-movements', icon: ArrowDownUp },
  { name: 'Level Stok', href: '/stock-levels', icon: Database },
  { name: 'Penyesuaian Stok', href: '/stock-adjustment', icon: Edit },
  { name: 'Transfer Stok', href: '/stock-transfer', icon: ArrowRightLeft },
  { name: 'Laporan', href: '/reports', icon: BarChart3 },
  { name: 'Pajak', href: '/tax', icon: Receipt },
  { name: 'Perusahaan', href: '/company', icon: Building2 },
  { name: 'Pengguna', href: '/users', icon: Users },
  { name: 'Pengaturan', href: '/settings', icon: Settings },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex h-16 items-center px-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
            <Calculator className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">ERP System</h1>
            <p className="text-xs text-gray-500">Sistem Terintegrasi</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isActive
                  ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <item.icon
                className={`mr-3 h-5 w-5 flex-shrink-0 ${
                  isActive ? 'text-primary-600' : 'text-gray-400 group-hover:text-gray-500'
                }`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Sign Out Button */}
      <div className="p-3 border-t border-gray-200">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-600 hover:text-error-600"
          onClick={handleSignOut}
        >
          <LogOut className="mr-3 h-5 w-5" />
          Keluar
        </Button>
      </div>
    </div>
  );
};