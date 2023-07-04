<script setup>
import { ref } from 'vue';

import DbAvatar from '../../components/DbAvatar.vue';
import DbBaseDivider from '../../components/DbBaseDivider.vue';
import DbCheckbox from '../../components/DbCheckbox.vue';
import DbUserInfo from '../../components/DbUserInfo.vue';

const checkboxValue = ref(true);
const checkboxGroupValue = ref(['1', '2']);
</script>

<template>
	<div class="playground">
		<DbAvatar>
			<template #icon> icon </template>
			<template #badge> 1 </template>
		</DbAvatar>
		<DbBaseDivider />
		<div class="user-info-wrapper">
			<DbUserInfo
				full-name="John Doe Junior The Third"
				description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, quas."
			/>
		</div>
		<DbBaseDivider />
		{{ checkboxValue }}
		<DbCheckbox
			v-model="checkboxValue"
			value="test"
		/>
		<DbBaseDivider />
		{{ checkboxGroupValue }}
		<DbCheckbox
			v-model="checkboxGroupValue"
			value="1"
		>
			<template #default> 1 </template>
		</DbCheckbox>
		<DbCheckbox
			v-model="checkboxGroupValue"
			value="2"
		>
			<template #default> 2 </template>
		</DbCheckbox>
		<DbCheckbox
			v-model="checkboxGroupValue"
			value="3"
		>
			<template #default> 3 </template>
		</DbCheckbox>
	</div>
</template>

<style lang="scss" scoped>
.playground :deep(.divider) {
	margin-block: 1rem !important;
}

.user-info-wrapper {
	max-inline-size: 200px;
}
</style>
