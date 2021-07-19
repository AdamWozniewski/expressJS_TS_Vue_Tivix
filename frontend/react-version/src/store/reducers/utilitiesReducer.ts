import { createSlice } from '@reduxjs/toolkit';

const utilitiesReducer = createSlice({
  name: 'utilities',
  initialState: {
    value: 0
  },
  reducers: {
    notification: state => {},
  },
});

// dispatchers
export const { notification } = utilitiesReducer.actions;
// store values
export const selectCount = (state: any) => state.counter.value;

export default utilitiesReducer.reducer;

