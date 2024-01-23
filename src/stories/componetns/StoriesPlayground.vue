<script setup>
import { ref } from 'vue';
import InlineSvg from 'vue-inline-svg';

import DbAppNotificationsGroup from '../../components/DbAppNotificationsGroup.vue';
import DbAvatar from '../../components/DbAvatar.vue';
import DbBrand from '../../components/DbBrand.vue';
import DbButton from '../../components/DbButton.vue';
import DbCheckbox from '../../components/DbCheckbox.vue';
import DbChip from '../../components/DbChip.vue';
import DbContainer from '../../components/DbContainer.vue';
import DbDialog from '../../components/DbDialog.vue';
import DbDivider from '../../components/DbDivider.vue';
import DbFormField from '../../components/DbFormField.vue';
import DbHeader from '../../components/DbHeader.vue';
import DbInput from '../../components/DbInput.vue';
import DbNavigation from '../../components/DbNavigation.vue';
import DbNavigationButton from '../../components/DbNavigationButton.vue';
import DbNavigationDivider from '../../components/DbNavigationDivider.vue';
import DbNotification from '../../components/DbNotification.vue';
import DbPageWidget from '../../components/DbPageWidget.vue';
import DbPageWidgetsGroup from '../../components/DbPageWidgetsGroup.vue';
import DbProgress from '../../components/DbProgress.vue';
import DbSection from '../../components/DbSection.vue';
import DbStepChip from '../../components/DbStepChip.vue';
import DbSwitch from '../../components/DbSwitch.vue';
import DbTabs from '../../components/DbTabs.vue';
import DbTabsItem from '../../components/DbTabsItem.vue';
import DbTextarea from '../../components/DbTextarea.vue';
import DbTooltip from '../../components/DbTooltip.vue';
import DbUserInfo from '../../components/DbUserInfo.vue';
import DbWidgetNotificationsGroup from '../../components/DbWidgetNotificationsGroup.vue';
import { generateIconPath } from '../../utilities';

// Helpers
const generateRandomColor = () => {
	const colors = ['accent-1', 'primary', 'secondary', 'success', 'warning', 'error'];

	return colors[Math.floor(Math.random() * colors.length)];
};
const generateRandomIcon = () => {
	const icons = [
		'outline/arrow-narrow-down',
		'outline/arrow-narrow-left',
		'outline/arrow-narrow-right',
		'outline/arrow-narrow-up',
		'outline/attachment-01',
		'outline/award-03',
		'outline/brush-01',
		'outline/check',
		'outline/chevron-down',
		'outline/chevron-left',
		'outline/chevron-right',
		'outline/chevron-up',
		'outline/code-snippet-02',
		'outline/command',
		'outline/data',
		'outline/database-03',
		'outline/dots-vertical',
		'outline/eye',
		'outline/eye-off',
		'outline/face-wink',
		'outline/filter-funnel-01',
		'outline/glasses-02',
		'outline/link-01',
		'outline/link-external-01',
		'outline/mail-02',
		'outline/message-chat-circle',
		'outline/plus',
		'outline/puzzle-piece',
		'outline/refresh-cw-02',
		'outline/search-md',
		'outline/switch-vertical-01',
		'outline/switch-vertical-02',
		'outline/user-01',
		'outline/x-circle',
		'outline/x-close',
		'outline/vartical-divider',
		'solid/alert-circle',
		'solid/award-03',
		'solid/award-05',
		'solid/bar-chart-square-01',
		'solid/briefcase-02',
		'solid/calendar-check-01',
		'solid/camera-01',
		'solid/check-circle',
		'solid/check-circle-broken',
		'solid/clipboard',
		'solid/clock',
		'solid/coins-stacked-04',
		'solid/cursor-03',
		'solid/droplets-02',
		'solid/face-content',
		'solid/face-frown',
		'solid/face-happy',
		'solid/face-neutral',
		'solid/file-check-03',
		'solid/filter-funnel-01',
		'solid/glasses-02',
		'solid/grid-01',
		'solid/heart',
		'solid/heart-clock',
		'solid/heart-hand',
		'solid/hearts',
		'solid/help-circle',
		'solid/home-line',
		'solid/info-circle',
		'solid/lightbulb-03',
		'solid/lightning-01',
		'solid/mail-02',
		'solid/marker-pin-01',
		'solid/message-chat-square',
		'solid/message-text-square-01',
		'solid/monitor-04',
		'solid/paint-pour',
		'solid/phone-call-01',
		'solid/pin-02',
		'solid/play-circle',
		'solid/plus-circle',
		'solid/rocket-01',
		'solid/send-01',
		'solid/settings-01',
		'solid/settings-03',
		'solid/thumbs-down',
		'solid/thumbs-up',
		'solid/trash-03',
		'solid/triangle',
		'solid/trophy-01',
		'solid/user-01',
		'solid/user-plus-02',
		'solid/users-01',
	];

	return icons[Math.floor(Math.random() * icons.length)];
};

