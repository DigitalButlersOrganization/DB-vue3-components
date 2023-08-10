<script setup>
import { provide, ref, watch, watchEffect } from 'vue';

import { NAVIGATION } from '../constants';

import DbTabsBody from './DbTabsBody.vue';
import DbTabsNavigation from './DbTabsNavigation.vue';

const props = defineProps({
	modelValue: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: false,
		default: () => window.self.crypto.randomUUID(),
	},
	items: {
		type: Array,
		required: true,
		validator: (value) => value.every((item) => item.value && item.label),
	},
	colorScheme: {
		type: String,
		required: false,
		default: NAVIGATION.COLOR_SCHEMES.get('default'),
		validator: (value) => NAVIGATION.COLOR_SCHEMES.has(value),
	},
});

const emit = defineEmits(['update:modelValue']);

const tabId = ref(props.modelValue);
const updateTabId = (newValue) => {
	tabId.value = newValue;
	emit('update:modelValue', newValue);
};

watchEffect(() => {
	tabId.value = props.modelValue;
});
watch(tabId, (newValue) => emit('update:modelValue', newValue));

provide('tabId', { tabId, updateTabId });
</script>

<template>
	<div class="tabs">
		<DbTabsNavigation
			:items="props.items"
			:color-scheme="props.colorScheme"
			:name="props.name"
		/>
		<DbTabsBody>
			<slot />
		</DbTabsBody>
	</div>
</template>

<style scoped lang="scss"></style>
