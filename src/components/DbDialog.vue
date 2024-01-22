<script setup>
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
});

const emit = defineEmits(['update:isOpenModal']);

const handleCloseClick = () => emit('update:isOpenModal', false);
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
						<slot name="header" />
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
.modal {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, calc(-50% - 3.25rem));
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
		@media screen and (max-width: 35rem) {
			padding-inline-end: 3rem;
		}
	}
	&__body {
		padding-block: 0.75rem;
		row-gap: 1.5rem;
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
		@media screen and (max-width: 35rem) {
			inset-inline-end: 0.5rem;
			inset-block-start: 0.5rem;
		}
	}
}
</style>
