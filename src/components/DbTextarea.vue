<!-- eslint-disable no-param-reassign -->
<script setup>
import { computed } from 'vue';

const props = defineProps({
	textareaValue: {
		type: String,
		default: '',
		required: false,
	},
	disabled: {
		type: Boolean,
		default: false,
		required: false,
	},
	autoResize: {
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

const emit = defineEmits(['update:textareaValue']);

const autoResizeTextarea = (textarea) => {
	textarea.style.height = 'auto';
	textarea.style.height = `${textarea.scrollHeight + 2}px`;
};

const handleChange = ({ value, textarea }) => {
	emit('update:textareaValue', value);
	if (props.autoResize) {
		autoResizeTextarea(textarea);
	}
};

const classes = computed(() => [
	{
		'textarea--error': props.isError,
	},
]);
</script>

<template>
	<textarea
		ref="textarea"
		:value="props.textareaValue"
		:disabled="props.disabled"
		:placeholder="props.placeholder"
		class="textarea"
		:class="classes"
		type="textarea"
		@input="(event) => handleChange({ value: event.target.value, textarea: event.target })"
	/>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.textarea {
	@include mixins.text();
	@include mixins.text--md();
	color: var(--db-components-input-text-color);
	inline-size: 100%;
	padding-block: 0.75rem;
	padding-inline: 0.88rem;
	min-height: 8.375rem;
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

	&--error {
		border: 1px solid var(--db-components-input-error-text-color);

		&:focus-visible {
			outline: 2px solid var(--db-components-input-error-text-color);
		}
	}
}
</style>
