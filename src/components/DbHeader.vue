<script setup>
import DbContainer from './DbContainer.vue';

const props = defineProps({
	tag: {
		type: String,
		required: false,
		default: 'header',
	},
	isFixed: {
		default: false,
		type: Boolean,
	},
});
</script>

<template>
	<component
		:is="props.tag"
		class="header"
		:class="{ 'header--fixed': isFixed }"
	>
		<DbContainer class="header__container">
			<div class="header__left-side">
				<div class="header__logo">
					<slot name="brand" />
				</div>
				<div class="header__navigation">
					<slot name="navigation" />
				</div>
			</div>
			<div class="header__right-side">
				<div class="header__actions">
					<slot name="actions" />
				</div>
				<div class="header__avatar">
					<slot name="avatar" />
				</div>
			</div>
		</DbContainer>
	</component>
</template>

<style scoped lang="scss">
@import '/src/assets/styles/utilities/breakpoints';
.header {
	background-color: var(--db-components-color-background-primary);
	padding-block: 1rem;

	&__left-side,
	&__right-side,
	&__container {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1.5rem;
	}
	&__right-side {
		gap: 1rem;
	}
	&__container {
		justify-content: space-between;
		gap: 1.5rem;
		@media screen and (max-width: $tables-md) {
			padding-inline: 1.5rem;
		}
	}
	&--fixed {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}

	&__navigation {
		display: flex;
		flex-wrap: wrap;

		@media screen and (max-width: $tables-md) {
			position: fixed;
			top: auto;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: var(--db-components-color-background-primary);
			padding-block: 0.5rem;
			justify-content: center;
			z-index: 80;
			gap: 1.375rem;
			border-block-start: 1px solid var(--db-components-color-background-secondary);
		}
	}
}
</style>
