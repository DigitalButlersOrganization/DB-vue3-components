<script setup>
import { provide } from 'vue';

const props = defineProps({
	modelValue: {
		type: String,
		default: null,
		requierd: false,
	},
	label: {
		type: String,
		default: '',
		requierd: false,
	},
});

const emit = defineEmits(['update:modelValue']);

const updateModelValue = (value) => {
	const updatedValue = props.modelValue === value ? null : value;
	emit('update:modelValue', updatedValue);
};

provide('parentValue', { name: window.self.crypto.randomUUID(), updateModelValue });
</script>

<template>
	<div class="reactions">
		<div
			v-if="props.label"
			class="reactions__label"
		>
			{{ props.label }}
		</div>
		<div class="slot-wrapper reactions__group">
			<slot />
		</div>
	</div>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.reactions {
	display: flex;
	flex-direction: column;
	row-gap: 0.75rem;

	&__label {
		@include mixins.text();
		@include mixins.text--md();
		color: var(--db-components-color-text-secondary);
	}

	&__group {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
	}
}

.slot-wrapper:empty {
	display: none;
}
</style>
