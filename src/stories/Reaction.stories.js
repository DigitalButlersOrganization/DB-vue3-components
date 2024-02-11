import DbReaction from '../components/DbReaction.vue';
import DbReactionGroup from '../components/DbReactionGroup.vue';
import { REACTION } from '../constants';

export default {
	title: 'Components/DbReaction',
	component: DbReaction,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: {
				type: 'select',
			},
			options: REACTION.SIZES,
		},
	},
	render: (args) => ({
		components: { DbReaction, DbReactionGroup },
		setup() {
			return { args };
		},
		template: `
		<DbReactionGroup>
			<DbReaction v-bind="args">
				<template #emoji> {{ args.emoji }} </template>
			</DbReaction>
		</DbReactionGroup>
		`,
	}),
};

export const Default = {
	args: {
		emoji: '🙂',
	},
};

export const Label = {
	args: {
		emoji: '🙂',
		label: 'Счастье',
	},
};

export const SizeMedium = {
	args: {
		emoji: '🙂',
		label: 'Счастье',
		size: 'medium',
	},
};
