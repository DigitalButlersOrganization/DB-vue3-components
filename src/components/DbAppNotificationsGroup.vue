<script setup>
import { computed, ref } from 'vue';
import InlineSvg from 'vue-inline-svg';

import { generateIconPath } from '../utilities';

import DbAppNotification from './DbAppNotification.vue';
import DbAvatar from './DbAvatar.vue';

const props = defineProps({
	items: {
		type: Array,
		default: () => [],
		validator: (value) => value.every((item) => item.id && item.heading && item.body && item.icon),
		required: true,
	},
	maxVisibleItems: {
		type: Number,
		default: 3,
		required: false,
	},
});

const hiddenItemsIds = ref([]);

// TODO: Looks like we can optimize this by using a set. Same fix may be required for DbWidgetNotificationsGroup.vue
const visibleItems = computed(() =>
	props.items.filter((item) => !hiddenItemsIds.value.includes(item.id)).slice(0, props.maxVisibleItems)
);
const emit = defineEmits(['click:dismiss', 'click:close', 'click:show-more']);

const handleNotificationCloseClick = (id) => {
	hiddenItemsIds.value.push(id);
	emit('click:close', id);
};
const handleNotificationDismissClick = (id) => {
	hiddenItemsIds.value.push(id);
	emit('click:dismiss', id);
};
const handleNotificationShowMoreClick = (id) => {
	emit('click:show-more', id);
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
			@click:dismiss="handleNotificationDismissClick(item.id)"
			@click:show-more="handleNotificationShowMoreClick(item.id)"
		>
			<template #avatar>
				<DbAvatar :color="item.color">
					<template #icon>
						<InlineSvg
							:src="generateIconPath(item.icon)"
							:title="item.icon"
						/>
					</template>
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
	--inset-inline: 1.5rem;

	position: fixed;
	z-index: var(--db-components-z-index-notifications);
	display: flex;
	flex-direction: column;
	padding: 0;
	gap: 0.25rem;
	max-inline-size: min(100%, 25rem);
	inset-block-end: 1.5rem;
	inset-inline-start: var(--inset-inline);
	inset-inline-end: var(--inset-inline);
}
</style>
