import typescriptEslint from '@typescript-eslint/eslint-plugin';
import _import from 'eslint-plugin-import';
import { fixupPluginRules } from '@eslint/compat';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: [
			'**/.yarn',
			'types/**',
			'**/node_modules/**/*',
			'**/.cache/**/*',
			'**/build/**/*',
			'**/dist/**/*',
			'**/cms/**/*',
			'**/web/types/**/*',
			'**/.eslintrc.**.js',
			'**/.eslintrc.js',
			'**/next.config.js',
			'**/prettier.config.*js',
			'**/postcss.config.js',
			'**/tailwind.config.js',
			'**/types/generated',
			'**/ecosystem.config.js',
			'**/server.js',
			'**/babel.config.js',
			'**/strapi-server.js',
			'**/strapi-admin.js',
			'**/.next',
			'**/*.config.mjs',
		],
	},
	...compat.extends('eslint:recommended', 'prettier', 'plugin:@typescript-eslint/recommended-type-checked'),
	{
		plugins: {
			'@typescript-eslint': typescriptEslint,
			import: fixupPluginRules(_import),
		},

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 5,
			sourceType: 'script',

			parserOptions: {
				tsconfigRootDir: './',
				project: ['apps/web/tsconfig.json'],
			},
		},

		rules: {
			'@typescript-eslint/unbound-method': 'warn',
			'@typescript-eslint/restrict-template-expressions': 'warn',
			'@typescript-eslint/no-base-to-string': 'warn',
			'@typescript-eslint/no-unsafe-return': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'warn',
			'@typescript-eslint/ban-ts-comment': 'warn',
			'@typescript-eslint/no-unsafe-argument': 'warn',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/await-thenable': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'import/order': 'error',

			'import/extensions': [
				'error',
				'never',
				{
					svg: 'always',
					scss: 'always',
					json: 'always',
				},
			],

			'import/no-cycle': [
				2,
				{
					ignoreExternal: true,
				},
			],

			'import/no-duplicates': 'error',
			'import/no-useless-path-segments': 'error',
			'import/first': 'error',
			'import/newline-after-import': 'error',

			'@typescript-eslint/no-misused-promises': [
				'error',
				{
					checksVoidReturn: false,
				},
			],
		},
	},
	...compat
		.extends(
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:@typescript-eslint/recommended-type-checked',
			'plugin:tailwindcss/recommended',
			'prettier'
		)
		.map((config) => ({
			...config,
			files: ['apps/web/src/**/*'],
			ignores: ['apps/web/.next', 'apps/web/node_modules'],
		})),
	{
		files: ['apps/web/src/**/*'],
		ignores: ['apps/web/.next', 'apps/web/node_modules'],

		settings: {
			next: {
				rootDir: 'apps/web',
			},

			tailwindcss: {
				callees: ['classnames', 'classNamesTailwind', 'extendVariants'],
				config: './apps/web/tailwind.config.js',

				cssFiles: ['**/*.css', '!**/node_modules', '!**/.*', '!**/dist', '!**/build', '!**/.next'],

				removeDuplicates: true,
			},
		},

		rules: {
			curly: ['error', 'all'],
			'import/extnesions': 'off',
			'@typescript-eslint/unbound-method': 'off',
			'@typescript-eslint/no-var-requires': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-unsafe-argument': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/restrict-template-expressions': 'off',
			'@typescript-eslint/require-await': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
			'@typescript-eslint/no-redundant-type-constituents': 'off',
			'@typescript-eslint/await-thenable': 'off',
			'@typescript-eslint/no-unused-expressions': 'off',
			'@typescript-eslint/no-base-to-string': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
		},
	},
];
