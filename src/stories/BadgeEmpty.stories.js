import DbBadgeEmpty from '../components/DbBadgeEmpty.vue';

export default {
	title: 'Components/DbBadgeEmpty',
	component: DbBadgeEmpty,
	tags: ['autodocs'],
	render: (args) => ({
		components: { DbBadgeEmpty },
		setup() {
			return { args };
		},
		template: `
			<DbBadgeEmpty v-bind="args">
				<template v-slot:default v-if="args.default">
				</template>
			</DbBadgeEmpty>
		`,
	}),
};

export const Default = {
	args: {
		default: '',
	},
};

export const Accent = {
	args: {
		color: 'accent-2',
	},
};
