import { productsData } from './../../../test/dummyData';
import { actionTypes } from '../../actions/product/actionTypes';
import { cartReducer, initialState } from './cartReducer';

describe('cart reducer', () => {
  it('should return the initial state when empty action is passed', () => {
    const initialState = undefined;
    const action = { type: '' };
    const result = cartReducer(initialState, action as any);

    expect(result).toMatchObject({ cart: [] });
  });
  it('should add product into the cart', () => {
    let state = initialState;
    let action = { type: actionTypes.ADD_TO_CART, payload: productsData[1] };
    let result = cartReducer(state, action as any);
    state = {
      cart: [{ ...productsData[1], qty: 1 }],
    };
    expect(result).toEqual(state);
  });
  it('should increase the quantity of product', () => {
    let state = initialState;
    let action = { type: actionTypes.ADD_TO_CART, payload: productsData[1] };
    let result = cartReducer(state, action as any);
    state = {
      cart: [{ ...productsData[1], qty: 1 }],
    };
    result = cartReducer(state, action as any);
    state = {
      cart: [{ ...productsData[1], qty: 2 }],
    };
    expect(result).toEqual(state);
  });
  it('should remove the item from the cart', () => {
    let state = {
      cart: [{ ...productsData[1], qty: 1 }],
    };

    let action = {
      type: actionTypes.REMOVE_FROM_CART,
      payload: '2id',
    };
    let result = cartReducer(state, action as any);

    expect(result).toEqual({ cart: [] });
  });
  it('should adjust the item quantity', () => {
    let state = {
      cart: [{ ...productsData[1], qty: 1 }],
    };

    let action = {
      type: actionTypes.ADJUST_QTY_CART,
      payload: { id: '2id', qty: 2 },
    };
    let result = cartReducer(state, action as any);

    state = {
      cart: [{ ...productsData[1], qty: 2 }],
    };
    expect(result).toEqual(state);
  });
});
