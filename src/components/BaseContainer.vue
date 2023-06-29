<script setup>
const props = defineProps({
	tag: {
		type: String,
		required: false,
		default: 'div',
	},
});
</script>

<template>
	<component
		:is="props.tag"
		class="container"
	>
		<slot />
	</component>
</template>

<style scoped lang="scss">
.container {
	display: block;
	inline-size: min(100%, 80rem);
	margin-inline: auto;
	padding-inline: 2rem;
}
</style>
