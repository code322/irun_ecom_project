import { RootState } from './../../rootReducer';
import { Actions, actionTypes } from '../../actions/product/actionTypes';
import { product } from '../../actions/product/actionTypes';

export interface interfaceState {
  loading: boolean;
  products: product[];
  err?: String;
}

export let initialState: interfaceState = {
  loading: false,
  products: [],
};

export const productsReducer = (
  state: interfaceState = initialState,
  action: Actions
): interfaceState => {
  switch (action.type) {
    case actionTypes.REQUEST_ALL_PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.REQUEST_ALL_PRODUCTS_SUCCUSS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case actionTypes.REQUEST_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};

export const selectProducts = (state: RootState) =>
  state.productsReducer.products;
