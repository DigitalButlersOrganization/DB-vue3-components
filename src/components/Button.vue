<script setup>
// 	is/to,
// 	size, color, type="solid|outline|ghost",
// 	isFullwidth,
// 	isIcon?,
// 	isLoading,
// 	disabled?,
// 	ariaLabel?,
// 	append slot, prepend slot

import { SIZES } from '../constants';

defineProps({
	to: String,
	size: {
		required: false,
		validator(value) {
			return SIZES.FULL.includes(value);
		},
		default: SIZES.FULL[2],
	},
});
</script>

<template>
	<button
		type="button"
		:to="to"
		:data-size="size"
	>
		{{ $t('helloWorld') }}
	</button>
</template>

<style lang="scss" scoped>
.theme--dark {
	button {
		color: green;
	}
}

button {
	color: blueviolet;

	span {
		color: red;
	}
}
</style>
