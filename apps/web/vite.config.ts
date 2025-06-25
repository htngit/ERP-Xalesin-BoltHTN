import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@xalesin/core': resolve(__dirname, '../../packages/core/src'),
      '@xalesin/ui': resolve(__dirname, '../../packages/ui/src'),
      '@xalesin/config': resolve(__dirname, '../../packages/config/src'),
    },
  },
  define: {
    // Tamagui configuration
    'process.env.TAMAGUI_TARGET': '"web"',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});