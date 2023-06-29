import VBadgeAnalytics from '../components/VBadgeAnalytics.vue';
import { V_BADGE_ANALYTICS } from '../constants/';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
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
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
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
