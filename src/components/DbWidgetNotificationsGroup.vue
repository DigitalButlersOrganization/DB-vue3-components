<script setup>
import { computed, ref } from 'vue';
import InlineSvg from 'vue-inline-svg';

import { generateIconPath } from '../utilities';

import DbAvatar from './DbAvatar.vue';
import DbWidgetNotification from './DbWidgetNotification.vue';

const props = defineProps({
	items: {
		type: Array,
		default: () => [],
		validator: (value) => value.every((item) => item.id && item.heading && item.icon),
		required: true,
	},
});

const hiddenItemsIds = ref([]);

// TODO: Looks like we can optimize this by using a set. Same fix may be required for DbAppNotificationsGroup.vue
const visibleItems = computed(() => props.items.filter((item) => !hiddenItemsIds.value.includes(item.id)));
const isPlaceholderVisible = computed(() => !visibleItems.value.length);

const emit = defineEmits(['click:close', 'click:show-more']);

const handleNotificationCloseClick = (id) => {
	hiddenItemsIds.value.push(id);
	emit('click:close', id);
};
const handleNotificationShowMoreClick = (id) => {
	emit('click:show-more', id);
};
</script>

<template>
	<div class="widget-notifications-group">
		<Transition
			name="fade"
			mode="out-in"
		>
			<p
				v-if="isPlaceholderVisible"
				class="widget-notifications-group__placeholder"
			>
				<slot name="placeholder">
					{{ $t('placeholders.widgetNotifications') }}
				</slot>
			</p>

			<TransitionGroup
				v-else
				name="widget-notifications"
				class="widget-notifications"
				tag="ul"
			>
				<DbWidgetNotification
					v-for="(item, index) in visibleItems"
					:key="item.id"
					:is-detailed="item.isDetailed"
					:is-closable="item.isClosable"
					:style="{ 'z-index': visibleItems.length - index }"
					@click:close="handleNotificationCloseClick(item.id)"
					@click:show-more="handleNotificationShowMoreClick(item.id)"
				>
					<template #avatar>
						<DbAvatar
							:color="item.color"
							:progress="item.progress"
						>
							<template #icon>
								<InlineSvg
									:src="generateIconPath(item.icon)"
									:title="item.icon"
								/>
							</template>
							<template
								v-if="item.badge"
								#badge
							>
								{{ item.badge }}
							</template>
						</DbAvatar>
					</template>
					<template #header>
						{{ item.heading }}
					</template>
					{{ item.body }}
				</DbWidgetNotification>
			</TransitionGroup>
		</Transition>
	</div>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.widget-notifications-group {
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 0;
	gap: 0.25rem;
	&__placeholder {
		@include mixins.text();
		@include mixins.text--md();
		color: var(--db-components-color-text-secondary);
		margin-block: 0;
		text-align: center;
	}
}

.widget-notifications-move,
.widget-notifications-enter-active,
.widget-notifications-leave-active {
	transition: var(--db-components-transition-base);
	transition-property: transform, opacity;
}

.widget-notifications-enter-from,
.widget-notifications-leave-to {
	z-index: -1 !important;
	opacity: 0;
	transform: translateY(-100px) scale(0.1);
}

.widget-notifications-leave-active {
	position: absolute;
}
</style>
