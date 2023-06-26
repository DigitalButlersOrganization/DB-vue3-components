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
	width: min(100%, 80rem);
	padding-inline: 2rem;
	margin-inline: auto;
	display: block;
}
</style>
