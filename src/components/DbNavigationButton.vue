<script setup>
import { computed, inject } from 'vue';

import { useButton } from '../composables';
import { NAVIGATION } from '../constants';

import DbBadgeCounter from './DbBadgeCounter.vue';

const props = defineProps({
	tag: {
		type: Object,
		required: false,
		default: null,
	},
	to: {
		type: String,
		required: false,
		default: '',
	},
	isCurrent: {
		type: Boolean,
		required: false,
		default: false,
	},
	size: {
		type: String,
		required: false,
		default: 'md',
	},
});

const colorScheme = inject('colorScheme', NAVIGATION.COLOR_SCHEMES.get('default'));

const { tag, attrs } = useButton(props);

const classes = computed(() => ({
	'navigation-button--current': props.isCurrent,
	[`navigation-button--size-${props.size}`]: true,
	[`navigation-button--color-scheme-${colorScheme}`]: true,
}));
</script>

<template>
	<component
		:is="tag"
		v-bind="attrs"
		class="navigation-button"
		:class="classes"
	>
		<span class="navigation-button__icon">
			<slot name="icon" />
		</span>
		<span class="navigation-button__slot">
			<slot />
		</span>
		<DbBadgeCounter class="navigation-button__badge">
			<slot name="badge" />
		</DbBadgeCounter>
	</component>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.navigation-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: var(--db-components-border-radius-md);
	background-color: transparent;
	color: var(--db-components-color-text-secondary);
	cursor: pointer;
	gap: 0.5rem;
	min-block-size: 2.25rem;
	padding-block: 0.5rem;
	text-decoration: none;
	transition: var(--db-components-transition-base);
	transition-property: color, background-color, box-shadow;

	&--size {
		&-md {
			padding-inline: 0.75rem;
		}
		&-sm {
			padding-inline: 0.62rem;
		}
	}
	&--color-scheme {
		&-default {
			--background-color-active: var(--db-components-color-background-tertiary);
			--box-shadow-active: none;
		}
		&-alternate {
			--background-color-active: var(--db-components-color-background-primary);
			--box-shadow-active: var(--db-components-shadow-xs);
		}
	}

	&__badge {
		&:empty {
			display: none;
		}
	}

	&__slot {
		display: inline-flex;

		@include mixins.text();
		@include mixins.text--md();
		@include mixins.font-weight(700);
	}

	&__icon {
		block-size: 1.25em;
		font-size: 1rem;
		inline-size: 1.25em;

		&:deep(svg, img) {
			block-size: 1.25em;
			inline-size: 1.25em;
		}

		&:empty {
			display: none;
		}
	}

	&--current {
		background-color: var(--background-color-active);
		box-shadow: var(--box-shadow-active);
		color: var(--db-components-color-primary);
	}

	&:hover {
		color: var(--db-components-color-text-primary);
	}

	&:focus-visible {
		@include mixins.focus-state();
	}
}
</style>
