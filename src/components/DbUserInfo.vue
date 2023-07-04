<script setup>
import InlineSvg from 'vue-inline-svg';

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
				<InlineSvg
					class="user-info__icon"
					src="icons/outline/user-01.svg"
				/>
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
