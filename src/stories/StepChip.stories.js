import DbStepChip from '../components/DbStepChip.vue';

export default {
	title: 'Components/DbStepChip',
	component: DbStepChip,
	tags: ['autodocs'],
	render: (args) => ({
		components: { DbStepChip },
		setup() {
			return { args };
		},
		template: `
			<DbStepChip v-bind="args">
				<template v-slot:default v-if="args.default">
					<span v-html="args.default"></span>
				</template>
				<template v-slot:number v-if="args.number">
					<span v-html="args.number"></span>
				</template>
			</DbStepChip>
		`,
	}),
};

export const Default = {
	args: {
		number: '1',
		default: 'Step 1',
	},
};

export const Current = {
	args: {
		number: '2',
		default: 'Step 2',
		isCurrent: true,
	},
};

export const Passed = {
	args: {
		number: '3',
		default: 'Step 3',
		isPassed: true,
		avatarSrc: 'https://picsum.photos/200',
	},
};
