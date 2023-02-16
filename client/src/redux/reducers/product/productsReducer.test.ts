import {
  productsReducer,
  initialState,
  interfaceState,
} from './productsReducer';
import { getAllProducts } from '../../actions/product/actionsFetchProducts';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { product as responseBodyType } from '../../actions/product/actionTypes';
import * as reactRedux from 'react-redux';

import { productsData } from '../../../test/dummyData';
import { RootState } from '../../rootReducer';

let responseData: responseBodyType[] = productsData;
let url = 'http://localhost:5000';

const server = setupServer(
  rest.get<responseBodyType>(`${url}/api/products`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(responseData));
  })
);

beforeEach(() => {
  server.resetHandlers();
});
beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
afterAll(() => server.close());

describe('products reducer', () => {
  it('should return the initial state when passed an empty action', () => {
    const initialState = undefined;
    const action = { type: '' };
    const result = productsReducer(initialState, action as any);

    expect(result).toEqual({ loading: false, products: [] });
  });

  it('should fetch the products data', async () => {
    const dispatch = jest.fn();
    const state: interfaceState = { loading: false, products: productsData };
    const thunk = getAllProducts();

    await thunk(dispatch, () => state, undefined);

    const { calls } = dispatch.mock;

    // console.log(state);

    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('GET_ALL_PRODUCTS_LOADING');
    expect(calls[1][0].type).toEqual('GET_ALL_PRODUCTS_SUCCESS');
    expect(calls[1][0].payload).toEqual(productsData);
    // console.log(dispatch.mock.calls[1][0].type);
  });
  it('should return err message if fetching fails', async () => {
    let error: 'no products found';
    server.use(
      rest.get(`${url}/api/products`, (req, res, ctx) => {
        return res(ctx.status(400), ctx.json({ message: error }));
      })
    );
    const dispatch = jest.fn();

    const thunk = getAllProducts();

    await thunk(dispatch);

    const { calls } = dispatch.mock;

    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('GET_ALL_PRODUCTS_LOADING');
    expect(calls[1][0].type).toEqual('GET_ALL_PRODUCTS_FAIL');
  });
});
