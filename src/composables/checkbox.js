import { computed, ref } from 'vue';

export const useCheckboxModel = (props, emit) => {
	const isGroupItem = computed(() => Array.isArray(props.modelValue));

	const isChecked = ref(isGroupItem.value ? props.modelValue.includes(props.value) : props.modelValue);

	const handleChange = () => {
		if (isGroupItem.value) {
			const result = new Set(props.modelValue);

			if (isChecked.value) {
				result.add(props.value);
			} else {
				result.delete(props.value);
			}

			emit('update:modelValue', [...result]);
			return;
		}
		emit('update:modelValue', isChecked.value);
	};

	return {
		isChecked,
		handleChange,
	};
};
