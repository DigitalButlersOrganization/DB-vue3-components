import InlineSvg from 'vue-inline-svg';

import DbAccordion from '../components/DbAccordion.vue';
import DbAccordionItem from '../components/DbAccordionItem.vue';
import DbBadgeCounter from '../components/DbBadgeCounter.vue';
import { generateIconPath } from '../utilities';

export default {
	title: 'Components/DbAccordion',
	component: DbAccordion,
	tags: ['autodocs'],
	render: (args) => ({
		components: { DbAccordion, InlineSvg, DbBadgeCounter, DbAccordionItem },
		setup() {
			return { args, generateIconPath };
		},
		template: `
			<DbAccordion v-bind="args">
				<template #default="{ handleClick, checkOpenId }">
					<DbAccordionItem v-for="item in args.items" v-bind="item" @click:handleClick="handleClick" :open="checkOpenId(item.id)">
						<template v-slot:header-prepend v-if="item.icon">
							<InlineSvg :src="item.icon" />
						</template>
						<template #header-details>
							{{ item.headetDetails }}
						</template>
						<template v-slot:header-append v-if="item.badge">
							<DbBadgeCounter v-bind="item.badge" :color="item.color">
								<template v-slot:default v-if="item.badge.default">
									<span v-html="item.badge.default"></span>
								</template>
							</DbBadgeCounter>
						</template>
						<template #details-description>
							{{ item.detailsDescription }}
						</template>
						<template #details-skills>
							Details skills
						</template>
						<template #details-actions>
							Details actions
						</template>
					</DbAccordionItem>
				</template>
			</DbAccordion>
		`,
	}),
};

export const Default = {
	args: {
		items: [
			{
				id: 1,
				icon: generateIconPath('solid/heart-clock'),
				headetDetails: 'Creative work',
				color: '',
				detailsDescription:
					'Use when the designer impressed you with his layout, front animations, and back with unusual code. Or when the salesman found a creative way to close the deal, or when the manager beautifully shoved in something that couldn’t be pushed in and everyone was happy. Encourage any manifestation of creativity and ask to evaluate your achievements. Get creative!',
				badge: {
					default: +1,
					isInverted: true,
				},
			},
			{ id: 2, icon: generateIconPath('solid/heart-clock'), headetDetails: 'Tact' },
		],
	},
};

export const Accent = {
	args: {
		items: [
			{
				id: 1,
				icon: generateIconPath('solid/heart-clock'),
				headetDetails: 'Creative work',
				color: 'accent-1',
				badge: {
					default: +1,
					isInverted: true,
				},
			},
			{ id: 2, icon: generateIconPath('solid/heart-clock'), headetDetails: 'Tact', color: 'accent-1' },
		],
	},
};
