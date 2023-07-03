<script setup>
import DbAvatar from '../../components/DbAvatar.vue';
import DbUserInfo from '../../components/DbUserInfo.vue';
</script>

<template>
<!--	<DbAvatar>-->
<!--		<template #icon> icon </template>-->
<!--		<template #badge> 1 </template>-->
<!--	</DbAvatar>-->
	<div class="user-info-wrapper">
		<DbUserInfo
			full-name="John Doe Junior The Third"
			description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, quas."
		/>
	</div>
</template>

<style lang="scss" scoped>
.user-info-wrapper {
	max-inline-size: 200px;
}
</style>
