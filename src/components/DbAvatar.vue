<script setup>
import { computed, useSlots } from 'vue';

import { useColors } from '../composables';

import DbBadgeCounter from './DbBadgeCounter.vue';
import DbProgressCircular from './DbProgressCircular.vue';

const ICON_SIZE_COEFFICIENT = 0.45;

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
const iconFontSize = computed(() => `calc(${props.size} * ${ICON_SIZE_COEFFICIENT})`);
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
			<DbProgressCircular
				v-if="props.progress"
				class="avatar__progress"
				:value="props.progress"
				:size="props.size"
			/>
		</div>
		<div class="avatar__badge-wrapper">
			<DbBadgeCounter
				v-if="hasBadgeSlot"
				:color="props.color"
				:is-inverted="true"
			>
				<slot name="badge" />
			</DbBadgeCounter>
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
		border-radius: var(--db-components-border-radius-ellipse);
		background-color: v-bind('colors.background');
		block-size: 100%;
		font-size: v-bind(iconFontSize);
		inline-size: 100%;
		place-items: center;
		&:deep(svg, img) {
			block-size: 1em;
			inline-size: 1em;
		}
	}

	&__image {
		block-size: 100%;
		font-size: 1rem;
		inline-size: 100%;
		object-fit: cover;
	}

	&__badge-wrapper {
		&:empty {
			display: none;
		}
		position: absolute;
		inset-block-end: 0;
		inset-inline-end: 0;
	}

	&:deep(.progress-circular) {
		position: absolute;
	}
}
</style>
