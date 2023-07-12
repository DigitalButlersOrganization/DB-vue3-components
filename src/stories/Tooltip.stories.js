import DbTooltip from '../components/DbTooltip.vue';

export default {
	title: 'Components/DbTooltip',
	component: DbTooltip,
	tags: ['autodocs'],
	render: (args) => ({
		components: { DbTooltip },
		setup() {
			return { args };
		},
		template: `
			<DbTooltip v-bind="args">
				<template v-slot:default v-if="args.default">
					<span v-html="args.default"></span>
				</template>
				<template v-slot:trigger v-if="args.trigger">
					<span v-html="args.trigger"></span>
				</template>
			</DbTooltip>
		`,
	}),
};

export const Default = {
	args: {
		trigger: 'Hover me',
		default: 'Content',
	},
};
