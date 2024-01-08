<script setup>
import InlineSvg from 'vue-inline-svg';

import { generateIconPath } from '../utilities';
</script>

<template>
	<span class="navigation-divider">
		<InlineSvg
			height="16"
			:src="generateIconPath('outline/vartical-divider')"
		/>
	</span>
</template>

<style scoped lang="scss">
.navigation-divider {
	display: inline-flex;
	padding-inline: 0.5rem;
	color: var(--db-components-vertical-divider-color);
}
</style>
