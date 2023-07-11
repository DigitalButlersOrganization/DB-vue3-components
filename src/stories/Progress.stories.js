import DbProgress from '../components/DbProgress.vue';

export default {
	title: 'Components/DbProgress',
	component: DbProgress,
	tags: ['autodocs'],
	argTypes: {
		value: {
			control: {
				type: 'number',
				min: 0,
				max: 1,
				step: 0.01,
			},
		},
	},
	render: (args) => ({
		components: { DbProgress },
		setup() {
			return { args };
		},
		template: `
			<DbProgress v-bind="args">
				<template v-slot:label v-if="args.label">
					<span v-html="args.label"></span>
				</template>
				<template v-slot:text v-if="args.text">
					<span v-html="args.text"></span>
				</template>
			</DbProgress>
		`,
	}),
};

export const Default = {
	args: {
		label: 'Label',
		value: 0.4,
		text: '80/200',
	},
};

export const Color = {
	args: {
		label: '<code>#c344ff</code> color',
		value: 0.8,
		color: '#c344ff',
	},
};

export const NoArgs = {
	args: {},
};
