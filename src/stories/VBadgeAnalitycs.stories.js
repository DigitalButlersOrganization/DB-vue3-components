import VBadgeAnalytics from '../components/VBadgeAnalytics.vue';
import { V_BADGE_ANALYTICS } from '../constants';

export default {
	title: 'Components/VBadgeAnalytics',
	component: VBadgeAnalytics,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: {
				type: 'select',
			},
			options: V_BADGE_ANALYTICS.TYPES,
		},
	},
	render: (args) => ({
		components: { VBadgeAnalytics },
		setup() {
			return { args };
		},
		template: `
			<VBadgeAnalytics v-bind="args">
				<template v-slot:default v-if="args.default">
					<span v-html="args.default"></span>
				</template>
			</VBadgeAnalytics>
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
		type: V_BADGE_ANALYTICS.TYPES[1],
		default: 'stonks',
	},
};

export const Negative = {
	args: {
		type: V_BADGE_ANALYTICS.TYPES[2],
		default: 'not stonks',
	},
};

export const Fallback = {
	args: {},
};
