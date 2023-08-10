<template>
	<TransitionGroup
		name="tabs-fade"
		tag="ul"
		class="tabs-body"
	>
		<slot />
	</TransitionGroup>
</template>

<style lang="scss">
.tabs-body {
	position: relative;
	padding: 0;
	inline-size: 100%;
	list-style: none;
}

</style>
