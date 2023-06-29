import VBadgeCounter from '../components/VBadgeCounter.vue';

export default {
	title: 'Components/VBadgeCounter',
	component: VBadgeCounter,
	tags: ['autodocs'],
	argTypes: {
		isInverted: { control: 'boolean' },
	},
	render: (args) => ({
		components: { VBadgeCounter },
		setup() {
			return { args };
		},
		template: `
			<VBadgeCounter v-bind="args">
				<template v-slot:default v-if="args.default">
					<span v-html="args.default"></span>
				</template>
			</VBadgeCounter>
		`,
	}),
};

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
