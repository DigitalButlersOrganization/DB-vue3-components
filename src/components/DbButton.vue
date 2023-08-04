<script setup>
import { computed } from 'vue';

import { useColors } from '../composables';
import { BUTTON } from '../constants';

import DbProgressCircular from './DbProgressCircular.vue';

const props = defineProps({
	tag: {
		type: Object,
		default: null,
		required: false,
	},
	size: {
		type: String,
		default: BUTTON.SIZES.get('medium'),
		validator: (value) => BUTTON.SIZES.has(value),
	},
	type: {
		type: String,
		default: BUTTON.TYPES.get('solid'),
		validator: (value) => BUTTON.TYPES.has(value),
	},
	color: {
		type: String,
		default: 'fallback',
		required: false,
	},
	to: {
		type: String,
		default: '',
		required: false,
	},
	isIcon: {
		type: Boolean,
		default: false,
		required: false,
	},
	isLoading: {
		type: Boolean,
		default: false,
		required: false,
	},
	isFullwidth: {
		type: Boolean,
		default: false,
		required: false,
	},
});

const tag = computed(() => (props.tag || props.to ? 'a' : 'button'));
const attrs = computed(() => {
	const isLink = props.to;
	const isCustomComponent = props.is;

	return {
		disabled: props.disabled,
		...(!isLink && { type: 'button' }),
		...(isLink && { [isCustomComponent ? 'to' : 'href']: props.to }),
	};
});
const classes = computed(() => [
	`button--size-${props.size}`,
	`button--type-${props.type}`,
	{
		'button--loading': props.isLoading,
		'button--fullwidth': props.isFullwidth,
		'button--icon': props.isIcon,
	},
]);

const { colors } = useColors(() => props.color);
</script>

<template>
	<component
		:is="tag"
		class="button"
		:class="classes"
		v-bind="attrs"
	>
		<div class="button__body">
			<span class="button__prepend">
				<slot name="prepend" />
			</span>
			<span class="button__text">
				<slot />
			</span>
			<span class="button__append">
				<slot name="append" />
			</span>
		</div>
		<Transition name="fade">
			<DbProgressCircular
				v-if="props.isLoading"
				class="button__loader"
				:is-loader="true"
			/>
		</Transition>
	</component>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.button {
	position: relative;
	display: inline-grid;
	border: none;
	border-radius: var(--db-components-border-radius-lg);
	padding-block: 0.5rem;
	place-items: center;
	text-decoration: none;
	transition: var(--db-components-transition-base);
	transition-property: background-color, box-shadow, color;

	&__body {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 1.25rem;
		gap: 0.5rem;
		transition: var(--db-components-transition-base);
		transition-property: opacity;
	}
	&__text {
		@include mixins.text();
		@include mixins.text--md();
		@include mixins.font-weight(700);
	}
	&__prepend,
	&__append {
		&:empty {
			display: none;
		}
	}
	&__loader {
		position: absolute;
	}

	&--size-small {
		min-block-size: 2rem;
		padding-inline: 0.75rem;
		.button__body {
			font-size: 1rem;
		}
		.button__text {
			@include mixins.text--sm();
			@include mixins.font-weight(600);
		}
	}
	&--size-medium {
		min-block-size: 2.5rem;
		padding-inline: 1rem;
	}

	&--type-solid {
		background-color: v-bind('colors.text');
		color: v-bind('colors.background');
		&:hover {
			background-color: v-bind('colors.textHover');
		}
		&:disabled {
			background-color: v-bind('colors.textDisabled');
		}
	}
	&--type-tonal {
		background-color: v-bind('colors.background');
		color: v-bind('colors.text');
		&:hover {
			background-color: v-bind('colors.backgroundHover');
		}
		&:disabled {
			background-color: v-bind('colors.background');
			color: v-bind('colors.textDisabled');
		}
	}
	&--type-outline {
		background-color: transparent;
		box-shadow: inset 0 0 0 1px v-bind('colors.outline');
		color: v-bind('colors.text');
		&:hover {
			background-color: v-bind('colors.background');
		}
		&:disabled {
			background-color: transparent;
			color: v-bind('colors.textDisabled');
		}
	}
	&--type-text {
		background-color: transparent;
		color: v-bind('colors.text');
		padding-block: 0 !important;
		padding-inline: 0 !important;
		&:not(.button--icon) {
			min-block-size: unset;
			outline-offset: 0.25rem;
		}
		&:hover {
			color: v-bind('colors.textHover');
		}
		&:disabled {
			color: v-bind('colors.textDisabled');
		}
	}

	&--fullwidth {
		inline-size: 100%;
	}
	&--loading {
		.button__body {
			opacity: 0;
		}
	}
	&--icon {
		aspect-ratio: 1/1;
		padding-block: 0;
		padding-inline: 0;
		.button__text {
			block-size: 1em;
			font-size: inherit;
			inline-size: 1em;
			line-height: 1em;
		}
		&:deep(svg, img) {
			block-size: 1em;
			inline-size: 1em;
			object-fit: contain;
		}
	}

	&:not(:disabled, .button--loading) {
		cursor: pointer;
	}

	&:focus-visible {
		@include mixins.focus-state();
		outline-color: v-bind('colors.outline');
	}
}
</style>
