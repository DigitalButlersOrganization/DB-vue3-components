import DbStatsPolarAreaChart from '../components/DbStatsPolarAreaChart.vue';

export default {
	title: 'Components/DbStatsPolarAreaChart',
	component: DbStatsPolarAreaChart,
	tags: ['autodocs'],
	render: (args) => ({
		components: { DbStatsPolarAreaChart },
		setup() {
			return { args };
		},
		template: `
			<DbStatsPolarAreaChart v-bind="args">
			</DbStatsPolarAreaChart>
		`,
	}),
};

export const Default = {
	args: {
		professional: { data: 7.5, dataDashed: 7 },
		leadership: { data: 9, dataDashed: 9.5 },
		team: { data: 8, dataDashed: 7 },
		stress: { data: 7, dataDashed: 7.5 },
		responsibility: { data: 8.7, dataDashed: 9.5 },
		communication: { data: 6.5, dataDashed: 6 },
	},
};
