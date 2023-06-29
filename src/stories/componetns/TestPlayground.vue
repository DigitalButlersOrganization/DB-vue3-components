<script setup>
import VAvatar from '../../components/VAvatar.vue';
</script>

<template>
	<VAvatar>
		<template #icon> icon </template>
		<template #badge> 1 </template>
	</VAvatar>
</template>

<style lang="scss" scoped>
.theme--dark {
	button {
		color: green;
	}
}

button {
	color: blueviolet;

	span {
		color: red;
	}
}
</style>
