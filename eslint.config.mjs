import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginPrettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  pluginPrettierRecommended,
  {
    plugins: {
      prettier: pluginPrettier,
    },
  },
];

export default eslintConfig;
