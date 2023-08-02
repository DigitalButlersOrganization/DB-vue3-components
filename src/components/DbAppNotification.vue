<script setup>
import InlineSvg from 'vue-inline-svg';

import DbButton from './DbButton.vue';
import DbNotification from './DbNotification.vue';

const props = defineProps({
	isDismissible: {
		type: Boolean,
		required: false,
		default: false,
	},
	isDetailed: {
		type: Boolean,
		required: false,
		default: false,
	},
});

const emit = defineEmits(['click:dismiss', 'click:close', 'click:show-more']);

const handleCloseClick = () => emit('click:close');
const handleDismissClick = () => emit('click:dismiss');
const handleShowMoreClick = () => emit('click:show-more');
</script>

<template>
	<DbNotification class="app-notification">
		<template #avatar>
			<slot name="avatar" />
		</template>

		<template #header>
			<slot name="header" />
		</template>
		<slot />
		<template #footer>
			<div class="app-notification__actions">
				<DbButton
					v-if="props.isDetailed"
					type="text"
					size="small"
					color="primary"
					@click="handleShowMoreClick"
				>
					{{ $t('actions.showMore') }}
				</DbButton>

				<DbButton
					v-if="props.isDismissible"
					type="text"
					size="small"
					color="primary"
					@click="handleDismissClick"
				>
					{{ $t('actions.dismiss') }}
				</DbButton>
			</div>
		</template>
		<template #actions>
			<DbButton
				class="app-notification__close-button"
				:is-icon="true"
				type="text"
				size="small"
				:aria-label="$t('actions.close')"
				@click="handleCloseClick"
			>
				<InlineSvg src="icons/outline/x-close.svg" />
			</DbButton>
		</template>
	</DbNotification>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.app-notification {
	align-items: start;
	border: 1px solid var(--db-components-color-background-tertiary);
	box-shadow: var(--db-components-shadow-lg);
	inline-size: 100%;
	padding-inline-end: 3.5rem;

	&__actions {
		display: flex;
		gap: 0.75rem;
		margin-block-start: 1rem;
		&:empty {
			display: none;
		}
	}

	&__close-button {
		position: absolute;
		inset-block-start: 0.75rem;
		inset-inline-end: 0.75rem;
	}

	&:deep(.notification__header) {
		margin-block-end: 0.25rem;
	}
}
</style>
