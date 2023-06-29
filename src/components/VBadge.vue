<script setup>
import { defineProps, computed } from 'vue';

import { V_BADGE } from '../constants';
import { useColors } from '../composables';

const props = defineProps({
	color: {
		type: String,
		default: 'accent-1',
		required: false,
	},
	size: {
		type: String,
		default: V_BADGE.SIZES[0],
		validator: (value) => {
			return V_BADGE.SIZES.includes(value);
		},
	},
});

const { colors } = useColors(() => props.color);
const classes = computed(() => {
	return [`badge--size-${props.size}`];
});
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
	gap: 0.25rem;
	padding-block: 0.25rem;
	padding-inline: 0.5rem;
	align-items: center;
	justify-content: center;
	border-radius: 100vmax;
	color: v-bind('colors.text');
	background-color: v-bind('colors.background');
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
