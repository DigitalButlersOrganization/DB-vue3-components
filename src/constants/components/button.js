import { SIZE_SM, SIZE_MD, SIZE_LG } from '../sizes';
import { TYPE_TONAL, TYPE_SOLID, TYPE_OUTLINE, TYPE_TEXT } from '../types';

export const BUTTON = {
	TYPES: new Map([
		['solid', TYPE_SOLID],
		['tonal', TYPE_TONAL],
		['outline', TYPE_OUTLINE],
		['text', TYPE_TEXT],
	]),
	SIZES: new Map([
		['small', SIZE_SM],
		['medium', SIZE_MD],
		['large', SIZE_LG],
	]),
};
