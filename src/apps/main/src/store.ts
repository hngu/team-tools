import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { useDispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';

import rootReducer, { RootState } from './rootReducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer: rootReducer,
    middleware,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;