import {createSlice} from '@reduxjs/toolkit';

// TODO 3 - Add your own slice, as you see fit.

/* 
  - PS - 
  A transaction requires the following data:

  - Title : string 
  - Date : string
  - Amount: number
  - Icon : ImageSourcePropType
  - Nature : "INCOME" || "EXPENSE"
 */

const counterSlice = createSlice({
  name: 'counter',
  initialState: {value: 0},
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;
