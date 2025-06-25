module.exports = {
  extends: [
    './react.js',
    'plugin:react-native/all',
  ],
  plugins: ['react-native'],
  rules: {
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/no-raw-text': 'off',
    'react-native/sort-styles': 'warn',
  },
  env: {
    'react-native/react-native': true,
  },
  globals: {
    __DEV__: 'readonly',
  },
};