import VAvatar from '../components/VAvatar.vue';
import VBadgeCounter from '../components/VBadgeCounter.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
	components: { VAvatar },
	title: 'Components/VAvatar',
	component: VAvatar,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: {
				type: 'text',
			},
		},
		progress: {
			control: {
				type: 'number',
				min: 0,
				max: 1,
				step: 0.01,
			},
		},
	},
	render: (args) => ({
		components: { VAvatar, VBadgeCounter },
		setup() {
			return { args };
		},
		template: `
      <VAvatar v-bind="args">
        <template v-slot:badge v-if="args.badge">
          <div v-html="args.badge"></div>
        </template>
				<template v-slot:icon v-if="args.icon">
					<span v-html="args.icon"></span>
				</template>
      </VAvatar>
    `,
	}),
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Image = {
	args: {
		src: 'https://picsum.photos/200',
		alt: 'Random image',
	},
};

export const Icon = {
	args: {
		icon: '❤',
	},
};

export const Progress = {
	args: {
		icon: '❤',
		progress: 0.3,
		badge: false,
	},
};

export const Badge = {
	args: {
		icon: '❤',
		color: 'accent-1',
		badge: '20',
	},
};
