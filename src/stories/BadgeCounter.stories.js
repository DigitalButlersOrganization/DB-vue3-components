import DbBadgeCounter from '../components/DbBadgeCounter.vue';

export default {
	title: 'Components/DbBadgeCounter',
	component: DbBadgeCounter,
	tags: ['autodocs'],
	argTypes: {
		isInverted: { control: 'boolean' },
	},
	render: (args) => ({
		components: { DbBadgeCounter },
		setup() {
			return { args };
		},
		template: `
			<DbBadgeCounter v-bind="args">
				<template v-slot:default v-if="args.default">
					<span v-html="args.default"></span>
				</template>
			</DbBadgeCounter>
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
