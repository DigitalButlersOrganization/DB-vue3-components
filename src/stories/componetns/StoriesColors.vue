<script setup>
import DbContainer from '../../components/DbContainer.vue';
import DbSection from '../../components/DbSection.vue';

const colorGroups = new Map([
	['Base', ['primary', 'secondary', 'tertiary']],
	['Text', ['text-primary', 'text-secondary']],
	['Background', ['background-primary', 'background-secondary', 'background-tertiary']],
	['Success', ['success-700', 'success-500', 'success-300', 'success-100', 'success-50']],
	['Warning', ['warning-700', 'warning-300', 'warning-100', 'warning-50', 'warning-25']],
	['Error', ['error-700', 'error-500', 'error-300', 'error-100', 'error-50', 'error-25']],
	[
		'Accent 1 palette',
		[
			'palette-accent-1-text',
			'palette-accent-1-text-hover',
			'palette-accent-1-text-disabled',
			'palette-accent-1-background',
			'palette-accent-1-background-hover',
			'palette-accent-1-outline',
		],
	],
	[
		'Success palette',
		[
			'palette-success-text',
			'palette-success-text-hover',
			'palette-success-text-disabled',
			'palette-success-background',
			'palette-success-background-hover',
			'palette-success-outline',
		],
	],
	[
		'Warning palette',
		[
			'palette-warning-text',
			'palette-warning-text-hover',
			'palette-warning-text-disabled',
			'palette-warning-background',
			'palette-warning-background-hover',
			'palette-warning-outline',
		],
	],
	[
		'Error palette',
		[
			'palette-error-text',
			'palette-error-text-hover',
			'palette-error-text-disabled',
			'palette-error-background',
			'palette-error-background-hover',
			'palette-error-outline',
		],
	],
	[
		'Fallback palette',
		[
			'palette-fallback-text',
			'palette-fallback-text-hover',
			'palette-fallback-text-disabled',
			'palette-fallback-background',
			'palette-fallback-background-hover',
			'palette-fallback-outline',
		],
	],
]);

const generateColorName = (name) => `--db-components-color-${name}`;
const generateReadableName = (name) => name.replaceAll('-', ' ');
</script>

<template>
	<DbSection
		v-for="groupName in colorGroups.keys()"
		:key="groupName"
	>
		<DbContainer>
			<h2>{{ groupName }}</h2>
			<ul class="colors-cards">
				<li
					v-for="name in colorGroups.get(groupName)"
					:key="`${groupName}-${name}`"
					class="color-card"
				>
					<div
						class="color-card__color"
						:style="{
							'background-color': `var(${generateColorName(name)})`,
						}"
					/>
					<div class="color-card__body">
						<h3 class="color-card__name heading heading--sm">
							{{ generateReadableName(name) }}
						</h3>
						<div class="text">
							{{ generateColorName(name) }}
						</div>
					</div>
				</li>
			</ul>
		</DbContainer>
	</DbSection>
</template>

<style scoped lang="scss">
ul {
	list-style: none;
	padding-inline-start: 0;
}
.color-groups {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.colors-cards {
	display: flex;
	flex-flow: wrap;
	gap: 2rem;
}
.color-card {
	overflow: hidden;
	border-radius: var(--db-components-border-radius-md);
	box-shadow: var(--db-components-shadow-lg);
	inline-size: 15rem;
	&__color {
		display: block;
		aspect-ratio: 2/1;
	}
	&__body {
		padding-block: 0.5em 0.75em;
		padding-inline: 0.75em;
	}
	&__name {
		text-transform: capitalize;
	}
}
</style>
