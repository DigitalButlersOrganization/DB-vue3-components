import DbTextarea from '../components/DbTextarea.vue';

export default {
	title: 'Inputs/DbTextarea',
	component: DbTextarea,
	tags: ['autodocs'],
	render: (args) => ({
		components: { DbTextarea },
		setup() {
			return { args };
		},
		template: `
			<DbTextarea v-bind="args" />
		`,
	}),
};

export const Default = {
	args: {
		placeholder: 'Enter a description...',
	},
};

export const AutoResize = {
	args: {
		placeholder: 'Enter a description...',
		autoResize: true,
	},
};

export const Error = {
	args: {
		placeholder: 'Enter a description...',
		isError: true,
	},
};
