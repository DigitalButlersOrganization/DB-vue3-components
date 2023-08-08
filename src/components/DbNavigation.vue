<script setup>
import { computed, provide } from 'vue';

import { NAVIGATION } from '../constants';

const props = defineProps({
	colorScheme: {
		type: String,
		required: false,
		default: NAVIGATION.COLOR_SCHEMES.get('default'),
		validator: (value) => NAVIGATION.COLOR_SCHEMES.has(value),
	},
});

provide('colorScheme', props.colorScheme);

const classes = computed(() => ({
	[`navigation--color-scheme-${props.colorScheme}`]: true,
}));
</script>

<template>
	<nav
		class="navigation"
		:class="classes"
	>
		<slot />
	</nav>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.navigation {
	display: flex;
	align-items: center;
	padding: 0.25rem;
	border: 1px solid var(--db-components-color-background-tertiary);
	border-radius: var(--db-components-border-radius-lg);
	gap: 0.25rem;
	inline-size: fit-content;
	list-style: none;
	margin-block: 0;
	max-inline-size: 100%;
	overflow-x: auto;
	&:focus-visible {
		@include mixins.focus-state();
	}

	&--color-scheme {
		&-default {
			background-color: var(--db-components-color-background-primary);
		}
		&-alternate {
			background-color: var(--db-components-color-background-secondary);
		}
	}
}
</style>
