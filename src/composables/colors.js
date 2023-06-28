import { computed, toValue } from 'vue';

const MIX_PERCENTS = new Map([
	['text', 100],
	['hover', 70],
	['disabled', 50],
	['background', 10],
]);

export const useColors = (name, options) => {
	const { prefix = 'db', postfixes = Array.from(MIX_PERCENTS.keys()) } = options || {};
	const isCssColor = computed(() => CSS.supports('color', toValue(name)));

	console.log(postfixes);

	const generateColor = (postfix) =>
		isCssColor.value
			? `color-mix(in srgb, ${toValue(name)} ${MIX_PERCENTS.get(
					postfix
			  )}%, var(--db-components-color-background-primary))`
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
