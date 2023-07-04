import { createI18n } from 'vue-i18n';

import { messages } from './messages';

const i18n = createI18n({
	legacy: false,
	locale: window.navigator.language || 'en',
	fallbackLocale: 'en',
	globalInjection: true,
	messages,
});

export default i18n;
