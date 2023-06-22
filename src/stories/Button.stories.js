import Button from '../components/Button.vue';
import { SIZES } from '../constants';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
	title: 'Controls/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: {
				type: 'select',
			},
			options: SIZES.FULL,
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
	args: {
		size: SIZES.FULL[2],
	},
};

export const Secondary = {
	args: {
		size: SIZES.FULL[2],
		to: 'test-to',
	},
};

export const Large = {
	args: {
		size: SIZES.FULL[4],
	},
};

export const Small = {
	args: {
		size: SIZES.FULL[1],
	},
};
