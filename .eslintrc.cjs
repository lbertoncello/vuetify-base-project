/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'import',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [ 
          ['@', './src']
        ]
      },
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    }
  },
  rules: {
    'vue/multi-word-component-names': ['error', {
      'ignores': [ 'Home', 'Layout', 'View' ]
    }]
  },
};
