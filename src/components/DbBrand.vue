<script setup>
import InlineSvg from 'vue-inline-svg';

import { generateIconPath } from '../utilities';

const props = defineProps({
	tag: {
		type: String,
		required: false,
		default: 'a',
	},
	href: {
		type: String,
		required: false,
		default: '/',
	},
	src: {
		type: String,
		required: false,
		default: 'solid/logo-360',
	},
	alt: {
		type: String,
		required: false,
		default: '360',
	},
	isImg: {
		type: Boolean,
		required: false,
		default: false,
	},
});
</script>

<template>
	<component
		:is="props.tag"
		:href="props.href"
	>
		<img
			v-if="props.isImg"
			:src="props.src"
			:alt="props.alt"
			class="avatar__image"
		/>
		<InlineSvg
			v-else
			:src="generateIconPath(props.src)"
			aria-label="360"
		/>
	</component>
</template>

<style scoped lang="scss"></style>
