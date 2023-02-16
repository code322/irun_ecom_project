import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { initialState as initial, productReducer } from './productReducer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { productsData } from '../../../test/dummyData';

let url = 'http://localhost:5000';
const server = setupServer(
  rest.get(`${url}/api/product/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(productsData[1]));
  })
);

beforeEach(() => {
  server.resetHandlers();
});
beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
afterAll(() => server.close());

const mockStore = configureStore([thunk]);
describe('product reducer', () => {
  it('should return the initial state when empty action is dispatched', () => {
    const initialState = undefined;
    const action = { type: '' };
    const result = productReducer(initialState, action as any);
    expect(result).toEqual(initial);
  });
});
