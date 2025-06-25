import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tamaguiPlugin } from '@tamagui/vite-plugin';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin({
      components: ['@tamagui/core', '@tamagui/config'],
      config: './src/tamagui.config.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@core': path.resolve(__dirname, '../../packages/core/src'),
      '@ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@config': path.resolve(__dirname, '../../packages/config/src'),
    },
  },
  define: {
    // Define global constants
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@tamagui/core',
      '@tamagui/config',
      '@tamagui/animations-react-native',
    ],
  },
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          tamagui: ['@tamagui/core', '@tamagui/config'],
        },
      },
    },
  },
});