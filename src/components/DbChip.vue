<script setup>
import { computed, useSlots } from 'vue';
import InlineSvg from 'vue-inline-svg';

import { CHIP } from '../constants';

import DbAvatar from './DbAvatar.vue';

const AVATAR_SIZES = new Map([
	[CHIP.SIZES[0], '1rem'],
	[CHIP.SIZES[1], '1.5rem'],
	[CHIP.SIZES[2], '1.75rem'],
]);

const props = defineProps({
	size: {
		type: String,
		default: CHIP.SIZES[1],
		validator(value) {
			return CHIP.SIZES.includes(value);
		},
		required: false,
	},
	type: {
		type: String,
		default: CHIP.TYPES[0],
		validator(value) {
			return CHIP.TYPES.includes(value);
		},
		required: false,
	},
	avatarSrc: {
		type: String,
		default: '',
		required: false,
	},
	isClosable: {
		type: Boolean,
		default: false,
		required: false,
	},
});

const slots = useSlots();

const emit = defineEmits(['click:close']);

const handleCloseClick = () => emit('click:close');

const classes = computed(() => [
	!props.avatarSrc && !slots.checkbox && !slots.prepend && 'chip--high-inline-start-padding',
	!props.isClosable && !slots.counter && !slots.append && 'chip--high-inline-end-padding',
	`chip--type-${props.type}`,
	`chip--size-${props.size}`,
]);

const avatarSize = computed(() => AVATAR_SIZES.get(props.size));
</script>

<template>
	<div
		class="chip"
		:class="classes"
	>
		<slot
			name="prepend"
			:avatar-size="avatarSize"
		/>
		<slot name="checkbox" />
		<!--TODO: Fix following bug. If checkbox slot is empty and parent isn't flex or grid layout chip is moved o  -->
		<DbAvatar
			v-if="props.avatarSrc"
			:src="props.avatarSrc"
			:size="avatarSize"
		/>
		<span class="chip__text">
			<slot />
		</span>
		<span class="chip__counter">
			<slot name="counter" />
		</span>
		<button
			v-if="props.isClosable"
			:aria-label="$t('actions.close')"
			class="chip__close-button"
			@click="handleCloseClick"
		>
			<InlineSvg
				class="chip__close-button-icon"
				src="icons/outline/x-close.svg"
			/>
		</button>
		<slot name="append" />
	</div>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.chip {
	display: inline-flex;
	align-items: center;
	border-radius: var(--db-components-border-radius-md);
	gap: 0.25rem;
	padding-block: 0.25rem;
	padding-inline: 0.25rem;

	&--size {
		&-small {
			min-block-size: 1.5rem;
		}
		&-medium {
			min-block-size: 2rem;
		}
		&-large {
			min-block-size: 2.25rem;
		}
	}

	&--high-inline-start-padding {
		padding-inline-start: 0.75rem;
	}

	&--high-inline-end-padding {
		padding-inline-end: 0.75rem;
	}

	&--type {
		&-outline {
			background-color: var(--db-components-color-background-primary);
			box-shadow: 0 0 0 1px inset var(--db-components-color-tertiary);
			color: var(--db-components-color-text-primary);
		}
		&-solid {
			background-color: var(--db-components-color-background-secondary);
			color: var(--db-components-color-text-secondary);
		}
	}

	&__text {
		@include mixins.text();
		@include mixins.text--md();
		@include mixins.font-weight(500);
	}

	&__counter {
		@include mixins.text();
		@include mixins.text--sm();
		@include mixins.font-weight(500);
		display: inline-grid;
		border-radius: var(--db-components-border-radius-sm);
		background-color: var(--db-components-color-background-tertiary);
		min-block-size: 1.125rem;
		min-inline-size: 1.125rem;
		padding-inline: 0.25rem;
		place-items: center;

		&:empty {
			display: none;
		}
	}

	&__close-button {
		display: grid;
		padding: 0;
		border: none;
		border-radius: var(--db-components-border-radius-xs);
		background: none;
		color: var(--db-components-color-secondary);
		place-items: center;
		transition: color var(--db-components-transition-duration-base) var(--db-components-transition-timing-function-base);

		&:hover {
			color: var(--db-components-color-text-secondary);
		}
		&:focus-visible {
			@include mixins.focus-state();
		}

		&-icon {
			max-block-size: 0.75rem;
			max-inline-size: 0.75rem;
			:deep(path) {
				stroke-width: var(--db-components-icon-sm-stroke-width);
			}
		}
	}
}
</style>
