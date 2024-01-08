import { computed, toValue } from 'vue';

import { toKebabCase } from '../utilities';

const MIX_PERCENTS = new Map([
	['empty', 100],
	['text', 100],
	['textHover', 80],
	['textDisabled', 50],
	['background', 7],
	['backgroundHover', 15],
	['outline', 50],
]);

export const useColors = (name, options) => {
	const { prefix = 'db', postfixes = Array.from(MIX_PERCENTS.keys()) } = options || {};
	const isCssColor = computed(() => CSS.supports('color', toValue(name)));

	const generateColor = (postfix) =>
		isCssColor.value
			? `color-mix(in srgb, ${toValue(name)} ${MIX_PERCENTS.get(
					postfix
			  )}%, var(--db-components-color-background-primary))`
			: `var(--${prefix}-color-${toValue(name)}-${toKebabCase(postfix)}, var(--db-components-color-palette-${toValue(
					name
			  )}-${toKebabCase(postfix)}, var(--db-components-color-palette-fallback-${toKebabCase(postfix)})))`;

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
