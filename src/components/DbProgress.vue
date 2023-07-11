<script setup>
import { useColors } from '../composables';

const props = defineProps({
	value: {
		type: Number,
		default: 0,
		validator: (value) => value >= 0 && value <= 1,
		required: false,
	},
	color: {
		type: String,
		default: '',
		required: false,
	},
});

const { colors } = props.color
	? useColors(() => props.color)
	: {
			colors: {
				background: 'var(--db-components-color-tertiary)',
				text: 'var(--db-components-color-text-primary)',
			},
	  };
</script>

<template>
	<div class="progress">
		<div class="progress__label">
			<slot name="label" />
		</div>
		<div class="progress__body">
			<progress
				class="progress__bar"
				:value="props.value"
				max="1"
			/>
			<div class="progress__text">
				<slot name="text" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.progress {
	&__bar {
		border: none;
		border-radius: 100vmax;
		accent-color: currentColor;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background-color: v-bind('colors.background');
		block-size: max(8px, 0.5rem);
		color: v-bind('colors.text');
		inline-size: 100%;

		&::-moz-progress-bar {
			border-radius: 100vmax;
			background-color: currentColor;
		}

		&::-webkit-progress-value {
			border-radius: 100vmax;
			background-color: currentColor;
		}

		&::-webkit-progress-bar {
			border-radius: 100vmax;
			background-color: v-bind('colors.background');
		}
	}
	&__label,
	&__text {
		&:empty {
			display: none;
		}
		@include mixins.text();
		@include mixins.text--md();
		@include mixins.font-weight(500);
	}

	&__body {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		inline-size: 100%;
		margin-block-start: 0.5rem;
	}
}
</style>
