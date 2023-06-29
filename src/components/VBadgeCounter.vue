<script setup>
import { defineProps, computed } from 'vue';

import { useColors } from '../composables';

const props = defineProps({
	color: {
		type: String,
		default: '',
		required: false,
	},
	isInverted: {
		type: Boolean,
		default: false,
		required: false,
	},
});

const { colors } = useColors(() => props.color);

const currentColors = computed(() => {
	if (props.isInverted) {
		return {
			text: colors.value.background,
			background: colors.value.text,
		};
	}
	return colors.value;
});
</script>

<template>
	<div class="badge-analytics">
		<slot>0</slot>
	</div>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.badge-analytics {
	display: inline-flex;
	padding-block: 0.125rem;
	padding-inline: 0.25rem;
	align-items: center;
	justify-content: center;
	border-radius: 100vmax;
	color: v-bind('currentColors.text');
	background-color: v-bind('currentColors.background');
	box-shadow: 0 0 0 2px var(--db-components-color-background-primary);
	@include mixins.text();
	@include mixins.text--xs();
	@include mixins.font-weight(700);

	&--type-negative .badge-analytics__icon {
		transform: rotateZ(180deg);
	}

	&__icon {
		inline-size: 0.5rem;
		max-block-size: 0.8125rem;
	}
}
</style>
