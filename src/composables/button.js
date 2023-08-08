import { computed } from 'vue';

export const useButton = (props) => {
	const tag = computed(() => (props.tag || props.to ? 'a' : 'button'));
	const attrs = computed(() => {
		const isLink = props.to;
		const isCustomComponent = props.tag;

		return {
			...(!isLink && { type: 'button' }),
			...(isLink && { [isCustomComponent ? 'to' : 'href']: props.to }),
		};
	});

	return {
		tag,
		attrs,
	};
};
