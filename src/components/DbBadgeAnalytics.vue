<script setup>
import { computed } from 'vue';
import InlineSvg from 'vue-inline-svg';

import { useColors } from '../composables';
import { BADGE_ANALYTICS } from '../constants';

const props = defineProps({
	type: {
		type: String,
		default: BADGE_ANALYTICS.TYPES[0],
		required: false,
	},
});

const color = computed(() => {
	switch (props.type) {
		case BADGE_ANALYTICS.TYPES[1]: {
			return 'success';
		}
		case BADGE_ANALYTICS.TYPES[2]: {
			return 'error';
		}
		default: {
			return 'fallback';
		}
	}
});

const { colors } = useColors(() => color.value);

const classes = computed(() => [`badge-analytics--type-${props.type}`]);

const isIconVisible = computed(() => props.type !== BADGE_ANALYTICS.TYPES[0]);
</script>

<template>
	<div
		class="badge-analytics"
		:class="classes"
	>
		<span>
			<slot> — </slot>
		</span>
		<InlineSvg
			v-if="isIconVisible"
			class="badge-analytics__icon"
			src="icons/solid/triangle.svg"
		/>
	</div>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.badge-analytics {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 100vmax;
	background-color: v-bind('colors.background');
	color: v-bind('colors.text');
	gap: 0.1875rem;
	min-inline-size: 1.875rem;
	padding-block: 0.125rem;
	padding-inline: 0.25rem;
	@include mixins.text();
	@include mixins.text--xs();
	@include mixins.font-weight(700);

	&__icon {
		inline-size: 0.5rem;
		max-block-size: 0.8125rem;
	}

	&--type-negative .badge-analytics__icon {
		transform: rotateZ(180deg);
	}
}
</style>
