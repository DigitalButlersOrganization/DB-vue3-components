import DbUserInfo from '../components/DbUserInfo.vue';

export default {
	title: 'Components/DbUserInfo',
	component: DbUserInfo,
	tags: ['autodocs'],
	render: (args) => ({
		components: { DbUserInfo },
		setup() {
			return { args };
		},
		template: `
			<DbUserInfo v-bind="args">

			</DbUserInfo>
		`,
	}),
};

export const Default = {
	args: {
		fullName: 'John Doe',
	},
};

export const Description = {
	args: {
		fullName: 'John Doe',
		description: 'Cool guy',
	},
};
