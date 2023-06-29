module.exports = {
	extends: ['stylelint-config-recommended-scss', 'stylelint-config-idiomatic-order'],
	plugins: [
		'stylelint-scss',
		'stylelint-color-format',
		'stylelint-high-performance-animation',
		'stylelint-declaration-block-no-ignored-properties',
		'stylelint-use-logical-spec',
		'stylelint-prettier',
	],
	overrides: [
		{
			files: ['**/*.vue'],
			customSyntax: 'postcss-html',
		},
	],
	rules: {
		'prettier/prettier': true,
		'selector-class-pattern': null,
		'scss/at-function-pattern': null,
		'max-nesting-depth': [
			4,
			{
				ignore: ['pseudo-classes'],
				ignoreAtRules: ['if', 'else', 'for'],
			},
		],
		'value-no-vendor-prefix': [
			true,
			{
				ignoreValues: ['box'],
			},
		],
		'order/properties-alphabetical-order': null,
		'scss/at-import-partial-extension': null,
		'scss/at-import-partial-extension-blacklist': null,
		'color-named': 'never',
		'color-format/format': {
			format: 'hsl',
		},
		'plugin/no-low-performance-animation-properties': [true, { ignore: 'paint-properties' }],
		'plugin/declaration-block-no-ignored-properties': true,
		'liberty/use-logical-spec': true,
	},
};
