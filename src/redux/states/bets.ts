import { IBet, LocalStorageTypes } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice, current } from '@reduxjs/toolkit';

const initialState: IBet[] = [];

export const betsSlice = createSlice({
  name: 'bets',
  initialState: getLocalStorage(LocalStorageTypes.BETS)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.BETS) as string)
    : initialState,
  reducers: {
    addBet: (state, action) => {
      setLocalStorage(LocalStorageTypes.BETS, [...state, action.payload]);
      return [...state, action.payload];
    },
    removeBet: (state, action) => {
      const filteredState = current(state).filter((b: IBet) => b.id !== action.payload);
      setLocalStorage(LocalStorageTypes.BETS, filteredState);
      return filteredState;
    }
  }
});

export const { addBet, removeBet } = betsSlice.actions;

export default betsSlice.reducer;
