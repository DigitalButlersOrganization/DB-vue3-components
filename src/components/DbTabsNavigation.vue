<script setup>
import InlineSvg from 'vue-inline-svg';

import { generateIconPath } from '../utilities';

import DbNavigation from './DbNavigation.vue';
import DbTabsNavigationButton from './DbTabsNavigationButton.vue';

const props = defineProps({
	items: {
		type: Array,
		required: true,
		validator: (value) => value.every((item) => item.value && item.label),
	},
	name: {
		type: String,
		required: true,
	},
	colorScheme: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<DbNavigation>
		<DbTabsNavigationButton
			v-for="item in props.items"
			:key="item.value"
			:name="props.name"
			:value="item.value"
		>
			<template #icon>
				<InlineSvg
					v-if="item.icon"
					:src="generateIconPath(item.icon)"
				/>
			</template>
			{{ item.label }}
			<template
				v-if="item.badge"
				#badge
			>
				{{ item.badge }}
			</template>
		</DbTabsNavigationButton>
	</DbNavigation>
</template>
