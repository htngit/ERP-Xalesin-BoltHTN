import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorBoundaryProps {
  /**
   * Komponen anak yang akan dilindungi oleh error boundary
   */
  children: ReactNode;
  /**
   * Komponen fallback yang akan ditampilkan ketika terjadi error
   * Jika tidak disediakan, akan menggunakan fallback default
   */
  fallback?: ReactNode;
  /**
   * Callback yang dipanggil ketika error terjadi
   */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Komponen ErrorBoundary untuk menangkap error JavaScript dalam komponen anak
 * dan menampilkan fallback UI sebagai gantinya.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state sehingga render berikutnya akan menampilkan fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error ke layanan pelaporan error
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    
    // Panggil callback onError jika disediakan
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Tampilkan fallback UI kustom jika disediakan
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      // Fallback UI default
      return (
        <div className="p-6 rounded-lg border border-red-200 bg-red-50">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <h3 className="text-lg font-medium text-red-800">Terjadi kesalahan</h3>
          </div>
          <div className="mt-4">
            <p className="text-sm text-red-700">
              Maaf, terjadi kesalahan saat memuat komponen ini. Silakan coba muat ulang halaman.
            </p>
            {this.state.error && (
              <pre className="mt-2 p-2 bg-red-100 rounded text-xs text-red-800 overflow-auto max-h-32">
                {this.state.error.toString()}
              </pre>
            )}
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Muat Ulang Halaman
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}