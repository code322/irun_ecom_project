import {
	Actions,
	actionTypes,
	cartItems,
} from '../actions/product/actionTypes';

interface cartInterface {
	cart: cartItems[];
}
const initialState: cartInterface = {
	cart: [],
};
export const cartReducer = (
	state: cartInterface = initialState,
	action: Actions
): cartInterface => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			let inCart = state.cart.find((item) =>
				item._id === action.payload._id ? true : false
			);
			return {
				...state,
				cart: inCart
					? state.cart.map((item) =>
							item._id === action.payload._id
								? { ...item, qty: item.qty + 1 }
								: item
					  )
					: [...state.cart, { ...action.payload, qty: 1 }],
			};
		case actionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((item) => item._id !== action.payload),
			};
		case actionTypes.ADJUST_QTY_CART:
			return {
				...state,
				cart: state.cart.map((item) =>
					item._id === action.payload.id
						? { ...item, qty: action.payload.qty }
						: item
				),
			};
		default:
			return state;
	}
};
