import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer  from './reducers/userReducer'
import utilitiesReducer from './reducers/utilitiesReducer';

const reducer: any = {
  userReducer,
  utilitiesReducer,
};

export const store = configureStore({ reducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
