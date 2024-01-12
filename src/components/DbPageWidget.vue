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
		class="page-widget"
	>
		<header class="page-widget__header">
			<slot name="header" />
		</header>
		<div class="page-widget__body">
			<slot />
		</div>
		<footer class="page-widget__footer">
			<slot name="footer" />
		</footer>
	</component>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.page-widget {
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	border-radius: var(--db-components-border-radius-lg);
	background-color: var(--db-components-color-background-primary);
	color: var(--db-components-color-text-secondary);
	@include mixins.text();
	@include mixins.text--md();

	&__header,
	&__footer {
		@include mixins.font-weight(600);
		color: var(--db-components-color-text-primary);
		padding-block: 1.25rem;
		padding-inline: 1.25rem;
		row-gap: 1rem;
	}
	&__body {
		padding-inline: 1.25rem;
	}

	&__header,
	&__body,
	&__footer {
		&:empty {
			display: none;
		}
	}
}
</style>
