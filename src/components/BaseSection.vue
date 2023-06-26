<script setup>
const props = defineProps({
	tag: {
		type: String,
		required: false,
		default: 'section',
	},
});
</script>

<template>
	<component
		:is="props.tag"
		class="section"
	>
		<slot />
	</component>
</template>

<style scoped lang="scss">
.section {
	padding-block: 2rem;
	display: block;
}
</style>
