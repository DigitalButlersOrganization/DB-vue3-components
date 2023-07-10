import DbSwitch from '../components/DbSwitch.vue';

export default {
	title: 'Inputs/DbSwitch',
	component: DbSwitch,
	tags: ['autodocs'],
	render: (args) => ({
		components: { DbSwitch },
		setup() {
			return { args };
		},
		template: `
			<DbSwitch v-bind="args"></DbSwitch>
		`,
	}),
};

export const Default = {
	args: {},
};
