import { createI18n } from 'vue-i18n';
const i18n = createI18n({
	legacy: false,
	locale: window.navigator.language || 'en',
	fallbackLocale: 'en',
	globalInjection: true,
	messages: {
		en: {
			helloWorld: 'Hello world',
		},
		ru: {
			helloWorld: 'Привет мир',
		},
		ar: {
			helloWorld: 'مرحبا العالم',
		},
	},
});

export default i18n;
