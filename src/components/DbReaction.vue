<script setup>
import { computed, inject, ref, onMounted } from 'vue';
import { useTippy } from 'vue-tippy';

import 'tippy.js/animations/shift-away.css';

import { useColors } from '../composables';
import { REACTION } from '../constants';

const props = defineProps({
	color: {
		type: String,
		default: 'accent-1',
		required: false,
	},
	size: {
		type: String,
		default: REACTION.SIZES[0],
		validator: (value) => REACTION.SIZES.includes(value),
	},
	value: {
		type: String,
		default: '',
		required: false,
	},
	label: {
		type: String,
		required: false,
		default: '',
	},
	disabled: {
		type: Boolean,
		default: false,
		required: false,
	},
});

const DEFAULT_TIPPY_OPTIONS = {
	allowHTML: true,
	animation: 'shift-away',
	arrow: `<svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M 16 0 L 8.7 7.8 C 8.3 8.2 7.7 8.2 7.3 7.8 L 0 0 Z" fill="currentColor"/></g></svg>`,
};

const target = ref();
const { colors } = useColors(() => props.color);

const { name, updateModelValue } = inject('parentValue');

const contentWrapper = ref();

const classes = computed(() => [`reaction--size-${props.size}`, { 'reaction--disabled': props.disabled }]);

const isSmall = computed(() => props.size === REACTION.SIZES[0]);

onMounted(() => {
	if (!isSmall.value && props.label) return;

	useTippy(target, {
		content: () => contentWrapper?.value?.innerHTML,
		...DEFAULT_TIPPY_OPTIONS,
	});
});

const isDisabled = props.disabled || !isSmall.value;

const updateValue = (event) => {
	updateModelValue(event.target.value);
};
</script>

<template>
	<label
		ref="target"
		class="reaction"
		:class="classes"
	>
		<input
			:name="name"
			type="radio"
			:value="props.value"
			class="reaction__input"
			:disabled="isDisabled"
			@input="updateValue"
		/>
		<span class="reaction__inner">
			<span class="slot-wrapper reaction__emoji">
				<slot name="emoji" />
			</span>
			<span
				v-if="!isSmall"
				class="slot-wrapper reaction__label"
			>
				{{ props.label }}
			</span>
		</span>
		<div
			ref="contentWrapper"
			class="reaction__tooltip"
		>
			<div class="reaction__tooltip-content">
				{{ props.label }}
			</div>
		</div>
	</label>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.reaction {
	@include mixins.text--md();
	flex: 1;
	position: relative;

	&__input {
		display: none;
	}

	&__inner {
		@include mixins.text();
		@include mixins.font-weight(500);
		background-color: v-bind('colors.background');
		color: v-bind('colors.text');
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: var(--db-components-border-radius-lg);
		gap: 0.75rem;
		block-size: 100%;
	}

	&--disabled {
		.reaction__inner {
			cursor: default;
		}
	}

	&__emoji {
		display: inline-flex;
		font-size: 1.25rem;
	}

	&--size-small {
		max-inline-size: 6.56rem;
		min-inline-size: 3.125rem;
		.reaction__input {
			& + .reaction__inner {
				padding-block: 0.875rem;
				padding-inline: 0.875rem;
				cursor: pointer;
			}

			&:checked + .reaction__inner {
				box-shadow: inset 0px 0px 0px 1px v-bind('colors.outline');
			}
		}

		.reaction__label {
			display: none;
		}
	}

	&__tooltip {
		display: none;
		&-content {
			@include mixins.text();
			@include mixins.text--sm();
			@include mixins.font-weight(500);
			border-radius: var(--db-components-border-radius-md);
			background-color: var(--db-components-color-background-primary);
			box-shadow: var(--db-components-shadow-lg);
			color: var(--db-components-color-text-primary);
			padding-block: 0.5rem;
			padding-inline: 0.75rem;
		}
	}

	&--size-medium {
		max-inline-size: 13.125rem;
		min-inline-size: 6.5625rem;

		.reaction__input {
			& + .reaction__inner {
				padding-block: 1rem;
				padding-inline: 1rem;
				box-shadow: inset 0px 0px 0px 1px v-bind('colors.outline');
				align-items: start;
				justify-content: start;
				gap: 0.75rem;
			}
		}
	}
}

.slot-wrapper:empty {
	display: none;
}
</style>
<style lang="scss">
.tippy-svg-arrow {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	color: var(--db-components-color-background-primary);
}
</style>
