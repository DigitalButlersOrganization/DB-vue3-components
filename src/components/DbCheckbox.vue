<script setup>
import { useSlots, computed } from 'vue';
import InlineSvg from 'vue-inline-svg';

import { useCheckboxModel } from '../composables';

const slots = useSlots();

const isBodyVisible = slots.default !== undefined;
const classes = computed(() => [isBodyVisible && 'checkbox--with-body']);

const props = defineProps({
	modelValue: {
		type: [Boolean, Array],
		default: false,
		required: false,
	},
	value: {
		type: String,
		default: '',
		required: false,
	},
	id: {
		type: String,
		default: () => window.self.crypto.randomUUID(),
		required: false,
	},
	disabled: {
		type: Boolean,
		default: false,
		required: false,
	},
});

const emit = defineEmits(['update:modelValue']);

const { isChecked, handleChange } = useCheckboxModel(props, emit);
</script>

<template>
	<div
		class="checkbox"
		:class="classes"
	>
		<input
			:id="props.id"
			v-model="isChecked"
			:disabled="props.disabled"
			class="checkbox__input"
			:value="props.value"
			type="checkbox"
			@change="handleChange"
		/>
		<label
			class="checkbox__label"
			:for="props.id"
		>
			<span class="checkbox__box">
				<InlineSvg
					class="checkbox__box-icon"
					src="/icons/outline/check.svg"
				/>
			</span>
			<span
				v-if="isBodyVisible"
				class="checkbox__label-body"
			>
				<span class="checkbox__label-text">
					<slot />
				</span>
				<span class="checkbox__label-description">
					<slot name="description" />
				</span>
			</span>
		</label>
	</div>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

@mixin active-box() {
	background-color: var(--db-components-checkbox-color-background-hover);
	box-shadow: 0 0 0 1px inset var(--db-components-checkbox-color-outline-hover);
	color: var(--db-components-checkbox-color-icon-hover);
}

.checkbox {
	$input-to-box-selector: '& + .checkbox__label .checkbox__box';
	inline-size: fit-content;

	&__box {
		display: grid;
		border-radius: 0.25em;
		background-color: var(--db-components-checkbox-color-background-default);
		block-size: 1rem;
		box-shadow: 0 0 0 1px inset var(--db-components-checkbox-color-outline-default);
		color: var(--db-components-checkbox-color-icon-default);
		inline-size: 1rem;
		place-items: center;
		transition: var(--db-components-transition-base);
		transition-property: background-color, box-shadow, color;
		&:hover {
			@include active-box();
		}

		&-icon {
			max-block-size: 0.75em;
			max-inline-size: 0.75em;
			:deep(path) {
				stroke-width: var(--db-components-icon-sm-stroke-width);
			}
		}
	}
	&__input {
		@include mixins.visually-hidden();
		&:focus-visible {
			#{$input-to-box-selector} {
				@include mixins.focus-state();
			}
		}
		&:disabled {
			#{$input-to-box-selector} {
				background-color: var(--db-components-checkbox-color-background-disabled);
				box-shadow: 0 0 0 1px inset var(--db-components-checkbox-color-outline-disabled);
				color: var(--db-components-checkbox-color-icon-disabled);
			}
		}
		&:checked {
			#{$input-to-box-selector} {
				box-shadow: 0 0 0 1px inset var(--db-components-checkbox-color-outline-default-checked);
				color: var(--db-components-checkbox-color-icon-default-checked);
			}
			&:disabled {
				#{$input-to-box-selector} {
					box-shadow: 0 0 0 1px inset var(--db-components-checkbox-color-outline-disabled-checked);
					color: var(--db-components-checkbox-color-icon-disabled-checked);
				}
			}
		}
	}

	&__label {
		display: flex;
		cursor: pointer;
		gap: 0.5rem;
		&-body {
			display: flex;
			flex-direction: column;
		}
		&-text,
		&-description {
			@include mixins.text();
			@include mixins.text--md();
		}
		&-text {
			@include mixins.font-weight(600);
			color: var(--db-components-color-text-primary);
		}
		&-description {
			color: var(--db-components-color-text-secondary);
		}
	}

	&--with-body {
		.checkbox__box {
			margin-block-start: 0.125rem;
		}
	}
}
</style>
