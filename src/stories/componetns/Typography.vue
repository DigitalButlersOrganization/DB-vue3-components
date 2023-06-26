<template>
	<div class="typography">
		<div class="heading heading--lg font-weight-800">Heading LG (.heading.heading--lg.font-weight-800)</div>
		<div class="heading heading--lg">Heading LG (.heading.heading--lg)</div>
		<div class="heading heading--md">Heading MD (.heading.heading--md)</div>
		<div class="heading heading--sm">Heading SM (.heading.heading--sm)</div>
		<div class="heading heading--sm font-weight-400">Heading SM (.heading.heading--sm.font-weight-400)</div>
		<div class="text font-weight-700">Primary text (.text.font-weight-700)</div>
		<div class="text font-weight-600">Primary text (.text.font-weight-600)</div>
		<div class="text font-weight-500">Secondary text (.text.font-weight-500)</div>
		<div class="text font-weight-400">Secondary text (.text.font-weight-400)</div>
		<div class="text text--sm font-weight-500">Small text (.text.text--sm.font-weight-500)</div>
		<div class="text text--sm">Small text (.text.text--sm)</div>
		<div class="text text--xs font-weight-700">Extra small text (.text.text--xs.font-weight-700)</div>
	</div>
</template>

<style scoped lang="scss">
.typography {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
</style>
