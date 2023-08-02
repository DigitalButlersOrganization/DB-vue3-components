<script setup>
const props = defineProps({
	tag: {
		type: [Object, String],
		required: false,
		default: 'li',
	},
});
</script>

<template>
	<component
		:is="props.tag"
		class="notification"
	>
		<div class="notification__avatar">
			<slot name="avatar" />
		</div>

		<header class="notification__header">
			<slot name="header" />
		</header>
		<div class="notifications__body">
			<slot />
		</div>
		<footer class="notification__footer">
			<slot name="footer" />
		</footer>
		<slot name="actions" />
	</component>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.notification {
	position: relative;
	display: grid;
	align-content: center;
	align-items: center;
	border-radius: var(--db-components-border-radius-lg);
	background-color: var(--db-components-color-background-primary);
	color: var(--db-components-color-text-secondary);
	column-gap: 1rem;
	grid-auto-rows: 1fr min-content min-content;
	grid-template-areas:
		'avatar header'
		'avatar body'
		'avatar footer';
	grid-template-columns: max-content 1fr;
	padding-block: 1.25rem;
	padding-inline: 1.25rem;
	@include mixins.text();
	@include mixins.text--md();

	&__avatar {
		grid-area: avatar;
	}
	&__header {
		@include mixins.font-weight(600);
		color: var(--db-components-color-text-primary);
		grid-area: header;
	}
	&__body {
		grid-area: body;
	}
	&__footer {
		grid-area: footer;
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
