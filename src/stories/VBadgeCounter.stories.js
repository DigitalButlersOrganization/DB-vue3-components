import VBadgeCounter from '../components/VBadgeCounter.vue';
import { V_BADGE_ANALYTICS } from '../constants/';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
	title: 'Components/VBadgeCounter',
	component: VBadgeCounter,
	tags: ['autodocs'],
	argTypes: {
		isInverted: { control: 'boolean' },
	},
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
	args: {},
};

export const Inverted = {
	args: {
		isInverted: true,
	},
};

export const Accent = {
	args: {
		color: 'accent-1',
		default: '1',
	},
};

export const AccentInverted = {
	args: {
		isInverted: true,
		color: 'accent-1',
		default: '1',
	},
};
