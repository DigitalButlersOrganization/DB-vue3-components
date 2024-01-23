<!-- eslint-disable no-param-reassign -->
<script setup>
import { computed } from 'vue';

const props = defineProps({
	value: {
		type: String,
		default: '',
		required: false,
	},
	disabled: {
		type: Boolean,
		default: false,
		required: false,
	},
	placeholder: {
		type: String,
		default: '',
		required: false,
	},
	isError: {
		type: Boolean,
		default: false,
		required: false,
	},
});

const emit = defineEmits(['update:value']);

const handleChange = ({ value }) => {
	emit('update:value', value);
};

const classes = computed(() => [
	{
		'input--error': props.isError,
	},
]);
</script>

<template>
	<input
		:value="props.value"
		:disabled="props.disabled"
		:placeholder="props.placeholder"
		class="input"
		:class="classes"
		type="input"
		@input="(event) => handleChange({ value: event.target.value })"
	/>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.input {
	@include mixins.text();
	@include mixins.text--md();
	color: var(--db-components-input-text-color);
	inline-size: 100%;
	padding-block: 0.625rem;
	padding-inline: 0.88rem;
	border-radius: var(--db-components-border-radius-lg);
	border: 1px solid var(--db-components-input-border-color);
	box-shadow: var(--db-components-shadow-xs);
	resize: none;

	&::placeholder {
		color: var(--db-components-input-placeholder-color);
	}

	&:focus-visible {
		outline: 2px solid var(--db-components-input-border-color);
	}

	&:disabled {
		background: var(--db-components-input-disabled-background-color);
		color: var(--db-components-input-disabled-text-color);
	}

	&--error {
		border: 1px solid var(--db-components-input-error-text-color);

		&:focus-visible {
			outline: 2px solid var(--db-components-input-error-text-color);
		}
	}
}
</style>
