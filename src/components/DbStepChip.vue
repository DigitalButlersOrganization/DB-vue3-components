<script setup>
import { computed } from 'vue';

import DbChip from './DbChip.vue';

const props = defineProps({
	avatarSrc: {
		type: String,
		default: '',
		required: false,
	},
	isCurrent: {
		type: Boolean,
		default: false,
		required: false,
	},
	isPassed: {
		type: Boolean,
		default: false,
		required: false,
	},
});

const type = computed(() => (props.isPassed ? 'solid' : 'outline'));
const isClosable = computed(() => props.isPassed);
const isNumberVisible = computed(() => !props.avatarSrc);

const classes = computed(() => [props.isCurrent && 'step-chip--current', props.isPassed && 'step-chip--passed']);
</script>

<template>
	<DbChip
		:type="type"
		:is-closable="isClosable"
		:avatar-src="props.avatarSrc"
		:class="classes"
		class="step-chip"
	>
		<template
			v-if="isNumberVisible"
			#prepend="prependSlotProps"
		>
			<span
				class="step-chip__number"
				:style="{ width: prependSlotProps.avatarSize }"
			>
				<slot name="number" />
			</span>
		</template>
		<slot />
	</DbChip>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.step-chip {
	&__number {
		@include mixins.text();
		@include mixins.text--xs();
		@include mixins.font-weight(700);

		display: grid;
		border-radius: 50%;
		aspect-ratio: 1/1;
		background-color: var(--db-components-color-background-primary);
		box-shadow: 0 0 0 1px var(--db-components-color-tertiary);
		color: var(--db-components-color-text-secondary);
		place-items: center;
		transition: var(--db-components-transition-base);
		transition-property: box-shadow, color, background-color;
	}

	&--current {
		.step-chip__number {
			background-color: var(--db-components-color-primary);
			box-shadow: 0 0 0 1px var(--db-components-color-primary);
			color: var(--db-components-color-background-primary);
		}
	}
}
</style>
