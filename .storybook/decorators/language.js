import languages from '../constants/languages';

const getDirection = (langCode) => (languages.find(({ value }) => langCode === value)?.isRtl ? 'rtl' : 'ltr');

export default (i18n) => {
	return (story, context) => {
		const { language } = context.globals;
		i18n.global.locale.value = language;

		return {
			components: { story },
			template: `
				<div lang="${language}" dir="${getDirection(language)}">
				<story/>
				</div>
			`,
		};
	};
};
