<script setup>
const props = defineProps({
	tag: {
		type: [Object, String],
		required: false,
		default: 'div',
	},
});
</script>

<template>
	<component
		:is="props.tag"
		class="page-widgets-group"
	>
		<slot />
	</component>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';
@import '/src/assets/styles/utilities/breakpoints';

.page-widgets-group {
	display: grid;
	gap: 1.25rem;
	grid-template-rows: 1fr auto;
	grid-template-columns: 1fr 1fr 1fr;
	justify-items: stretch;
	align-items: stretch;

	@media screen and (max-width: $desktop-sm) {
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (max-width: $tables-sm) {
		grid-template-columns: 1fr;
	}
	&:empty {
		display: none;
	}
}
</style>
