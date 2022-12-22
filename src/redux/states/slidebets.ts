import { createSlice, current } from '@reduxjs/toolkit';

export const slideBetsSlice = createSlice({
  name: 'slideBets',
  initialState: {'isOpen': false},
  reducers: {
    isOpen: (state, action) => {
        return action.payload
    },
   
  }
});

export const { isOpen } = slideBetsSlice.actions;

export default slideBetsSlice.reducer;
