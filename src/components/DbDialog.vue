<script setup>
import { computed } from 'vue';
import InlineSvg from 'vue-inline-svg';

import DbButton from './DbButton.vue';

const props = defineProps({
	isOpenModal: {
		type: Boolean,
		required: false,
		default: false,
	},
	to: {
		type: String,
		required: false,
		default: 'body',
	},
	headerNoBottomIndentation: {
		type: Boolean,
		required: false,
		default: false,
	},
});

const emit = defineEmits(['update:isOpenModal']);

const handleCloseClick = () => emit('update:isOpenModal', false);

const classes = computed(() => [
	{
		'modal--header-no-indentation': props.headerNoBottomIndentation,
	},
]);
</script>

<template>
	<Teleport :to="props.to">
		<Transition
			name="fade"
			mode="out-in"
		>
			<dialog
				v-if="props.isOpenModal"
				class="modal"
				:class="classes"
				:open="props.isOpenModal"
				:aria-modal="props.isOpenModal"
			>
				<Teleport :to="props.to">
					<div
						v-if="props.isOpenModal"
						class="modal-mask"
						:class="{ 'modal-mask--open': props.isOpenModal }"
						@click="handleCloseClick"
					/>
				</Teleport>
				<div class="modal__content">
					<header class="modal__header">
						<h3 class="modal__header-heading">
							<slot name="header-heading" />
						</h3>
						<p class="modal__header-subheading">
							<slot name="header-subheading" />
						</p>
					</header>
					<div class="modal__body">
						<slot />
					</div>
					<footer class="modal__footer">
						<slot name="footer" />
					</footer>
				</div>
				<DbButton
					class="modal__close-button"
					:is-icon="true"
					type="text"
					:aria-label="$t('actions.close')"
					@click="handleCloseClick"
				>
					<InlineSvg src="icons/outline/x-close.svg" />
				</DbButton>
			</dialog>
		</Transition>
	</Teleport>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';
@import '/src/assets/styles/utilities/breakpoints.scss';
.modal {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(calc(-50% - 3.25rem), -50%);
	width: min(30rem, calc(100vw - 3.25rem));
	border-radius: var(--db-components-border-radius-lg);
	background-color: var(--db-components-color-background-primary);
	box-shadow: var(--db-components-shadow-dialog);
	color: var(--db-components-color-text-secondary);
	padding: 0;
	border: none;
	z-index: var(--db-components-z-index-dialog);
	@include mixins.text();
	@include mixins.text--md();

	&-mask {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: calc(var(--db-components-z-index-dialog) - 1);
		animation: blur-in 0.2s ease-in-out forwards;

		@keyframes blur-in {
			from {
				backdrop-filter: blur(0px);
			}
			to {
				backdrop-filter: var(--db-components-backdrop-filter-dialog-mask);
			}
		}
	}

	&__content {
		display: flex;
		flex-direction: column;
	}
	&__header,
	&__footer,
	&__body {
		padding-block: 1.5rem;
		padding-inline: 1.5rem;
	}
	&__header {
		display: flex;
		flex-direction: column;
		row-gap: 0.25rem;
		text-align: center;

		&-heading {
			@include mixins.heading--md();
			@include mixins.font-weight(600);
			margin-block: 0.313rem;
			color: var(--db-components-color-text-primary);
		}
		&-subheading {
			margin-block: 0.188rem;
			color: var(--db-components-color-text-secondary);
		}
		&-heading:empty,
		&-subheading:empty {
			display: none;
		}
		@media screen and (max-width: $mobile-md) {
			padding-inline-end: 3rem;
		}
	}
	&__body {
		display: flex;
		flex-direction: column;
		padding-block: 0.75rem;
		row-gap: 1.5rem;
		max-height: 60vh;
		overflow: auto;
		@media screen and (max-height: 600px) {
			max-height: 40vh;
		}
	}

	&__header,
	&__body,
	&__footer {
		&:empty {
			display: none;
		}
	}

	&__close-button {
		position: absolute;
		inset-block-start: 0rem;
		inset-inline-end: -3rem;
		@media screen and (max-width: $mobile-md) {
			inset-inline-end: 0.5rem;
			inset-block-start: 0.5rem;
		}
	}

	&--header-no-indentation {
		.modal__header {
			padding-block-end: 0;
		}
	}
}
</style>
