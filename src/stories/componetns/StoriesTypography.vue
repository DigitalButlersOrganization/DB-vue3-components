<script setup>
import DbContainer from '../../components/DbContainer.vue';
import DbDivider from '../../components/DbDivider.vue';
import DbSection from '../../components/DbSection.vue';
</script>

<template>
	<DbSection>
		<DbContainer>
			<div class="typography">
				<div class="heading heading--lg font-weight-800">Heading LG (.heading.heading--lg.font-weight-800)</div>
				<div class="heading heading--lg">Heading LG (.heading.heading--lg)</div>
				<DbDivider />
				<div class="heading heading--md">Heading MD (.heading.heading--md)</div>
				<DbDivider />
				<div class="heading heading--sm">Heading SM (.heading.heading--sm)</div>
				<div class="heading heading--sm font-weight-400">Heading SM (.heading.heading--sm.font-weight-400)</div>
				<DbDivider />
				<div class="text font-weight-700">Primary text (.text.font-weight-700)</div>
				<div class="text font-weight-600">Primary text (.text.font-weight-600)</div>
				<DbDivider />
				<div class="text font-weight-500">Secondary text (.text.font-weight-500)</div>
				<div class="text font-weight-400">Secondary text (.text.font-weight-400)</div>
				<DbDivider />
				<div class="text text--sm font-weight-500">Small text (.text.text--sm.font-weight-500)</div>
				<div class="text text--sm">Small text (.text.text--sm)</div>
				<DbDivider />
				<div class="text text--xs font-weight-700">Extra small text (.text.text--xs.font-weight-700)</div>
			</div>
		</DbContainer>
	</DbSection>
</template>

<style scoped lang="scss">
.typography {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
</style>