const alertMessage = (message) => {
	// eslint-disable-next-line no-alert
	alert(message);
};
const logMessage = (message) => {
	// eslint-disable-next-line no-console
	console.log(message);
};

// Reactive data
const checkboxValue = ref(true);
const checkboxGroupValue = ref(['1', '2']);

const chips = ref([]);
const switches = ref(['switch 4']);

const isStepChipCurrent = ref(false);
const isButtonsLoading = ref(false);

const progress = ref(0.5);

const tooltipName = ref('Lorem ipsum');

// App notifications
const appNotifications = ref([
	{
		id: 1,
		heading: 'App notification 1',
		body: 'Click to the button on the top of the page to add new notification',
		isDismissible: Math.random() > 0.5,
		isDetailed: Math.random() > 0.5,
		color: generateRandomColor(),
		icon: generateRandomIcon(),
	},
]);

const addAppNotification = () => {
	appNotifications.value.push({
		id: appNotifications.value.length + 1,
		heading: `App notification ${appNotifications.value.length + 1}`,
		body: `Notification body ${appNotifications.value.length + 1}`,
		isDismissible: Math.random() > 0.5,
		isDetailed: Math.random() > 0.5,
		color: generateRandomColor(),
		icon: generateRandomIcon(),
	});
};

// Widget notifications
const widgetNotifications = ref([
	{
		id: 1,
		heading: 'Widget notification 1',
		body: 'Click to the button on the top of the page to add new notification',
		isClosable: true,
		isDetailed: Math.random() > 0.5,
		color: generateRandomColor(),
		icon: generateRandomIcon(),
	},
]);

const addWidgetNotification = () => {
	widgetNotifications.value.push({
		id: widgetNotifications.value.length + 1,
		heading: `Widget notification ${widgetNotifications.value.length + 1}`,
		body: Math.random() > 0.5 ? 'Notification body' : '',
		isClosable: Math.random() > 0.5,
		isDetailed: Math.random() > 0.5,
		color: generateRandomColor(),
		icon: generateRandomIcon(),
		progress: Math.random() > 0.5 ? Math.random() : null,
		badge: Math.random() > 0.5 ? String(Math.floor(Math.random() * 20)) : undefined,
	});
};

// Modal

const isOpenModal = ref(false);

const handleOpenModal = () => {
	isOpenModal.value = !isOpenModal.value;
};

// Navigation
const navigationItems = ref([
	{
		value: 'home',
		label: 'Home',
		icon: 'solid/home-line',
		id: 'home-radio',
	},
	{
		value: 'settings',
		label: 'Settings',
		id: 'settings-radio',
	},
	{
		value: 'notifications',
		label: 'Notifications',
		icon: 'solid/message-chat-square',
		badge: '2',
	},
	{
		value: 'profile',
		label: 'Profile',
		icon: 'solid/user-01',
	},
]);
const navigationValue = ref(navigationItems.value[0].value);
</script>

