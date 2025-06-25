module.exports = {
  extends: [
    './react.js',
    'next/core-web-vitals',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@next/next/no-img-element': 'off',
  },
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
};