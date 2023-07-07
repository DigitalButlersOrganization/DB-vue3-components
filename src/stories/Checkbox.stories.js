import DbCheckbox from '../components/DbCheckbox.vue';

export default {
	title: 'Inputs/DbCheckbox',
	component: DbCheckbox,
	tags: ['autodocs'],
	render: (args) => ({
		components: { DbCheckbox },
		setup() {
			return { args };
		},
		template: `
			<DbCheckbox v-bind="args">
				<template v-slot:default v-if="args.default">
					<span v-html="args.default"></span>
				</template>
				<template v-slot:description v-if="args.description">
					<span v-html="args.description"></span>
				</template>
			</DbCheckbox>
		`,
	}),
};

export const Default = {
	args: {},
};

export const WithSlots = {
	args: {
		default: 'Looking for more examples?',
		description: 'Check Playground tab',
	},
};
