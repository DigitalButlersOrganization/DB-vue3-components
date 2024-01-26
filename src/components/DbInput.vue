<!-- eslint-disable no-param-reassign -->
<script setup>
import { computed } from 'vue';

const props = defineProps({
	tag: {
		type: String,
		required: false,
		default: 'span',
	},
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
	isOutline: {
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
		'input--outline': props.isOutline,
		'input--disabled': props.disabled,
	},
]);
</script>

<template>
	<component
		:is="tag"
		class="input"
		:class="classes"
	>
		<span class="input__icon">
			<slot name="icon" />
		</span>
		<span class="input__prepend-inner">
			<slot name="prepend-inner" />
		</span>
		<input
			:value="props.value"
			:disabled="props.disabled"
			:placeholder="props.placeholder"
			type="input"
			@input="(event) => handleChange({ value: event.target.value })"
		/>
	</component>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.input {
	@include mixins.text();
	@include mixins.text--md();
	color: var(--db-components-input-text-color);
	background-color: var(--db-components-color-background-primary);
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	row-gap: 0.38rem;
	column-gap: 0.5rem;
	inline-size: 100%;
	border: none;
	padding: 0;
	box-shadow: none;
	resize: none;

	input {
		border: none;
		padding: 0;
		flex: auto;
		min-inline-size: 10rem;
		background: none;
		&:focus-visible,
		&:focus {
			outline: none;
		}
	}

	&__icon {
		display: inline-flex;
		inline-size: 1.25rem;
	}

	&::placeholder {
		color: var(--db-components-input-placeholder-color);
	}

	&:focus-visible {
		outline: 2px solid var(--db-components-input-border-color);
	}

	:disabled,
	&--disabled {
		background: var(--db-components-input-disabled-background-color);
		color: var(--db-components-input-disabled-text-color);
	}

	&--outline {
		padding-block: 0.625rem;
		padding-inline: 0.88rem;
		border-radius: var(--db-components-border-radius-lg);
		border: 1px solid var(--db-components-input-border-color);
		box-shadow: var(--db-components-shadow-xs);
	}

	&--error {
		border-color: var(--db-components-input-error-text-color);

		&:focus-visible {
			outline-color: var(--db-components-input-error-text-color);
		}
	}
	&__icon:empty {
		display: none;
	}
}
</style>
