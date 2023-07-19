<script setup>
import { useCheckboxModel } from '../composables';

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
	<div class="switch">
		<input
			:id="props.id"
			v-model="isChecked"
			:disabled="props.disabled"
			class="switch__input"
			:value="props.value"
			type="checkbox"
			@change="handleChange"
		/>
		<label
			class="switch__label"
			:for="props.id"
		/>
	</div>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

$input-to-label-selector: '+ .switch__label';
$switch-padding: 0.125em;
$switch-inline-size: 2.25em;

.switch {
	&__label {
		position: relative;
		display: inline-flex;
		align-items: center;
		border-radius: var(--db-components-border-radius-pill);
		background-color: var(--db-components-switch-color-background-default);
		block-size: 1.25em;
		font-size: 1rem;
		inline-size: 2.25em;
		transition: var(--db-components-transition-base);
		transition-property: background-color;
		&::before {
			position: absolute;
			border-radius: var(--db-components-border-radius-ellipse);
			background-color: var(--db-components-switch-color-icon-default);
			block-size: 1em;
			box-shadow: var(--db-components-shadow-xs);
			content: '';
			inline-size: 1em;
			transition: var(--db-components-transition-base);
			transition-property: translate, background-color;
			translate: $switch-padding 0;
		}

		&:hover {
			background-color: var(--db-components-switch-color-background-hover);
			&::before {
				background-color: var(--db-components-switch-color-icon-hover);
			}
		}
	}
	&__input {
		@include mixins.visually-hidden();
		&:focus-visible {
			#{$input-to-label-selector} {
				@include mixins.focus-state();
			}
		}
		&:disabled {
			#{$input-to-label-selector} {
				background-color: var(--db-components-switch-color-background-disabled);
				&::before {
					background-color: var(--db-components-switch-color-icon-disabled);
				}
			}
		}
		&:checked {
			#{$input-to-label-selector} {
				background-color: var(--db-components-switch-color-background-default-cheched);
				&::before {
					background-color: var(--db-components-switch-color-icon-default-cheched);
					translate: calc(#{$switch-inline-size} - 1em - #{$switch-padding}) 0;
				}
			}
			&:disabled {
				#{$input-to-label-selector} {
					background-color: var(--db-components-switch-color-background-disabled-cheched);
					&::before {
						background-color: var(--db-components-switch-color-icon-disabled-cheched);
					}
				}
			}
		}
	}
}
</style>
