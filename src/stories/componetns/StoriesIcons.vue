<script setup>
import InlineSvg from 'vue-inline-svg';

import DbContainer from '../../components/DbContainer.vue';
import DbDivider from '../../components/DbDivider.vue';
import DbSection from '../../components/DbSection.vue';

const iconsGroups = new Map([
	[
		'Outline',
		[
			'alert-01',
			'arrow-narrow-down',
			'arrow-narrow-left',
			'arrow-narrow-right',
			'arrow-narrow-up',
			'attachment-01',
			'award-03',
			'brush-01',
			'check',
			'chevron-down',
			'chevron-left',
			'chevron-right',
			'chevron-up',
			'code-snippet-02',
			'command',
			'data',
			'database-03',
			'dots-vertical',
			'eye',
			'eye-off',
			'face-wink',
			'filter-funnel-01',
			'glasses-02',
			'link-01',
			'link-external-01',
			'mail-02',
			'message-chat-circle',
			'plus',
			'puzzle-piece',
			'refresh-cw-02',
			'search-md',
			'switch-vertical-01',
			'switch-vertical-02',
			'user-01',
			'x-circle',
			'x-close',
			'vartical-divider',
			'help-01',
			'flag-01',
			'x-close-outline',
		],
	],
	[
		'Solid',
		[
			'alert-circle',
			'award-03',
			'award-05',
			'bar-chart-square-01',
			'briefcase-02',
			'calendar-check-01',
			'camera-01',
			'check-circle',
			'check-circle-broken',
			'clipboard',
			'clock',
			'coins-stacked-04',
			'cursor-03',
			'droplets-02',
			'face-content',
			'face-frown',
			'face-happy',
			'face-neutral',
			'file-check-03',
			'filter-funnel-01',
			'glasses-02',
			'grid-01',
			'heart',
			'heart-clock',
			'heart-hand',
			'hearts',
			'help-circle',
			'home-line',
			'info-circle',
			'lightbulb-03',
			'lightning-01',
			'mail-02',
			'marker-pin-01',
			'message-chat-square',
			'message-text-square-01',
			'monitor-04',
			'paint-pour',
			'phone-call-01',
			'pin-02',
			'play-circle',
			'plus-circle',
			'rocket-01',
			'send-01',
			'settings-01',
			'settings-03',
			'thumbs-down',
			'thumbs-up',
			'trash-03',
			'triangle',
			'trophy-01',
			'user-01',
			'user-plus-02',
			'users-01',
			'microphone-01',
		],
	],
]);

const getIcon = (type, name) => `icons/${type.toLowerCase()}/${name}.svg`;
</script>

<template>
	<DbSection
		v-for="type in iconsGroups.keys()"
		:key="type"
		class="icon-group"
	>
		<DbContainer>
			<h2>{{ type }}</h2>
			<ul class="icons-cards">
				<li
					v-for="name in iconsGroups.get(type)"
					:key="`${type}-${name}`"
					class="icon-card"
				>
					<InlineSvg :src="getIcon(type, name)" />
					<h3 class="color-card__name heading heading--sm">
						{{ name }}
					</h3>
					<DbDivider />
				</li>
			</ul>
		</DbContainer>
	</DbSection>
</template>

<style scoped lang="scss">
ul {
	list-style: none;
	padding-inline-start: 0;
}
.icons-cards {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
}
.icon-card {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	padding-block-start: 1rem;
}
</style>
