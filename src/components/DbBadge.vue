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
	>
		<span class="slot-wrapper">
			<slot name="prepend" />
		</span>
		<span class="slot-wrapper font-weight-500">
			<slot />
		</span>
		<span class="slot-wrapper">
			<slot name="append" />
		</span>
	</div>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.badge {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: var(--db-components-border-radius-pill);
	background-color: v-bind('colors.background');
	color: v-bind('colors.text');
	gap: 0.25rem;
	padding-block: 0.25rem;
	padding-inline: 0.5rem;
	@include mixins.text();
	@include mixins.font-weight(500);

	&--size-medium {
		@include mixins.text--md();
	}
	&--size-small {
		@include mixins.text--sm();
	}
}

.slot-wrapper:empty {
	display: none;
}
</style>
