import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UtilitiesState} from '../../types/UtilitiesState';
import {UserState} from '../../types/UserState';
import {defaultUserState} from '../defaultState';

const userReducer = createSlice({
  name: 'user',
  initialState: defaultUserState,
  reducers: {
    loginUser: (state: UserState, action: PayloadAction<any>) => {
      const storage = action.payload.remember ? window.localStorage : sessionStorage;
      storage.setItem('auth', JSON.parse(action.payload));
      return {...state, user: action.payload}
    },
    logoutUser: () => {
      localStorage.clear();
      sessionStorage.clear();
      return undefined;
    }
  },
});

export const { loginUser, logoutUser } = userReducer.actions;

export const selectCount = (state: UtilitiesState) => state;

export default userReducer.reducer;