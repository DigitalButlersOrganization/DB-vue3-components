import InlineSvg from 'vue-inline-svg';

import DbChip from '../components/DbChip.vue';
import DbInput from '../components/DbInput.vue';
import { generateIconPath } from '../utilities';

export default {
	title: 'Inputs/DbInput',
	component: DbInput,
	tags: ['autodocs'],
	render: (args) => ({
		components: { DbInput, InlineSvg, DbChip },
		setup() {
			return { args, generateIconPath };
		},
		template: `
			<DbInput v-bind="args">
				<template v-slot:icon v-if="args.icon">
					<InlineSvg :src="args.icon" />
				</template>
				<template v-slot:prepend-inner v-if="args.chip">
					<span class="chip-box">
					</span>
					<DbChip v-bind="args.chip">
						<template v-slot:default v-if="args.chip.default">
							<span v-html="args.chip.default"></span>
						</template>
						<template v-slot:counter v-if="args.chip.counter">
							<span v-html="args.chip.counter"></span>
						</template>
						<template v-slot:append v-if="args.chip.append">
							<span v-html="args.chip.append"></span>
						</template>
					</DbChip>
					<DbChip v-bind="args.chip">
						<template v-slot:default v-if="args.chip.default">
							<span v-html="args.chip.default"></span>
						</template>
						<template v-slot:counter v-if="args.chip.counter">
							<span v-html="args.chip.counter"></span>
						</template>
						<template v-slot:append v-if="args.chip.append">
							<span v-html="args.chip.append"></span>
						</template>
					</DbChip>
				</template>
			</DbInput>
		`,
	}),
};

export const Default = {
	args: {
		placeholder: 'Enter a description...',
	},
};

export const Outline = {
	args: {
		placeholder: 'Enter a description...',
		isOutline: true,
	},
};

export const DefaultWithIcon = {
	args: {
		placeholder: 'Enter a description...',
		icon: generateIconPath('outline/mail-02'),
	},
};

export const WithIcon = {
	args: {
		placeholder: 'Enter a description...',
		icon: generateIconPath('outline/mail-02'),
		isOutline: true,
	},
};

export const WithChips = {
	args: {
		placeholder: 'Enter a description...',
		isOutline: true,
		chip: {
			default: 'Chip text',
			avatarSrc: 'https://picsum.photos/200',
			checkbox: `<input type="checkbox" />`,
			isClosable: true,
		},
	},
};

export const Disabled = {
	args: {
		placeholder: 'Enter a description...',
		disabled: true,
		isOutline: true,
	},
};

export const Error = {
	args: {
		placeholder: 'Enter a description...',
		isError: true,
		isOutline: true,
	},
};
