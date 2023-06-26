<script setup>
import { reactive } from 'vue';

const colorGroups = reactive(
	new Map([
		['Base', ['primary', 'secondary', 'tertiary']],
		['Text', ['text-primary', 'text-secondary']],
		['Background', ['background-primary', 'background-secondary', 'background-tertiary']],
		['Success', ['success-700', 'success-500', 'success-300', 'success-100', 'success-50']],
		['Warning', ['warning-700', 'warning-300', 'warning-100', 'warning-50', 'warning-25']],
		['Error', ['error-700', 'error-500', 'error-300', 'error-100', 'error-50', 'error-25']],
		['Accent 1', ['accent-1-text', 'accent-1-hover', 'accent-1-disabled', 'accent-1-background']],
		['Fallback', ['fallback-text', 'fallback-hover', 'fallback-disabled', 'fallback-background']],
	])
);

const generateColorValue = (name) => `var(--db-components-color-${name})`;
const generateReadableName = (name) => name.replaceAll('-', ' ');
</script>

<template>
	<ul class="color-groups">
		<li
			v-for="colorGroupKey in colorGroups.keys()"
			:key="colorGroupKey"
			class="color-group"
		>
			<h2>{{ colorGroupKey }}</h2>
			<ul class="colors-cards">
				<li
					v-for="name in colorGroups.get(colorGroupKey)"
					:key="`${colorGroupKey}-${name}`"
					class="color-card"
				>
					<div
						class="color-card__color"
						:style="{
							'background-color': generateColorValue(name),
						}"
					/>
					<div class="color-card__body">
						<h3 class="color-card__name heading heading--sm">
							{{ generateReadableName(name) }}
						</h3>
						<div class="text">
							{{ generateColorValue(name) }}
						</div>
					</div>
				</li>
			</ul>
		</li>
	</ul>
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
	gap: 2rem;
	flex-flow: wrap;
}
.color-card {
	border-radius: 0.5rem;
	box-shadow: 0 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
	overflow: hidden;
	width: 20rem;
	&__color {
		display: block;
		aspect-ratio: 4/1;
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
