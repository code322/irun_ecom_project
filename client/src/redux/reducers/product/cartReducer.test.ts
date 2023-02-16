import { cartReducer } from './cartReducer';

describe('cart reducer', () => {
  it('should return the initial state when empty action is passed', () => {
    const initialState = undefined;
    const action = { type: '' };
    const result = cartReducer(initialState, action as any);

    expect(result).toMatchObject({ cart: [] });
  });
});
