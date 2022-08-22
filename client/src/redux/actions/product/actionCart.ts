import { Dispatch } from 'redux';
import { Actions, actionTypes, product } from './actionTypes';
// add to cart

export const addToCart =
	(item: product) => async (dispatch: Dispatch<Actions>) => {
		dispatch({
			type: actionTypes.ADD_TO_CART,
			payload: item,
		});
	};
export const removeFromCart =
	(id: string) => async (dispatch: Dispatch<Actions>) => {
		dispatch({
			type: actionTypes.REMOVE_FROM_CART,
			payload: id,
		});
	};

export const adjustQtyCart =
	(id: string, qty: number) => async (dispatch: Dispatch<Actions>) => {
		dispatch({
			type: actionTypes.ADJUST_QTY_CART,
			payload: {
				id,
				qty,
			},
		});
	};
