<script setup>
import { ref } from 'vue';

import DbAvatar from '../../components/DbAvatar.vue';
import DbButton from '../../components/DbButton.vue';
import DbCheckbox from '../../components/DbCheckbox.vue';
import DbChip from '../../components/DbChip.vue';
import DbDivider from '../../components/DbDivider.vue';
import DbProgress from '../../components/DbProgress.vue';
import DbProgressCircular from '../../components/DbProgressCircular.vue';
import DbSection from '../../components/DbSection.vue';
import DbStepChip from '../../components/DbStepChip.vue';
import DbSwitch from '../../components/DbSwitch.vue';
import DbTooltip from '../../components/DbTooltip.vue';
import DbUserInfo from '../../components/DbUserInfo.vue';

const checkboxValue = ref(true);
const checkboxGroupValue = ref(['1', '2']);

const chips = ref([]);
const switches = ref(['switch 4']);

const isStepChipCurrent = ref(false);

const progress = ref(0.5);

const tooltipName = ref('Lorem ipsum');

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
		<DbDivider />
		<div class="user-info-wrapper">
			<DbUserInfo
				full-name="John Doe Junior The Third"
				description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, quas."
			/>
		</div>
		<DbDivider />
		{{ checkboxValue }}
		<DbCheckbox
			v-model="checkboxValue"
			value="test"
		>
			Remember me
			<template #description>Save my login details for next time.</template>
		</DbCheckbox>
		<DbDivider />
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
		<DbDivider />
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

		<DbDivider />
		{{ isStepChipCurrent }}
		<DbCheckbox v-model="isStepChipCurrent" />

		<DbDivider />
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
		<DbDivider />
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
		<DbDivider />
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
		<DbDivider />
		<input v-model="tooltipName" />
		<DbTooltip>
			<template #trigger> hover me </template>
			<DbUserInfo
				:full-name="tooltipName"
				description="Another lorem ipsum"
			/>
		</DbTooltip>
		<DbDivider />
		<DbSection>
			<h2>Buttons</h2>
			<h3>Default</h3>
			<div class="buttons-row">
				<DbButton>
					<template #prepend> ☼ </template>
					solid
					<template #append> ♫ </template>
				</DbButton>
				<DbButton disabled>
					<template #prepend> ☼ </template>
					solid disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton type="toned">
					<template #prepend> ☼ </template>
					toned
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					type="toned"
					disabled
				>
					<template #prepend> ☼ </template>
					toned disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton type="outline">
					<template #prepend> ☼ </template>
					outline
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					type="outline"
					disabled
				>
					<template #prepend> ☼ </template>
					outline disabled
					<template #append> ♫ </template>
				</DbButton>

				<DbButton type="text">
					<template #prepend> ☼ </template>
					text
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					type="text"
					disabled
				>
					<template #prepend> ☼ </template>
					text disabled
					<template #append> ♫ </template>
				</DbButton>
			</div>
			<DbDivider />
			<h3>Primary</h3>
			<div class="buttons-row">
				<DbButton color="primary">
					<template #prepend> ☼ </template>
					solid
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="primary"
					disabled
				>
					<template #prepend> ☼ </template>
					solid disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="primary"
					type="toned"
				>
					<template #prepend> ☼ </template>
					toned
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="primary"
					type="toned"
					disabled
				>
					<template #prepend> ☼ </template>
					toned disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="primary"
					type="outline"
				>
					<template #prepend> ☼ </template>
					outline
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="primary"
					type="outline"
					disabled
				>
					<template #prepend> ☼ </template>
					outline disabled
					<template #append> ♫ </template>
				</DbButton>

				<DbButton
					color="primary"
					type="text"
				>
					<template #prepend> ☼ </template>
					text
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="primary"
					type="text"
					disabled
				>
					<template #prepend> ☼ </template>
					text disabled
					<template #append> ♫ </template>
				</DbButton>
			</div>
			<DbDivider />
			<h3>Accent 1</h3>
			<div class="buttons-row">
				<DbButton color="accent-1">
					<template #prepend> ☼ </template>
					solid
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="accent-1"
					disabled
				>
					<template #prepend> ☼ </template>
					solid disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="accent-1"
					type="toned"
				>
					<template #prepend> ☼ </template>
					toned
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="accent-1"
					type="toned"
					disabled
				>
					<template #prepend> ☼ </template>
					toned disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="accent-1"
					type="outline"
				>
					<template #prepend> ☼ </template>
					outline
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="accent-1"
					type="outline"
					disabled
				>
					<template #prepend> ☼ </template>
					outline disabled
					<template #append> ♫ </template>
				</DbButton>

				<DbButton
					color="accent-1"
					type="text"
				>
					<template #prepend> ☼ </template>
					text
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="accent-1"
					type="text"
					disabled
				>
					<template #prepend> ☼ </template>
					text disabled
					<template #append> ♫ </template>
				</DbButton>
			</div>
			<DbDivider />
			<h3>#c344ff</h3>
			<div class="buttons-row">
				<DbButton color="#c344ff">
					<template #prepend> ☼ </template>
					solid
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="#c344ff"
					disabled
				>
					<template #prepend> ☼ </template>
					solid disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="#c344ff"
					type="toned"
				>
					<template #prepend> ☼ </template>
					toned
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="#c344ff"
					type="toned"
					disabled
				>
					<template #prepend> ☼ </template>
					toned disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="#c344ff"
					type="outline"
				>
					<template #prepend> ☼ </template>
					outline
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="#c344ff"
					type="outline"
					disabled
				>
					<template #prepend> ☼ </template>
					outline disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="#c344ff"
					type="text"
				>
					<template #prepend> ☼ </template>
					text
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					color="#c344ff"
					type="text"
					disabled
				>
					<template #prepend> ☼ </template>
					text disabled
					<template #append> ♫ </template>
				</DbButton>
			</div>
		</DbSection>
	</div>
</template>

<style lang="scss" scoped>
.playground :deep(.divider) {
	margin-block: 1rem !important;
}
.buttons-row {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.5rem;
	//> * {
	//	border: 2px red dotted;
	//}
}

.user-info-wrapper {
	max-inline-size: 200px;
}
</style>
