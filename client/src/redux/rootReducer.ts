import { authReducer } from './reducers/auth/authReducer';
import { cartReducer } from './reducers/product/cartReducer';
import { productsReducer } from './reducers/product/productsReducer';
import { productReducer } from './reducers/product/productReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  productsReducer,
  productReducer,
  cartReducer,
  authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
