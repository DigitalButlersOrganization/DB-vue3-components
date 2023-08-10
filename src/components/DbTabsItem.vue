<script setup>
import { inject, computed } from 'vue';

const props = defineProps({
	value: {
		type: String,
		required: true,
	},
});

const { tabId } = inject('tabId');

const isActive = computed(() => props.value === tabId.value);
</script>

<template>
	<li
		v-if="isActive"
		class="tabs-item"
	>
		<slot />
	</li>
</template>

<style scoped lang="scss">
.tabs-item {
	inline-size: 100%;
	transition: opacity var(--db-components-transition-base);
}
</style>
