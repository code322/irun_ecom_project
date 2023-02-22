import { server_url } from './../../../utils/api';
import { getProduct } from './../../actions/product/actionsFetchProducts';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { initialState as initial, productReducer } from './productReducer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { productsData } from '../../../test/dummyData';

let url = server_url;
const server = setupServer(
  rest.get(`${url}/api/products/:id`, (req, res, ctx) => {
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
  it('should fetch product data', async () => {
    const store = mockStore();
    // const store = mockStore({ loading: false, product: productsData[0] });
    const actions = store.getActions();
    await store.dispatch(getProduct('2id') as any);
    expect(actions).toHaveLength(2);
    expect(actions[0].type).toEqual('GET_PRODUCT_LOADING');
    expect(actions[1].type).toEqual('GET_PRODUCT_SUCCESS');
    expect(actions[1].payload).toEqual(productsData[1]);
  });
  it('should return err if fetching fails', async () => {
    const store = mockStore();
    let errorMessage = 'product is not found';

    server.use(
      rest.get(`${url}/api/products/:id`, (req, res, ctx) => {
        return res(ctx.status(400), ctx.json({ message: errorMessage }));
      })
    );
    const actions = store.getActions();
    await store.dispatch(getProduct('100id') as any);
    expect(actions).toHaveLength(2);
    expect(actions[0].type).toEqual('GET_PRODUCT_LOADING');
    expect(actions[1].type).toEqual('GET_PRODUCT_FAIL');
    expect(actions[1].payload.response.data.message).toEqual(errorMessage);
    // console.log(actions[1].payload.response.data);
  });
});
