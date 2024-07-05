const path = require('path');
const { FlatCompat } = require('@eslint/eslintrc');
const { Linter } = require('eslint');

const baseDirectory = path.resolve(__dirname, 'node_modules');
const recommendedConfig = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': 'warn',
  },
};

let compat;
try {
  compat = new FlatCompat({
    baseDirectory,
    recommendedConfig,
  });
} catch (error) {
  console.error('Error initializing FlatCompat:', error);
  process.exit(1);
}

module.exports = compat.configs || [];

