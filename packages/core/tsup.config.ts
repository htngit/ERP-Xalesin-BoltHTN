import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'types/index': 'src/types/index.ts',
    'services/index': 'src/services/index.ts',
    'utils/index': 'src/utils/index.ts',
    'hooks/index': 'src/hooks/index.ts',
    'stores/index': 'src/stores/index.ts'
  },
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  minify: false,
  external: [
    'react',
    'react-dom',
    '@supabase/supabase-js',
    '@xalesin/config',
    '@tamagui/core',
    '@tamagui/config',
    '@tamagui/animations-css'
  ],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"'
    }
  },
  onSuccess: async () => {
    console.log('✅ Core package built successfully!')
  }
})