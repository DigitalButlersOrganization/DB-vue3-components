<script setup>
import { ref } from 'vue';

import DbAppNotification from '../../components/DbAppNotification.vue';
import DbAvatar from '../../components/DbAvatar.vue';
import DbButton from '../../components/DbButton.vue';
import DbCheckbox from '../../components/DbCheckbox.vue';
import DbChip from '../../components/DbChip.vue';
import DbContainer from '../../components/DbContainer.vue';
import DbDivider from '../../components/DbDivider.vue';
import DbNotification from '../../components/DbNotification.vue';
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
const isButtonsLoading = ref(false);

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
			<DbCheckbox v-model="isButtonsLoading"> isButtonsLoading </DbCheckbox>
			<h3>Default</h3>
			<div class="buttons-row">
				<DbButton :is-loading="isButtonsLoading">
					<template #prepend> ☼ </template>
					solid
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					disabled
				>
					<template #prepend> ☼ </template>
					solid disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					type="tonal"
				>
					<template #prepend> ☼ </template>
					tonal
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					type="tonal"
					disabled
				>
					<template #prepend> ☼ </template>
					tonal disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					type="outline"
				>
					<template #prepend> ☼ </template>
					outline
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					type="outline"
					disabled
				>
					<template #prepend> ☼ </template>
					outline disabled
					<template #append> ♫ </template>
				</DbButton>

				<DbButton
					:is-loading="isButtonsLoading"
					type="text"
				>
					<template #prepend> ☼ </template>
					text
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
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
				<DbButton
					:is-loading="isButtonsLoading"
					color="primary"
				>
					<template #prepend> ☼ </template>
					solid
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					color="primary"
					disabled
				>
					<template #prepend> ☼ </template>
					solid disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					color="primary"
					type="tonal"
				>
					<template #prepend> ☼ </template>
					tonal
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					color="primary"
					type="tonal"
					disabled
				>
					<template #prepend> ☼ </template>
					tonal disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					color="primary"
					type="outline"
				>
					<template #prepend> ☼ </template>
					outline
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					color="primary"
					type="outline"
					disabled
				>
					<template #prepend> ☼ </template>
					outline disabled
					<template #append> ♫ </template>
				</DbButton>

				<DbButton
					:is-loading="isButtonsLoading"
					color="primary"
					type="text"
				>
					<template #prepend> ☼ </template>
					text
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
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
				<DbButton
					:is-loading="isButtonsLoading"
					color="accent-1"
				>
					<template #prepend> ☼ </template>
					solid
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					color="accent-1"
					disabled
				>
					<template #prepend> ☼ </template>
					solid disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					color="accent-1"
					type="tonal"
				>
					<template #prepend> ☼ </template>
					tonal
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					color="accent-1"
					type="tonal"
					disabled
				>
					<template #prepend> ☼ </template>
					tonal disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					color="accent-1"
					type="outline"
				>
					<template #prepend> ☼ </template>
					outline
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					color="accent-1"
					type="outline"
					disabled
				>
					<template #prepend> ☼ </template>
					outline disabled
					<template #append> ♫ </template>
				</DbButton>

				<DbButton
					:is-loading="isButtonsLoading"
					color="accent-1"
					type="text"
				>
					<template #prepend> ☼ </template>
					text
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
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
				<DbButton
					:is-loading="isButtonsLoading"
					color="#c344ff"
				>
					<template #prepend> ☼ </template>
					solid
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					color="#c344ff"
					disabled
				>
					<template #prepend> ☼ </template>
					solid disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					color="#c344ff"
					type="tonal"
				>
					<template #prepend> ☼ </template>
					tonal
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					color="#c344ff"
					type="tonal"
					disabled
				>
					<template #prepend> ☼ </template>
					tonal disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					color="#c344ff"
					type="outline"
				>
					<template #prepend> ☼ </template>
					outline
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					color="#c344ff"
					type="outline"
					disabled
				>
					<template #prepend> ☼ </template>
					outline disabled
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					color="#c344ff"
					type="text"
				>
					<template #prepend> ☼ </template>
					text
					<template #append> ♫ </template>
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					color="#c344ff"
					type="text"
					disabled
				>
					<template #prepend> ☼ </template>
					text disabled
					<template #append> ♫ </template>
				</DbButton>
			</div>
			<h3>Icon</h3>
			<div class="buttons-row">
				<DbButton
					:is-loading="isButtonsLoading"
					:is-icon="true"
					color="#c344ff"
				>
					✖
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					type="tonal"
					:is-icon="true"
					color="#c344ff"
				>
					✖
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					type="outline"
					:is-icon="true"
					color="#c344ff"
				>
					✖
				</DbButton>
				<DbButton
					:is-loading="isButtonsLoading"
					type="text"
					:is-icon="true"
					color="#c344ff"
				>
					✖
				</DbButton>
			</div>
		</DbSection>
		<DbSection>
			<DbContainer>
				<DbNotification>
					<template #avatar>
						<DbAvatar src="https://picsum.photos/200" />
					</template>
					<template #header> Header text </template>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
					<template #footer>
						<DbButton
							type="text"
							size="small"
							color="primary"
						>
							Footer button
						</DbButton>
					</template>
				</DbNotification>
				<DbDivider />
				<DbAppNotification
					:is-dismissible="true"
					:is-detailed="true"
					@click:close="alertMessage('close app notification')"
					@click:dismiss="alertMessage('dismiss app notification')"
					@click:show-more="alertMessage('show more app notification')"
				>
					<template #avatar>
						<DbAvatar src="https://picsum.photos/200" />
					</template>
					<template #header> App notification header </template>
					App notification body
				</DbAppNotification>
			</DbContainer>
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
}

.user-info-wrapper {
	max-inline-size: 200px;
}
</style>
