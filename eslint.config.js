import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	// Global ignores
	{
		ignores: [
			'**/dist/**',
			'**/build/**',
			'**/coverage/**',
			'**/node_modules/**',
			'**/.git/**',
			'**/*.config.js',
			'**/*.config.ts',
			'**/.env*',
			'**/vite.config.ts',
		],
	},

	// Base config for JavaScript files
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			globals: globals.browser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
			...js.configs.recommended.rules,
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'prefer-const': 'error',
			'no-var': 'error',
			'no-unused-vars': ['error', { args: 'none' }], // Don't check function parameters
		},
	},

	// TypeScript configuration
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			globals: globals.browser,
			parser: tseslint.parser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				tsconfigRootDir: process.cwd(),
			},
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			// Base recommendations
			...js.configs.recommended.rules,
			...tseslint.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			...reactRefresh.configs.vite.rules,

			// Disable base JS rule - use TypeScript version instead
			'no-unused-vars': 'off',

			// TypeScript specific rules
			'@typescript-eslint/explicit-module-boundary-types': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'none', // Don't check function parameters
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/no-explicit-any': 'warn',

			// General code quality
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'prefer-const': 'error',
			'no-var': 'error',
			eqeqeq: ['error', 'always', { null: 'ignore' }],
			curly: 'error',
			'brace-style': ['error', '1tbs'],
			'comma-dangle': ['error', 'always-multiline'],
			indent: 'off', // Use Prettier for formatting
			semi: 'off', // Use Prettier for formatting
			quotes: 'off', // Use Prettier for formatting

			// React specific
			'react-refresh/only-export-components': 'warn',
		},
	},
)
