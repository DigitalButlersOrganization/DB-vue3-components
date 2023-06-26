module.exports = {
	extends: ['prettier', 'plugin:vue/vue3-recommended'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': [1],
		'vue/html-indent': [0],
		'vue/singleline-html-element-content-newline': [0],
	},
};
