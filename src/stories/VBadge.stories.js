import VBadge from '../components/VBadge.vue';
import { V_BADGE } from '../constants/';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
	title: 'Components/VBadge',
	component: VBadge,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: {
				type: 'select',
			},
			options: V_BADGE.SIZES,
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
	args: {
		prepend: '❤',
		default: 'Стрессоустойчивость',
	},
};

export const Prepend = {
	args: {
		prepend: '❤',
		default: 'text',
	},
};

export const Append = {
	args: {
		default: 'text',
		append: '🗙',
	},
};

export const Both = {
	args: {
		prepend: '❤',
		default: 'text',
		append: '🗙',
	},
};
