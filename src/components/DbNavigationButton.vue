<script setup>
import { computed } from 'vue';

import { useRadioModel } from '../composables';
import { NAVIGATION } from '../constants';

import DbBadgeCounter from './DbBadgeCounter.vue';

const props = defineProps({
	modelValue: {
		type: String,
		required: true,
	},
	value: {
		type: String,
		required: false,
		default: '',
	},
	id: {
		type: String,
		default: () => window.self.crypto.randomUUID(),
		required: false,
	},
	name: {
		type: String,
		required: true,
	},
	colorScheme: {
		type: String,
		required: false,
		default: NAVIGATION.COLOR_SCHEMES.get('default'),
		validator: (value) => NAVIGATION.COLOR_SCHEMES.has(value),
	},
});

const emit = defineEmits(['update:modelValue']);

const { isChecked, handleChange } = useRadioModel(props, emit);

const classes = computed(() => ({
	// 'navigation-button--active': isChecked.value,
	[`navigation-button--color-scheme-${props.colorScheme}`]: true,
}));
</script>

<template>
	<div
		class="navigation-button"
		:class="classes"
	>
		<input
			:id="props.id"
			:checked="isChecked"
			:value="props.value"
			:name="props.name"
			type="radio"
			class="navigation-button__input"
			@change="handleChange"
		/>
		<label
			:for="props.id"
			class="navigation-button__label"
		>
			<span class="navigation-button__icon">
				<slot name="icon" />
			</span>
			<span class="navigation-button__text">
				<slot />
			</span>
			<DbBadgeCounter class="navigation-button__badge">
				<slot name="badge" />
			</DbBadgeCounter>
		</label>
	</div>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.navigation-button {
	&--color-scheme-default {
		--background-color-active: var(--db-components-color-background-tertiary);
		--box-shadow-active: none;
	}
	&--color-scheme-alternate {
		--background-color-active: var(--db-components-color-background-primary);
		--box-shadow-active: var(--db-components-shadow-xs);
	}

	&__label {
		border-radius: var(--db-components-border-radius-md);
		color: var(--db-components-color-text-secondary);
		transition: var(--db-components-transition-base);
		transition-property: color, background-color, box-shadow;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		gap: 0.5rem;
		min-block-size: 2.25rem;
		padding-block: 0.5rem;
		padding-inline: 0.75rem;
	}

	&__badge {
		&:empty {
			display: none;
		}
	}

	&__text {
		@include mixins.text();
		@include mixins.text--md();
		@include mixins.font-weight(700);
	}

	&__icon {
		block-size: 1em;
		font-size: 1rem;
		inline-size: 1em;

		&:deep(svg, img) {
			block-size: 1em;
			inline-size: 1em;
		}

		&:empty {
			display: none;
		}
	}

	&:hover {
		.navigation-button__label {
			color: var(--db-components-color-text-primary);
		}
	}

	&__input {
		@include mixins.visually-hidden();

		&:checked {
			& + .navigation-button__label {
				color: var(--db-components-color-primary);
				background-color: var(--background-color-active);
				box-shadow: var(--box-shadow-active);
			}
		}
		&:focus-visible {
			& + .navigation-button__label {
				@include mixins.focus-state();
			}
		}
	}
}
</style>
