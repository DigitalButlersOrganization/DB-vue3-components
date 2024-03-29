import DbButton from '../components/DbButton.vue';
import { BUTTON } from '../constants';

export default {
	title: 'Components/DbButton',
	component: DbButton,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: {
				type: 'select',
			},
			options: [...BUTTON.SIZES.values()],
		},
		type: {
			control: {
				type: 'select',
			},
			options: [...BUTTON.TYPES.values()],
		},
	},
	render: (args) => ({
		components: { DbButton },
		setup() {
			return { args };
		},
		template: `
			<DbButton v-bind="args">
				<template v-slot:prepend v-if="args.prepend">
					<span v-html="args.prepend"></span>
				</template>
				<template v-slot:default v-if="args.default">
					<span v-html="args.default"></span>
				</template>
				<template v-slot:append v-if="args.append">
					<span v-html="args.append"></span>
				</template>
			</DbButton>
		`,
	}),
};

export const Default = {
	args: {
		default: 'Button',
	},
};

export const Tonal = {
	args: {
		type: BUTTON.TYPES.get('tonal'),
		default: 'Button',
	},
};

export const Outline = {
	args: {
		type: BUTTON.TYPES.get('outline'),
		default: 'Button',
	},
};

export const Text = {
	args: {
		type: BUTTON.TYPES.get('text'),
		default: 'Button',
	},
};

export const Icon = {
	args: {
		isIcon: true,
		default: '✖',
	},
};

export const Small = {
	args: {
		size: BUTTON.SIZES.get('small'),
		default: 'Button',
	},
};

export const Slots = {
	args: {
		prepend: '❤',
		default: 'Button',
		append: '✖',
	},
};

export const Loading = {
	args: {
		prepend: '❤',
		default: 'Button',
		append: '✖',
		isLoading: true,
	},
};

export const Disabled = {
	args: {
		disabled: true,
		prepend: '❤',
		default: 'Button',
	},
};
