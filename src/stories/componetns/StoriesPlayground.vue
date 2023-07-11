<script setup>
import { ref } from 'vue';

import DbAvatar from '../../components/DbAvatar.vue';
import DbBaseDivider from '../../components/DbBaseDivider.vue';
import DbCheckbox from '../../components/DbCheckbox.vue';
import DbChip from '../../components/DbChip.vue';
import DbProgress from '../../components/DbProgress.vue';
import DbStepChip from '../../components/DbStepChip.vue';
import DbSwitch from '../../components/DbSwitch.vue';
import DbUserInfo from '../../components/DbUserInfo.vue';

const checkboxValue = ref(true);
const checkboxGroupValue = ref(['1', '2']);

const chips = ref([]);
const switches = ref(['switch 4']);

const isStepChipCurrent = ref(false);

const progress = ref(0.5);

const alertMessage = (message) => {
	alert(message);
};
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
		>
			Remember me
			<template #description>Save my login details for next time.</template>
		</DbCheckbox>
		<DbBaseDivider />
		{{ checkboxGroupValue }}
		<DbCheckbox
			v-model="checkboxGroupValue"
			value="1"
		>
			text 1
			<template #description>Description 1</template>
		</DbCheckbox>
		<DbCheckbox
			v-model="checkboxGroupValue"
			value="2"
			disabled
		>
			text 2
			<template #description>Description 2</template>
		</DbCheckbox>
		<DbCheckbox
			v-model="checkboxGroupValue"
			value="3"
		>
			text 3
		</DbCheckbox>
		<DbCheckbox
			v-model="checkboxGroupValue"
			value="4"
		/>
		<DbBaseDivider />
		{{ chips }}
		<div>
			<DbChip
				:is-closable="true"
				avatar-src="https://picsum.photos/200"
				@click:close="alertMessage('close chip 1')"
			>
				<template #checkbox>
					<DbCheckbox
						v-model="chips"
						value="chip 1"
					/>
				</template>
				chip 1
			</DbChip>
			<DbChip avatar-src="https://picsum.photos/200">
				<template #checkbox>
					<DbCheckbox
						v-model="chips"
						value="chip 2"
					/>
				</template>
				chip 2
				<template #counter> 101 </template>
			</DbChip>
			<DbChip
				type="solid"
				:is-closable="true"
				avatar-src="https://picsum.photos/200"
				@click:close="alertMessage('close chip 3')"
			>
				chip 3
			</DbChip>
		</div>

		<DbBaseDivider />
		{{ isStepChipCurrent }}
		<DbCheckbox v-model="isStepChipCurrent" />

		<DbBaseDivider />
		<DbStepChip
			:is-current="isStepChipCurrent"
			@click:close="alertMessage('close step chip 1')"
		>
			<template #number> 1 </template>
			step 1
		</DbStepChip>
		<DbStepChip
			is-passed
			:is-current="isStepChipCurrent"
			@click:close="alertMessage('close step chip 2')"
		>
			<template #number> 2 </template>
			step 2
		</DbStepChip>
		<DbStepChip
			avatar-src="https://picsum.photos/200"
			:is-passed="true"
			@click:close="alertMessage('close step chip 3')"
		>
			<template #number> 3 </template>
			step 3
		</DbStepChip>
		<DbBaseDivider />
		{{ switches }}
		<DbSwitch
			v-model="switches"
			value="switch 1"
		/>
		<DbSwitch
			v-model="switches"
			value="switch 2"
		/>
		<DbSwitch
			v-model="switches"
			disabled
			value="switch 3"
		/>
		<DbSwitch
			v-model="switches"
			disabled
			value="switch 4"
		/>
		<DbBaseDivider />
		<div style="max-inline-size: 400px">
			<input
				v-model="progress"
				type="range"
				min="0"
				max="1"
				step="0.01"
			/>
			<DbProgress :value="progress">
				<template #label> label </template>
				<template #text> {{ Math.round(progress * 100) }}/100 </template>
			</DbProgress>
			<DbProgress
				color="accent-1"
				:value="progress"
			>
				<template #label> <code>accent-1</code> color </template>
			</DbProgress>
			<DbProgress
				color="#c344ff"
				:value="progress"
			>
				<template #label> <code>#c344ff</code> color </template>
			</DbProgress>
		</div>
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
