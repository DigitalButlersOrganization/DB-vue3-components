import DbProgressCircular from '../components/DbProgressCircular.vue';

export default {
	title: 'Components/DbProgressCircular',
	component: DbProgressCircular,
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
		components: { DbProgressCircular },
		setup() {
			return { args };
		},
		template: `
			<DbProgressCircular v-bind="args" />
		`,
	}),
};

export const Default = {
	args: {
		value: 0.4,
	},
};

export const Bigger = {
	args: {
		value: 0.6,
		size: '4rem',
	},
};

export const Loader = {
	args: {
		size: '4rem',
		isLoader: true,
	},
};
