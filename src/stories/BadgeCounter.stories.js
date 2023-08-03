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
				<template v-slot:fallback v-if="args.fallback">
					<span v-html="args.fallback"></span>
				</template>
			</DbBadgeCounter>
		`,
	}),
};

export const Default = {
	args: {
		default: '12',
	},
};

export const DefaultAndFallbackSlots = {
	args: {
		default: '15',
		fallback: '0',
	},
};

export const FallbackSlot = {
	args: {
		fallback: '0',
	},
};

export const NoSlots = {
	args: {},
};

export const Inverted = {
	args: {
		isInverted: true,
		default: '1',
	},
};

export const Accent = {
	args: {
		color: 'accent-1',
		default: '100h',
	},
};

export const AccentInverted = {
	args: {
		isInverted: true,
		color: 'accent-1',
		default: '1488lvl',
	},
};
