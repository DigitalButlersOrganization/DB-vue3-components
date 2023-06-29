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
	align-items: center;
	justify-content: center;
	border-radius: 100vmax;
	background-color: v-bind('currentColors.background');
	box-shadow: 0 0 0 2px var(--db-components-color-background-primary);
	color: v-bind('currentColors.text');
	padding-block: 0.125rem;
	padding-inline: 0.25rem;
	@include mixins.text();
	@include mixins.text--xs();
	@include mixins.font-weight(700);
}
</style>
