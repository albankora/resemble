module.exports = {
	parserOptions: {
		project: './tsconfig.json',
		sourceType: 'module',
	},
	plugins: ['standard'],
	extends: [
		'standard-with-typescript',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	root: true,
	env: {
		node: true,
		jest: true,
		es6: true,
	},
	rules: {
    '@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/space-before-function-paren': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-non-null-assertion': 'warn',
		'@typescript-eslint/no-floating-promises': 'warn',
		'@typescript-eslint/no-extraneous-class': 'warn',
	},
	ignorePatterns: ["node_modules/*"]
};
