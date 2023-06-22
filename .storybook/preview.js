import '../src/assets/styles/index.scss';

import languages from './constants/languages';
import themes from './constants/themes';
import withLanguage from './decorators/language';
import withTheme from './decorators/theme';

import i18n from './plugins/i18n';
import { setup } from '@storybook/vue3';

setup((app) => {
	app.use(i18n);
});

const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export const decorators = [withLanguage(i18n), withTheme];

export const globalTypes = {
	language: {
		description: 'Controls global locale',
		default: 'en',
		toolbar: {
			items: languages,
			icon: 'globe',
		},
	},
	theme: {
		description: 'Controls global theme',
		default: 'auto',
		toolbar: {
			items: themes,
			icon: 'mirror',
		},
	},
};

export default preview;
