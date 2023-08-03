<script setup>
import { ref, watch, computed } from 'vue';
import InlineSvg from 'vue-inline-svg';

import { NAVIGATION } from '../constants';
import { generateIconPath } from '../utilities';

import DbNavigationButton from './DbNavigationButton.vue';

const props = defineProps({
	modelValue: {
		type: String,
		required: true,
	},
	items: {
		type: Array,
		required: true,
		default: () => [],
		validator: (value) => value.every((item) => item.value && item.label),
	},
	name: {
		type: String,
		required: false,
		default: () => window.self.crypto.randomUUID(),
	},
	colorScheme: {
		type: String,
		required: false,
		default: NAVIGATION.COLOR_SCHEMES.get('default'),
		validator: (value) => NAVIGATION.COLOR_SCHEMES.has(value),
	},
});

const emit = defineEmits(['update:modelValue']);

const value = ref(props.modelValue);
watch(value, (newValue) => emit('update:modelValue', newValue));

const classes = computed(() => ({
	[`navigation--color-scheme-${props.colorScheme}`]: true,
}));
</script>

<template>
	<nav
		class="navigation"
		:class="classes"
	>
		<ul class="navigation__list">
			<li
				v-for="item in props.items"
				:key="item.value"
				class="navigation__item"
			>
				<DbNavigationButton
					v-model="value"
					:name="props.name"
					:value="item.value"
					:color-scheme="props.colorScheme"
				>
					<template #icon>
						<InlineSvg
							v-if="item.icon"
							:src="generateIconPath(item.icon)"
						/>
					</template>
					{{ item.label }}
					<template
						v-if="item.badge"
						#badge
					>
						{{ item.badge }}
					</template>
				</DbNavigationButton>
			</li>
		</ul>
	</nav>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.navigation {
	border: 1px solid var(--db-components-color-background-tertiary);
	border-radius: var(--db-components-border-radius-lg);
	max-inline-size: fit-content;
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

	&__list {
		display: flex;
		align-items: center;
		padding: 0.25rem;
		gap: 0.25rem;
		inline-size: fit-content;
		list-style: none;
		margin-block: 0;
	}
}
</style>
