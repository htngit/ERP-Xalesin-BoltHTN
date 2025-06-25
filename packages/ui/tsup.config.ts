import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: false, // Temporarily disable to focus on JS build
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    'react', 
    'react-dom', 
    '@tamagui/core', 
    '@tamagui/config',
    'react-native',
    'react-native-reanimated',
    'react-native-gesture-handler',
    'react-native-svg'
  ],
  treeshake: true,
  minify: false,
  target: 'es2020',
  esbuildOptions(options) {
    options.jsx = 'automatic';
    options.loader = {
      ...options.loader,
      '.js': 'jsx',
    };
  },
});