import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { localStore } from '../store';
import { RootState } from '../rootReducer';

export type AppDispatch = typeof localStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch | any>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
