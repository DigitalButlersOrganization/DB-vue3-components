<!-- eslint-disable no-param-reassign -->
<script setup>
import { computed, inject } from 'vue';
import InlineSvg from 'vue-inline-svg';

import { useColors } from '../composables';
import { generateIconPath } from '../utilities';

const props = defineProps({
	tag: {
		type: String,
		required: false,
		default: 'div',
	},
	id: {
		type: Number,
		default: 0,
		required: true,
	},
	color: {
		type: String,
		default: '',
		required: false,
	},
});

const { colors } = useColors(() => props.color);

const { handleClick, checkOpenAccordionItemId } = inject('parentValue');

const classes = computed(() => [
	{
		'accordion-item--open': checkOpenAccordionItemId(props.id),
	},
]);
</script>

<template>
	<component
		:is="tag"
		class="accordion-item"
		:class="classes"
	>
		<button
			:id="`accordion-item-summary-${props.id}`"
			class="accordion-item__summary"
			:aria-expanded="props.open"
			:aria-controls="`accordion-item-details-${props.id}}`"
			@click="handleClick(props.id)"
		>
			<slot name="header-prepend" />
			<slot name="header-details" />
			<span class="accordion-item__summary-append">
				<slot name="header-append" />
			</span>
			<InlineSvg
				:src="generateIconPath('outline/chevron-down')"
				:color="colors.text"
				class="accordion-item__summary-icon"
			/>
		</button>
		<div
			:id="`accordion-item-details-${props.id}}`"
			class="accordion-item__details"
			aria-labelledby="accordion-item-summary-${props.id}"
		>
			<div class="accordion-item__details-inner">
				<slot name="details-description" />
				<slot name="details-skills" />
				<div class="accordion-item__details-actions">
					<slot name="details-actions" />
				</div>
				<div class="accordion-item__details-report">
					<slot name="details-report" />
				</div>
			</div>
		</div>
	</component>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.accordion-item {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: max-content 0fr;
	transition: grid-template-rows 0.3s linear;
	background-color: v-bind('colors.background');
	color: v-bind('colors.text');
	border-radius: var(--db-components-border-radius-md);
	overflow: hidden;

	&__details-inner,
	&__summary {
		padding-inline: 1rem;
		padding-inline-end: 0.88rem;
		padding-block: 0.75rem;
	}

	&--open {
		grid-template-rows: max-content 1fr;
		.accordion-item__summary-icon {
			transform: rotateX(180deg);
		}
	}

	&__summary {
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 0.5rem;
		border: none;
		background: none;
		color: v-bind('colors.text');
		@include mixins.text();
		@include mixins.text--lg();
		cursor: pointer;
	}

	&__details {
		overflow: hidden;
		@include mixins.text();
		@include mixins.text--md();

		&-actions {
			margin-block-start: 0.5rem;
			display: flex;
			flex-direction: column;
		}
		&-report {
			margin-block-start: 0.25rem;
			display: inline-flex;
		}

		&-report:empty,
		&-actions:empty {
			display: none;
		}
	}

	&__details-inner {
		display: flex;
		flex-direction: column;
		row-gap: 0.5rem;
		padding-block-start: 0;
	}

	&__summary-append {
		margin-inline-start: 3rem;
		display: inherit;
		// margin-inline-start: auto;
	}

	&__summary-icon {
		transition: transform 0.2s linear;
		margin-inline-start: auto;
	}

	&__summary:empty,
	&__details-inner:empty,
	&__summary-append:empty,
	&__summary-icon:empty {
		display: none;
	}
}
</style>
