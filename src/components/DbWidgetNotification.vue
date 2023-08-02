<script setup>
import InlineSvg from 'vue-inline-svg';

import DbAvatar from './DbAvatar.vue';
import DbNotification from './DbNotification.vue';

const props = defineProps({
	isClosable: {
		type: Boolean,
		required: false,
		default: true,
	},
	isDetailed: {
		type: Boolean,
		required: false,
		default: false,
	},
});

const emit = defineEmits(['click:close', 'click:show-more']);

const handleCloseClick = () => emit('click:close');
const handleShowMoreClick = () => emit('click:show-more');
</script>

<template>
	<DbNotification class="widget-notification">
		<template #avatar>
			<slot name="avatar" />
		</template>
		<template #header>
			<slot name="header" />
		</template>
		<slot />
		<template #actions>
			<div class="widget-notification__actions">
				<button
					v-if="props.isClosable"
					class="widget-notification__action"
					@click="handleCloseClick"
				>
					<InlineSvg src="/icons/outline/check.svg" />
				</button>
				<button
					v-if="props.isDetailed"
					class="widget-notification__action"
					@click="handleShowMoreClick"
				>
					<InlineSvg src="/icons/outline/expand-06.svg" />
				</button>
			</div>
		</template>
	</DbNotification>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.widget-notification {
	inline-size: 100%;
	transition: var(--db-components-transition-base);
	transition-property: background-color;

	&:deep(.notification) {
		align-items: center;
	}
	&:deep(.notification__header) {
		@include mixins.font-weight(700);
	}

	&__actions {
		position: absolute;
		display: flex;
		align-items: center;
		border-radius: var(--db-components-border-radius-md);
		background-color: var(--db-components-color-background-primary);
		box-shadow: inset 0 0 0 1px var(--db-components-color-tertiary);
		gap: 0.5rem;
		inset-block-end: 0;
		inset-inline-start: 50%;
		opacity: 0;
		padding-block: 0.25rem;
		padding-inline: 0.5rem;
		transition: var(--db-components-transition-base);
		transition-property: opacity;
		translate: -50% 50%;

		&:empty {
			display: none;
		}

		&:focus-within {
			opacity: 1;
		}
	}
	&__action {
		display: inline-flex;
		padding: 0.125rem;
		border: none;
		border-radius: var(--db-components-border-radius-sm);
		background-color: transparent;
		color: var(--db-components-color-text-secondary);
		cursor: pointer;
		font-size: 1.125rem;
		transition: var(--db-components-transition-base);
		transition-property: color;

		&:deep(svg) {
			block-size: 1em;
			inline-size: 1em;
		}

		&:hover {
			color: var(--db-components-color-secondary);
		}
		&:focus-visible {
			outline-offset: min(-0.125rem, -2px);
			@include mixins.focus-state();
		}
	}

	&:hover {
		background-color: var(--db-components-color-background-tertiary);
		.widget-notification__actions {
			opacity: 1;
		}
	}
}
</style>
