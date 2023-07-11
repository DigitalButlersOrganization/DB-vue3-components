import DbChip from '../components/DbChip.vue';
import { CHIP } from '../constants';

export default {
	title: 'Components/DbChip',
	component: DbChip,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: {
				type: 'select',
			},
			options: CHIP.SIZES,
		},
	},
	render: (args) => ({
		components: { DbChip },
		setup() {
			return { args };
		},
		template: `
			<DbChip v-bind="args">
				<template v-slot:prepend v-if="args.prepend">
					<span v-html="args.prepend"></span>
				</template>
				<template v-slot:checkbox v-if="args.checkbox">
					<span v-html="args.checkbox"></span>
				</template>
				<template v-slot:default v-if="args.default">
					<span v-html="args.default"></span>
				</template>
				<template v-slot:counter v-if="args.counter">
					<span v-html="args.counter"></span>
				</template>
				<template v-slot:append v-if="args.append">
					<span v-html="args.append"></span>
				</template>
			</DbChip>
		`,
	}),
};

export const Default = {
	args: {
		default: 'Chip text',
	},
};

export const WithAvatar = {
	args: {
		default: 'Chip text',
		avatarSrc: 'https://picsum.photos/200',
	},
};

export const WithCounter = {
	args: {
		default: 'Chip text',
		avatarSrc: 'https://picsum.photos/200',
		counter: '10',
	},
};

export const WithCheckbox = {
	args: {
		default: 'Chip text',
		avatarSrc: 'https://picsum.photos/200',
		counter: '10',
		checkbox: `<input type="checkbox" />`,
	},
};

export const Closable = {
	args: {
		default: 'Chip text',
		avatarSrc: 'https://picsum.photos/200',
		counter: '10',
		checkbox: `<input type="checkbox" />`,
		isClosable: true,
	},
};

export const Solid = {
	args: {
		type: CHIP.TYPES[1],
		default: 'Chip text',
		avatarSrc: 'https://picsum.photos/200',
		counter: '10',
		checkbox: `<input type="checkbox" />`,
		isClosable: true,
	},
};
