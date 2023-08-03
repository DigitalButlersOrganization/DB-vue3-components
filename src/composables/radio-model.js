import { computed } from 'vue';

export const useRadioModel = (props, emit) => {
	const isChecked = computed(() => props.modelValue === props.value);

	const handleChange = () => {
		emit('update:modelValue', props.value);
	};

	return {
		isChecked,
		handleChange,
	};
};
