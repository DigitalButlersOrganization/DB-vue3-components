<script setup>
const props = defineProps({
	tag: {
		type: String,
		required: false,
		default: 'span',
	},
});
</script>

<template>
	<component
		:is="props.tag"
		class="form-field"
	>
		<label class="form-field__label">
			<slot name="label" />
		</label>
		<slot name="input" />
		<span class="form-field__help-text">
			<slot name="help-text" />
		</span>
		<span class="form-field__error-text">
			<slot name="error-text" />
		</span>
	</component>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';
.form-field {
	display: flex;
	flex-direction: column;
	row-gap: 0.25rem;
	@include mixins.text();
	@include mixins.text--sm();
	color: var(--db-components-input-label-color);

	&__label,
	&__help-text,
	&__error-text {
		&:empty {
			display: none;
		}
	}

	&__label {
		@include mixins.text--md();
		margin-block-end: 0.13rem;
	}
	&__error-text {
		color: var(--db-components-input-error-text-color);
	}
}
</style>
