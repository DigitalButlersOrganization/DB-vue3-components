import DbAlert from '../components/DbAlert.vue';

export default {
	title: 'Components/DbAlert',
	component: DbAlert,
	tags: ['autodocs'],
	render: (args) => ({
		components: { DbAlert },
		setup() {
			return { args };
		},
		template: `
			<DbAlert v-bind="args">
			<template v-slot:icon v-if="args.icon">
				<span v-html="args.icon"></span>
			</template>
			<template v-slot:default v-if="args.default">
				<span v-html="args.default"></span>
			</template>
			</DbAlert>
		`,
	}),
};

export const Default = {
	args: {
		icon: '😕',
		default: 'Neutral',
	},
};

export const Success = {
	args: {
		color: 'success',
		icon: '🙂',
		default: 'Success',
	},
};

export const Warning = {
	args: {
		color: 'warning',
		icon: '😤',
		default: 'Warning',
	},
};

export const Error = {
	args: {
		color: 'error',
		icon: '😭',
		default: 'Error',
	},
};

export const Random = {
	args: {
		color: '#c344ff',
		icon: '🎉',
		default: 'Party',
	},
};
