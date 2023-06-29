module.exports = {
	extends: ['airbnb-base', 'plugin:vue/vue3-recommended', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': [1],
		'no-implicit-coercion': [
			2,
			{
				boolean: true,
				number: true,
				string: true,
				disallowTemplateShorthand: true,
				allow: [],
			},
		],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
				pathGroups: [
					{
						pattern: './*',
						group: 'sibling',
					},
				],
			},
		],
		'import/prefer-default-export': 0,
		'vue/html-indent': [0],
		'vue/html-self-closing': [
			1,
			{
				html: {
					void: 'always',
				},
			},
		],
		'vue/singleline-html-element-content-newline': [0],
	},
};
