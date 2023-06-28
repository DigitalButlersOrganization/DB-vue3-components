import { computed, toValue } from 'vue';

export const useColors = (name, options) => {
	const { prefix = 'db', postfixes = ['text', 'hover', 'disabled', 'background'] } = options || {};
	const isCssColor = computed(() => CSS.supports('color', toValue(name)));

	const generateColor = (postfix) =>
		isCssColor.value
			? toValue(name)
			: `var(--${prefix}-color-${toValue(name)}-${postfix}, var(--db-components-color-${toValue(
					name
			  )}-${postfix}, var(--db-components-color-fallback-${postfix})))`;

	const colors = computed(() =>
		postfixes.reduce((accumulator, postfix) => {
			accumulator[postfix] = generateColor(postfix);
			return accumulator;
		}, {})
	);

	return {
		colors,
	};
};
