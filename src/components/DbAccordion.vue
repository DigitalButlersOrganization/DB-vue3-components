<script setup>
import { ref, provide } from 'vue';

const props = defineProps({
	tag: {
		type: String,
		required: false,
		default: 'div',
	},
});

const currentAccordionItemId = ref(null);

const handleClick = (id) => {
	currentAccordionItemId.value = currentAccordionItemId.value === id ? null : id;
};

const checkOpenAccordionItemId = (id) => currentAccordionItemId.value === id;

provide('parentValue', { handleClick, checkOpenAccordionItemId });
</script>

<template>
	<component
		:is="props.tag"
		class="accordion-wrapper"
	>
		<slot />
	</component>
</template>

<style scoped lang="scss">
@use '/src/assets/styles/utilities/mixins';

.accordion-wrapper {
	display: flex;
	flex-direction: column;
	row-gap: 0.25rem;
}
</style>