<template>
	<div class="playground">
		<DbSection>
			<DbContainer>
				<div class="buttons-row">
					<DbButton
						color="primary"
						@click="addAppNotification"
					>
						Add app notification
					</DbButton>
					<DbButton
						color="primary"
						type="outline"
						@click="addWidgetNotification"
					>
						Add widget notification
					</DbButton>
				</div>
			</DbContainer>
		</DbSection>
		<DbSection>
			<DbContainer style="block-size: 600px; max-inline-size: 500px; overflow-x: auto">
				<DbWidgetNotificationsGroup
					:items="widgetNotifications"
					@click:close="(id) => logMessage(`Widget notification close ${id}`)"
					@click:show-more="(id) => logMessage(`Widget notification show more ${id}`)"
				/>
			</DbContainer>
		</DbSection>
		<DbAppNotificationsGroup
			:items="appNotifications"
			@click:close="(id) => logMessage(`App notification close ${id}`)"
			@click:dismiss="(id) => logMessage(`App notification dismiss ${id}`)"
			@click:show-more="(id) => logMessage(`App notification show more ${id}`)"
		/>
		<DbSection>
			<DbContainer>
				<DbAvatar>
					<template #icon> icon </template>
					<template #badge> 1 </template>
				</DbAvatar>
			</DbContainer>
		</DbSection>
		<DbSection>
			<DbContainer>
				<div class="user-info-wrapper">
					<DbUserInfo
						full-name="John Doe Junior The Third"
						description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, quas."
					/>
				</div>
			</DbContainer>
		</DbSection>
		<DbSection>
			<DbContainer>
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
			</DbContainer>
		</DbSection>
		<DbSection>
			<DbContainer>
				{{ isStepChipCurrent }}
				<DbSwitch v-model="isStepChipCurrent" />
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
			</DbContainer>
		</DbSection>
		<DbSection>
			<DbContainer>
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
			</DbContainer>
		</DbSection>
		<DbSection>
			<DbContainer>
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
			</DbContainer>
		</DbSection>
		<DbSection>
			<DbContainer>
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
			</DbContainer>
		</DbSection>
		<DbSection>
			<DbContainer>
				<input v-model="tooltipName" />
				<DbTooltip>
					<template #trigger> hover me </template>
					<DbUserInfo
						:full-name="tooltipName"
						description="Another lorem ipsum"
					/>
				</DbTooltip>
			</DbContainer>
		</DbSection>
		<DbSection>
			<DbContainer>
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
						<InlineSvg src="icons/solid/camera-01.svg" />
					</DbButton>
					<DbButton
						:is-loading="isButtonsLoading"
						type="tonal"
						:is-icon="true"
						color="#c344ff"
					>
						<InlineSvg src="icons/solid/camera-01.svg" />
					</DbButton>
					<DbButton
						:is-loading="isButtonsLoading"
						type="outline"
						:is-icon="true"
						color="#c344ff"
					>
						<InlineSvg src="icons/outline/x-close.svg" />
					</DbButton>
					<DbButton
						type="text"
						:is-icon="true"
						color="#c344ff"
					>
						<InlineSvg src="icons/outline/x-close.svg" />
					</DbButton>
					<DbButton
						class="app-notification__close-button"
						:is-icon="true"
						type="text"
						size="small"
						:aria-label="$t('actions.close')"
						:is-loading="isButtonsLoading"
					>
						<InlineSvg src="icons/outline/x-close.svg" />
					</DbButton>
				</div>
			</DbContainer>
		</DbSection>
		<DbSection>
			<DbContainer>
				<h2>Navigation</h2>
				<div style="max-inline-size: 300px">
					<DbNavigation>
						<DbNavigationButton
							target="_blank"
							to="https://www.digitalbutlers.team/"
						>
							Website
						</DbNavigationButton>
						<DbNavigationButton
							:is-current="true"
							to="https://www.linkedin.com/company/digitalbutlers/"
						>
							<template #icon>
								<InlineSvg :src="generateIconPath('solid/users-01')" />
							</template>
							Linkedin
						</DbNavigationButton>
						<DbNavigationButton to="https://instagram.com/digital_butlers">
							<template #icon>
								<InlineSvg :src="generateIconPath('solid/camera-01')" />
							</template>
							Instagram
						</DbNavigationButton>
						<DbNavigationButton to="https://www.awwwards.com/DigitalButlers/">
							<template #icon>
								<InlineSvg :src="generateIconPath('solid/award-03')" />
							</template>
							Awwwards
						</DbNavigationButton>
						<DbNavigationButton to="https://clutch.co/profile/digital-butlers">
							<template #icon>
								<InlineSvg :src="generateIconPath('solid/message-chat-square')" />
							</template>
							Clutch
							<template #badge> 25 </template>
						</DbNavigationButton>
					</DbNavigation>
					<DbDivider />
					<DbNavigation color-scheme="alternate">
						<DbNavigationButton
							target="_blank"
							to="https://www.digitalbutlers.team/"
						>
							Website
						</DbNavigationButton>
						<DbNavigationButton
							:is-current="true"
							to="https://www.linkedin.com/company/digitalbutlers/"
						>
							<template #icon>
								<InlineSvg :src="generateIconPath('solid/users-01')" />
							</template>
							Linkedin
						</DbNavigationButton>
						<DbNavigationButton to="https://instagram.com/digital_butlers">
							<template #icon>
								<InlineSvg :src="generateIconPath('solid/camera-01')" />
							</template>
							Instagram
						</DbNavigationButton>
						<DbNavigationButton to="https://www.awwwards.com/DigitalButlers/">
							<template #icon>
								<InlineSvg :src="generateIconPath('solid/award-03')" />
							</template>
							Awwwards
						</DbNavigationButton>
						<DbNavigationButton to="https://clutch.co/profile/digital-butlers">
							<template #icon>
								<InlineSvg :src="generateIconPath('solid/message-chat-square')" />
							</template>
							Clutch
							<template #badge> 25 </template>
						</DbNavigationButton>
					</DbNavigation>
				</div>
			</DbContainer>
		</DbSection>
		<DbSection>
			<DbContainer>
				<h2>Tabs</h2>
				<DbButton @click="navigationValue = 'home'"> Go to "Home" tab </DbButton>
				{{ navigationValue }}
				<DbDivider />
				<DbTabs
					v-model="navigationValue"
					:items="navigationItems"
				>
					<DbTabsItem :value="navigationItems[0].value">
						<h3 class="heading heading--lg">Home</h3>
						<p class="text text--md">
							Quisque erat sapien, finibus sed lacus a, facilisis vehicula leo. Etiam mollis, turpis pulvinar sagittis
							vulputate, ligula orci feugiat massa, id commodo nulla tortor quis nisl. Maecenas velit nisl, consequat
							vel ultricies ac, sodales id nisl. Nullam sed sollicitudin metus. In imperdiet auctor auctor. Quisque
							tincidunt turpis id magna tempus efficitur. Curabitur tristique diam sed dui tempor iaculis. Etiam
							ullamcorper metus ac odio rhoncus tempus. Fusce interdum id magna eget pellentesque. Vivamus molestie
							sagittis sem, at posuere ex cursus sit amet. Ut vitae orci libero. Donec ut elit ullamcorper lacus
							porttitor porttitor non vel enim.
						</p>
						<p class="text text--md">
							Quisque mi neque, ultrices id tellus tempus, maximus dapibus libero. Sed congue mauris elit, vel rhoncus
							neque egestas non. Nam condimentum mi ipsum, ut fringilla justo imperdiet quis. Aliquam maximus vitae erat
							non condimentum. Nulla pretium maximus quam, vel rhoncus lorem consectetur ut. Integer sem metus, molestie
							nec lorem eu, venenatis feugiat mi. Quisque pulvinar leo vel orci consectetur porttitor. Vivamus posuere
							interdum sapien, commodo ultrices purus congue sit amet.
						</p>
					</DbTabsItem>
					<DbTabsItem :value="navigationItems[1].value">
						<h3 class="heading heading--lg">Settings</h3>
					</DbTabsItem>
					<DbTabsItem :value="navigationItems[2].value">
						<h3 class="heading heading--lg">Notifications</h3>
					</DbTabsItem>
					<DbTabsItem :value="navigationItems[3].value">
						<h3 class="heading heading--lg">Profile</h3>
						<p class="text text--md">
							Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla
							tincidunt blandit sapien in sagittis. Pellentesque feugiat, ante non consectetur vehicula, ipsum augue
							mollis magna, non dictum nulla metus in neque.
						</p>
					</DbTabsItem>
				</DbTabs>
			</DbContainer>
		</DbSection>
		<DbSection>
			<DbContainer tag="ul">
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
			</DbContainer>
		</DbSection>
		<DbSection>
			<DbContainer>
				<h2>Page Header</h2>
			</DbContainer>
			<DbHeader>
				<template #brand>
					<DbBrand />
				</template>
				<template #navigation>
					<DbNavigation is-empty>
						<DbNavigationButton
							target="_blank"
							:is-current="true"
							to="https://www.digitalbutlers.team/"
						>
							<template #icon>
								<InlineSvg
									width="20"
									height="20"
									:src="generateIconPath('solid/home-line')"
								/>
							</template>
							Главная
						</DbNavigationButton>
						<DbNavigationButton to="https://www.linkedin.com/company/digitalbutlers/">
							<template #icon>
								<InlineSvg
									width="20"
									height="20"
									:src="generateIconPath('solid/users-01')"
								/>
							</template>
							Команда
						</DbNavigationButton>
						<DbNavigationButton to="https://instagram.com/digital_butlers">
							<template #icon>
								<InlineSvg
									width="20"
									height="20"
									:src="generateIconPath('solid/heart')"
								/>
							</template>
							M. Благодарностей
						</DbNavigationButton>
						<DbNavigationButton to="https://www.awwwards.com/DigitalButlers/">
							<template #icon>
								<InlineSvg
									width="20"
									height="20"
									:src="generateIconPath('solid/award-03')"
								/>
							</template>
							Компания
						</DbNavigationButton>
						<DbNavigationButton to="https://clutch.co/profile/digital-butlers">
							<template #icon>
								<InlineSvg
									width="20"
									height="20"
									:src="generateIconPath('solid/message-chat-square')"
								/>
							</template>
							Админ паннель
						</DbNavigationButton>
					</DbNavigation>
				</template>
				<template #actions>
					<DbNavigation is-empty>
						<DbNavigationButton size="sm">
							<InlineSvg
								width="20"
								height="20"
								:src="generateIconPath('solid/award-03')"
							/>
						</DbNavigationButton>
						<DbNavigationButton size="sm">
							<InlineSvg
								width="20"
								height="20"
								:src="generateIconPath('solid/microphone-01')"
							/>
						</DbNavigationButton>
						<DbNavigationDivider />
						<DbNavigationButton size="sm">
							<InlineSvg
								width="20"
								height="20"
								:src="generateIconPath('solid/briefcase-02')"
							/>
						</DbNavigationButton>
						<DbNavigationButton size="sm">
							<InlineSvg
								width="20"
								height="20"
								:src="generateIconPath('solid/heart')"
							/>
						</DbNavigationButton>
					</DbNavigation>
				</template>
				<template #avatar>
					<DbAvatar
						src="https://picsum.photos/200"
						is-badge-empty
						color="accent-2"
					>
						<template #badge />
					</DbAvatar>
				</template>
			</DbHeader>
		</DbSection>
		<DbSection>
			<DbContainer>
				<h2>Page widget</h2>
				<DbPageWidget>
					<template #header> Widget Header </template>
					<p>Widget Body</p>
				</DbPageWidget>
			</DbContainer>
		</DbSection>
		<DbSection>
			<DbContainer>
				<h2>Page widget group</h2>
				<DbPageWidgetsGroup>
					<DbPageWidget>
						<template #header> Widget Header </template>
						<p>Widget Body</p>
					</DbPageWidget>
					<DbPageWidget>
						<template #header> Widget Header </template>
						<p>Widget Body</p>
					</DbPageWidget>
					<DbPageWidget>
						<template #header> Widget Header </template>
						<p>Widget Body</p>
					</DbPageWidget>
				</DbPageWidgetsGroup>
			</DbContainer>
		</DbSection>
		<DbSection>
			<DbContainer>
				<h2>Modal exemple</h2>
				<div class="buttons-row">
					<DbButton
						color="primary"
						@click="handleOpenModal"
					>
						Open modal
					</DbButton>
				</div>
				<DbDialog v-model:isOpenModal="isOpenModal">
					<template #header> Modal header </template>
					Modal Body
					<template #footer> Modal header </template>
				</DbDialog>
			</DbContainer>
		</DbSection>
		<DbSection>
			<DbContainer>
				<h2>Form exemple</h2>
				<form class="form">
					<DbFormField>
						<template #label> Email </template>
						<template #input>
							<DbInput placeholder="Enter a email..." />
						</template>
					</DbFormField>
					<DbFormField>
						<template #label> Name </template>
						<template #input>
							<DbInput
								placeholder="Enter a Name..."
								disabled
							/>
						</template>
						<template #help-text> help-text </template>
					</DbFormField>
					<DbFormField>
						<template #label> Description </template>
						<template #input>
							<DbTextarea placeholder="Enter a description..." />
						</template>
					</DbFormField>
					<DbFormField>
						<template #label> Description </template>
						<template #input>
							<DbTextarea
								placeholder="Enter a description..."
								is-error
							/>
						</template>
						<template #error-text> error-text </template>
					</DbFormField>
				</form>
			</DbContainer>
		</DbSection>
	</div>
</template>

<style lang="scss" scoped>
.playground {
	:deep(.divider) {
		margin-block: 1rem !important;
	}
	:deep(.section:nth-child(odd of .section)) {
		background-color: var(--db-components-color-background-secondary);
	}
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

.form {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
</style>

<style>
.sb-main-padded {
	padding: 0 !important;
}
</style>
