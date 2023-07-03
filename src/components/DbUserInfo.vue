<script setup>
import DbAvatar from './DbAvatar.vue';

const props = defineProps({
	src: {
		type: String,
		default: '',
		required: false,
	},
	fullName: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		default: '',
		required: false,
	},
});
</script>

<template>
	<div class="user-info">
		<DbAvatar
			class="user-info__avatar"
			:src="props.src"
			:alt="props.fullName"
		>
			<template #icon>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g>
						<path
							d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
				</svg>
			</template>
		</DbAvatar>
		<div class="user-info__body">
			<div class="user-info__name">
				{{ props.fullName }}
			</div>
			<div
				v-if="props.description"
				class="user-info__description"
			>
				{{ props.description }}
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.user-info {
	display: flex;
	align-items: center;
	gap: 0.5rem;

	&__avatar {
		flex-shrink: 0;
	}

	&__name,
	&__description {
		@include mixins.text();
		@include mixins.text--sm();
		@include mixins.font-weight(500);
		@include mixins.text-truncate();
	}

	&__description {
		color: var(--db-components-color-text-secondary);
	}
}
</style>
