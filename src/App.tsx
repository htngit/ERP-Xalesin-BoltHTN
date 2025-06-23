import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './lib/auth';
import { Layout } from './components/layout/Layout';
import { LoginForm } from './components/auth/LoginForm';
import { Dashboard } from './pages/Dashboard';
import { ChartOfAccounts } from './pages/ChartOfAccounts';
import { WarehouseManagement } from './pages/WarehouseManagement';
import { ProductCategories } from './pages/ProductCategories';

const queryClient = new QueryClient();

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Memuat...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Memuat aplikasi...</p>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={!user ? <LoginForm /> : <Navigate to="/dashboard" replace />} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/chart-of-accounts"
        element={
          <ProtectedRoute>
            <Layout>
              <ChartOfAccounts />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/warehouse"
        element={
          <ProtectedRoute>
            <Layout>
              <WarehouseManagement />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/categories"
        element={
          <ProtectedRoute>
            <Layout>
              <ProductCategories />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/journal-entries"
        element={
          <ProtectedRoute>
            <Layout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900">Jurnal Entries</h2>
                <p className="text-gray-600 mt-2">Halaman dalam pengembangan</p>
              </div>
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Layout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900">Laporan Keuangan</h2>
                <p className="text-gray-600 mt-2">Halaman dalam pengembangan</p>
              </div>
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/tax"
        element={
          <ProtectedRoute>
            <Layout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900">Manajemen Pajak</h2>
                <p className="text-gray-600 mt-2">Halaman dalam pengembangan</p>
              </div>
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/company"
        element={
          <ProtectedRoute>
            <Layout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900">Profil Perusahaan</h2>
                <p className="text-gray-600 mt-2">Halaman dalam pengembangan</p>
              </div>
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <Layout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900">Manajemen Pengguna</h2>
                <p className="text-gray-600 mt-2">Halaman dalam pengembangan</p>
              </div>
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Layout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900">Pengaturan Sistem</h2>
                <p className="text-gray-600 mt-2">Halaman dalam pengembangan</p>
              </div>
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className="App">
            <AppRoutes />
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#fff',
                  color: '#374151',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                },
              }}
            />
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;