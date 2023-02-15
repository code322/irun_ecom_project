import { productsReducer, initialState } from './productsReducer';
import { getAllProducts } from '../../actions/product/actionsFetchProducts';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { product as responseBodyType } from '../../actions/product/actionTypes';

import { productsData } from '../../../test/dummyData';

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
});
