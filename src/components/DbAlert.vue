<script setup>
import { useColors } from '../composables';

const props = defineProps({
	color: {
		type: String,
		default: 'fallback',
		required: false,
	},
});

const { colors } = useColors(() => props.color);
</script>

<template>
	<div class="alert">
		<div class="alert__icon">
			<slot name="icon" />
		</div>
		<div class="alert__body">
			<slot />
		</div>
	</div>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.alert {
	display: flex;
	flex-direction: column;
	border: 1px solid v-bind('colors.outline');
	border-radius: 0.75rem;
	background-color: v-bind('colors.background');
	color: v-bind('colors.text');
	gap: 0.75rem;
	min-inline-size: 8.5rem;
	padding-block: 1rem;
	padding-inline: 1rem;
	&__icon {
		font-size: 1.25rem;
		line-height: 1;
	}
	&__body {
		@include mixins.text();
		@include mixins.text--md();
		@include mixins.font-weight(500);
	}
}
</style>
