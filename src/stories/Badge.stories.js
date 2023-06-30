import DbBadge from '../components/DbBadge.vue';
import { BADGE } from '../constants';

export default {
	title: 'Components/DbBadge',
	component: DbBadge,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: {
				type: 'select',
			},
			options: BADGE.SIZES,
		},
	},
	render: (args) => ({
		components: { DbBadge },
		setup() {
			return { args };
		},
		template: `
			<DbBadge v-bind="args">
				<template v-slot:prepend v-if="args.prepend">
					<span v-html="args.prepend"></span>
				</template>
				<template v-slot:default v-if="args.default">
					<span v-html="args.default"></span>
				</template>
				<template v-slot:append v-if="args.append">
					<span v-html="args.append"></span>
				</template>
			</DbBadge>
		`,
	}),
};

export const Default = {
	args: {
		prepend: '❤',
		default: 'Stress resistance',
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
