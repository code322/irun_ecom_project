import { actionTypes, Actions } from './actionTypes';
import axios from 'axios';
import { Dispatch } from 'react';
const server_url: string | undefined = process.env.REACT_APP_SERVER_URL;

export const getAllProducts = () => async (dispatch: Dispatch<Actions>) => {
	dispatch({
		type: actionTypes.REQUEST_ALL_PRODUCTS_LOADING,
	});
	try {
		const { data } = await axios.get(`${server_url}/api/products`);

		dispatch({
			type: actionTypes.REQUEST_ALL_PRODUCTS_SUCCUSS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.REQUEST_ALL_PRODUCTS_FAIL,
			payload: error,
		});
	}
};

export const getProduct =
	(id: string | undefined) => async (dispatch: Dispatch<Actions>) => {
		dispatch({
			type: actionTypes.REQUEST_PRODUCT_LOADING,
		});

		try {
			const { data } = await axios.get(`${server_url}/api/products/${id}`);
			dispatch({
				type: actionTypes.REQUEST_PRODUCT_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: actionTypes.REQUEST_PRODUCT_FAIL,
				payload: error,
			});
		}
	};
