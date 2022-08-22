import { Actions, actionTypes } from '../actions/product/actionTypes';
import { product } from '../actions/product/actionTypes';

interface interfaceState {
	loading: boolean;
	product: product;
	err?: string;
}

const initialState = {
	loading: false,
	product: {
		title: '',
		details: '',
		price: 0,
		description: '',
		images: [],
		inStock: 0,
		generalInfo: '',
		gender: '',
		_id: '',
	},
};

export const productReducer = (
	state: interfaceState = initialState,
	action: Actions
) => {
	switch (action.type) {
		case actionTypes.REQUEST_PRODUCT_LOADING:
			return {
				...state,
				loading: true,
			};
		case actionTypes.REQUEST_PRODUCT_SUCCESS:
			return {
				...state,
				loading: false,
				product: action.payload,
			};
		case actionTypes.REQUEST_PRODUCT_FAIL:
			return {
				...state,
				loading: false,
				err: action.payload,
			};
		default:
			return state;
	}
};
