import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
	key: 'persist-redux',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const localStore = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
export const persisterStore = persistStore(localStore);
