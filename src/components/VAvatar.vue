<script setup>
import { computed, defineProps, useSlots } from 'vue';

import { useColors } from '../composables';

import VBadgeCounter from './VBadgeCounter.vue';

const SVG_SIZE = 100;
const SVG_CIRCLE_PERIMETER = Math.PI * SVG_SIZE;

const props = defineProps({
	size: {
		type: String,
		default: '2.75rem',
		required: false,
	},
	color: {
		type: String,
		default: '',
		required: false,
	},
	src: {
		type: String,
		default: null,
		required: false,
	},
	alt: {
		type: String,
		default: '',
		required: false,
	},
	progress: {
		type: Number,
		default: 0,
		required: false,
		validator(value) {
			return value >= 0 && value <= 1;
		},
	},
});

const { colors } = useColors(() => props.color);
const slots = useSlots();

const hasBadgeSlot = computed(() => Boolean(slots.badge));
const progressDasharray = computed(() => `${SVG_CIRCLE_PERIMETER * props.progress} ${SVG_CIRCLE_PERIMETER}`);
</script>

<template>
	<div class="avatar">
		<div class="avatar__body">
			<img
				v-if="props.src"
				:src="props.src"
				:alt="props.alt"
				class="avatar__image"
			/>
			<slot
				v-else
				name="icon"
			/>
			<svg
				v-if="props.progress"
				class="avatar__progress"
				viewBox="-5 -5 110 110"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx="50"
					cy="50"
					r="50"
				/>
			</svg>
		</div>
		<div class="avatar__badge-wrapper">
			<VBadgeCounter
				v-if="hasBadgeSlot"
				:color="props.color"
				:is-inverted="true"
			>
				<slot name="badge" />
			</VBadgeCounter>
		</div>
	</div>
</template>

<style scoped lang="scss">
.avatar {
	position: relative;
	aspect-ratio: 1 / 1;
	color: v-bind('colors.text');
	inline-size: v-bind('props.size');

	&__body {
		display: grid;
		overflow: hidden;
		border-radius: 50%;
		background-color: v-bind('colors.background');
		block-size: 100%;
		inline-size: 100%;
		place-items: center;
	}

	&__image {
		block-size: 100%;
		inline-size: 100%;
		object-fit: cover;
	}

	&__progress {
		position: absolute;
		aspect-ratio: 1 / 1;
		fill: none;
		inline-size: 100%;
		inset: 0;
		stroke: currentColor;
		stroke-dasharray: v-bind(progressDasharray);
		stroke-linecap: round;
		stroke-width: 10;
		transform: rotate(-90deg);
		transition: stroke-dasharray 0.6s ease;
	}

	&__badge-wrapper {
		&:empty {
			display: none;
		}
		position: absolute;
		inset-block-end: 0;
		inset-inline-end: 0;
	}
}
</style>
