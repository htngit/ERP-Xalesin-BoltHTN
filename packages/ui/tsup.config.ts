import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: false, // Temporarily disabled due to TypeScript issues
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', '@tamagui/core', '@tamagui/config'],
  treeshake: true,
  minify: false,
  target: 'es2020',
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
});