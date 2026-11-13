// Lint and size limits for the SDK: the same limits as Mnema Talk's web and Go
// code (files 400 lines, tests 800, functions 80 lines, cognitive complexity 15).
import js from '@eslint/js'
import sonarjs from 'eslint-plugin-sonarjs'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['**/dist/', '**/node_modules/', 'tools/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.mjs', '**/*.js'],
    languageOptions: { globals: { console: 'readonly', process: 'readonly', URL: 'readonly' } },
  },
  {
    files: ['**/*.ts'],
    ignores: ['**/*.test.ts'],
    plugins: { sonarjs },
    rules: {
      'max-lines': ['error', { max: 400, skipBlankLines: false, skipComments: false }],
      'max-lines-per-function': ['error', { max: 80, skipBlankLines: false, skipComments: false, IIFEs: true }],
      'sonarjs/cognitive-complexity': ['error', 15],
    },
  },
  {
    files: ['**/*.test.ts'],
    rules: { 'max-lines': ['error', { max: 800, skipBlankLines: false, skipComments: false }] },
  },
  {
    // The tests and their helpers read loose JSON frames from fakes and the
    // real server; the SDK's own code and the examples stay free of `any`.
    files: ['test/**/*.ts'],
    rules: { '@typescript-eslint/no-explicit-any': 'off' },
  },
  {
    files: ['src/**/*.ts', 'examples/**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': true, 'ts-nocheck': true, 'ts-expect-error': true }],
    },
  },
)
