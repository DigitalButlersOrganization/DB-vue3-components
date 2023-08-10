<script setup>
import { computed, inject } from 'vue';

import DbNavigationButton from './DbNavigationButton.vue';

const props = defineProps({
	value: {
		type: String,
		required: false,
		default: '',
	},
	id: {
		type: String,
		default: () => window.self.crypto.randomUUID(),
		required: false,
	},
	name: {
		type: String,
		required: true,
	},
});

const { tabId, updateTabId } = inject('tabId');

const handleClick = () => {
	updateTabId(props.value);
};

const isCurrent = computed(() => props.value === tabId.value);
</script>

<template>
	<DbNavigationButton
		class="tabs-button"
		:is-current="isCurrent"
		@click="handleClick"
	>
		<template #icon>
			<slot name="icon" />
		</template>
		<slot />
		<template #badge>
			<slot name="badge" />
		</template>
	</DbNavigationButton>
</template>

<style scoped lang="scss">
.tabs-button-radio {
	display: none;
}
</style>
