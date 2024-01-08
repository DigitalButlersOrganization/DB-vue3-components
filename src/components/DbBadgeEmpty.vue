<script setup>
import { computed } from 'vue';

import { useColors } from '../composables';
import { BADGE } from '../constants';

const props = defineProps({
	color: {
		type: String,
		default: 'accent-1',
		required: false,
	},
	size: {
		type: String,
		default: BADGE.SIZES[0],
		validator: (value) => BADGE.SIZES.includes(value),
	},
});
const { colors } = useColors(() => props.color);
const classes = computed(() => [`badge--size-${props.size}`]);
</script>

<template>
	<div
		class="badge"
		:class="classes"
	/>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.badge {
	border-radius: var(--db-components-border-radius-pill);
	background-color: v-bind('colors.empty');
	box-shadow: 0 0 0 2px var(--db-components-color-background-primary);

	&--size-medium {
		width: 0.75rem;
		height: 0.75rem;
	}
}
</style>
