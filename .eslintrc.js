module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'prettier',
		'plugin:jest/recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
		project: './tsconfig.json',
		createDefaultProgram: true,
	},
	plugins: ['react', '@typescript-eslint', 'import', 'jsx-a11y', 'prettier'],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				paths: ['src'],
			},
		},
	},
	rules: {
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'no-use-before-define': 'off',
		'import/prefer-default-export': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/no-unsafe-return': 'off', // TODO - пересмотреть выполнение правила
		'@typescript-eslint/no-explicit-any': 'off', // TODO - пересмотреть выполнение правила
		'@typescript-eslint/unbound-method': 'off', // TODO - пересмотреть выполнение правила
		'@typescript-eslint/no-empty-interface': 'off', // TODO - пересмотреть выполнение правила
		'@typescript-eslint/no-unsafe-assignment': 'off', // TODO - пересмотреть выполнение правила
		'@typescript-eslint/no-unsafe-member-access': 'off', // TODO - пересмотреть выполнение правила
		'@typescript-eslint/no-unsafe-call': 'off', // TODO - пересмотреть выполнение правила
		'react/jsx-indent-props': 'off',
		'react/display-name': 0,
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'react/jsx-indent': 'off',
		'react/prop-types': 'off',
		'prettier/prettier': 'error',
	},
};
