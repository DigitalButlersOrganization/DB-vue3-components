<script setup>
import { computed, ref } from 'vue';

import DbAppNotification from './DbAppNotification.vue';
import DbAvatar from './DbAvatar.vue';

const props = defineProps({
	items: {
		type: Array,
		default: () => [],
		validator(value) {
			return value.every((item) => item.id && item.heading && item.body);
		},
		required: true,
	},
	maxVisibleItems: {
		type: Number,
		default: 3,
		required: false,
	},
});

const hiddenItemsIds = ref([]);

const visibleItems = computed(() =>
	props.items.filter((item) => !hiddenItemsIds.value.includes(item.id)).slice(0, props.maxVisibleItems)
);

const handleNotificationCloseClick = (id) => {
	hiddenItemsIds.value.push(id);
};
</script>

<template>
	<TransitionGroup
		name="app-notifications"
		class="app-notifications-group"
		tag="ul"
	>
		<DbAppNotification
			v-for="item in visibleItems"
			:key="item.id"
			:is-detailed="item.isDetailed"
			:is-dismissible="item.isDismissible"
			@click:close="handleNotificationCloseClick(item.id)"
		>
			<template #avatar>
				<DbAvatar color="accent-1">
					<template #icon> ☻ </template>
				</DbAvatar>
			</template>
			<template #header>
				{{ item.heading }}
			</template>
			{{ item.body }}
		</DbAppNotification>
	</TransitionGroup>
</template>

<style scoped lang="scss">
.app-notifications-group {
	position: fixed;
	display: flex;
	flex-direction: column;
	padding: 0;
	gap: 0.25rem;
	inline-size: min(100%, 25rem);
	inset-block-end: 1.5rem;
	inset-inline-start: 1.5rem;
	:deep(.app-notification) {
		inline-size: 100%;
	}
}

.app-notifications-move,
.app-notifications-enter-active,
.app-notifications-leave-active {
	transition: var(--db-components-transition-base);
	transition-property: transform, opacity;
}

.app-notifications-enter-from,
.app-notifications-leave-to {
	z-index: -1;
	opacity: 0;
	transform: translateY(100px) scale(0.1);
}

.app-notifications-leave-active {
	position: absolute;
}
</style>
