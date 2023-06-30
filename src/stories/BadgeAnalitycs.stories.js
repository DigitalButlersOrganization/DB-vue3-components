import DbBadgeAnalytics from '../components/DbBadgeAnalytics.vue';
import { BADGE_ANALYTICS } from '../constants';

export default {
	title: 'Components/DbBadgeAnalytics',
	component: DbBadgeAnalytics,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: {
				type: 'select',
			},
			options: BADGE_ANALYTICS.TYPES,
		},
	},
	render: (args) => ({
		components: { DbBadgeAnalytics },
		setup() {
			return { args };
		},
		template: `
			<DbBadgeAnalytics v-bind="args">
				<template v-slot:default v-if="args.default">
					<span v-html="args.default"></span>
				</template>
			</DbBadgeAnalytics>
		`,
	}),
};

export const Default = {
	args: {
		default: 'text',
	},
};

export const Positive = {
	args: {
		type: BADGE_ANALYTICS.TYPES[1],
		default: 'stonks',
	},
};

export const Negative = {
	args: {
		type: BADGE_ANALYTICS.TYPES[2],
		default: 'not stonks',
	},
};

export const Fallback = {
	args: {},
};
