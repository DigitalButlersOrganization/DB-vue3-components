<script setup>
// Docs: https://vue-tippy.netlify.app/flavor/composition-api

import { ref, onMounted, onUpdated } from 'vue';
import { useTippy } from 'vue-tippy';
import 'tippy.js/animations/shift-away.css';

const DEFAULT_TIPPY_OPTIONS = {
	allowHTML: true,
	arrow: `<svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M 16 0 L 8.7 7.8 C 8.3 8.2 7.7 8.2 7.3 7.8 L 0 0 Z" fill="currentColor"/></g></svg>`,
	animation: 'shift-away',
};

const props = defineProps({
	tippyOptions: {
		type: Object,
		default: () => ({}),
		required: false,
	},
});

const trigger = ref();
const contentWrapper = ref();
let handleUpdate = () => {};

onMounted(() => {
	const { refreshContent } = useTippy(trigger, {
		content: () => contentWrapper?.value?.innerHTML,
		...DEFAULT_TIPPY_OPTIONS,
		...props.tippyOptions,
	});

	handleUpdate = refreshContent;
});

onUpdated(() => {
	handleUpdate();
});
</script>

<template>
	<div class="tooltip">
		<div
			ref="trigger"
			class="tooltip__trigger"
		>
			<slot name="trigger" />
		</div>
	</div>
	<div
		ref="contentWrapper"
		class="tooltip__content-wrapper"
	>
		<div class="tooltip__content">
			<slot />
		</div>
	</div>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.tooltip {
	position: relative;
	inline-size: fit-content;
	&__content {
		&-wrapper {
			display: none;
		}
		@include mixins.text();
		@include mixins.text--xs();
		@include mixins.font-weight(600);
		border-radius: 0.5rem;
		background-color: var(--db-components-color-background-primary);
		box-shadow: var(--db-components-shadow-lg);
		color: var(--db-components-color-text-primary);
		padding-block: 0.5rem;
		padding-inline: 0.75rem;
	}
	&__arrow {
		color: var(--db-components-color-background-primary);
	}
}
</style>
<style lang="scss">
.tippy-svg-arrow {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	color: var(--db-components-color-background-primary);
}
</style>
