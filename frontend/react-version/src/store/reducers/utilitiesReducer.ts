import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { UtilitiesNotification, UtilitiesState } from '../../types/UtilitiesState';
import { defaultUtilitiesState } from '../defaultState';

const utilitiesReducer = createSlice({
  name: 'utilities',
  initialState: defaultUtilitiesState,
  reducers: {
    notificationDispatch: (state: UtilitiesState, action: PayloadAction<UtilitiesNotification>) => {
      const { payload: { description, message, type } } = action;
      notification[type]({
        message,
        description,
      });
    },
    modalDispatch: (state: UtilitiesState, action: PayloadAction<any>) => {
      return { ...state, modal: { ...action.payload } };
    }
  },
});

export const { notificationDispatch, modalDispatch } = utilitiesReducer.actions;

export const selectModal = (state: any) => state.utilitiesReducer.modal;

export default utilitiesReducer.reducer;
