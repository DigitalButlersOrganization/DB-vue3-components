/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
	stories: ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-storysource',
		'@storybook/addon-knobs',
		'@storybook/addon-viewport',
	],
	framework: {
		name: '@storybook/vue3-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	staticDirs: ['../public'],
};
export default config;
