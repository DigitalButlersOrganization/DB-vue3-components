import DbInput from '../components/DbInput.vue';

export default {
	title: 'Inputs/DbInput',
	component: DbInput,
	tags: ['autodocs'],
	render: (args) => ({
		components: { DbInput },
		setup() {
			return { args };
		},
		template: `
			<DbInput v-bind="args" />
		`,
	}),
};

export const Default = {
	args: {
		placeholder: 'Enter a description...',
	},
};

export const Disabled = {
	args: {
		placeholder: 'Enter a description...',
		disabled: true,
	},
}

export const Error = {
	args: {
		placeholder: 'Enter a description...',
		isError: true,
	},
};
