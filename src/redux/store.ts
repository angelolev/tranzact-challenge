import { IBet } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { betsSlice } from './states/bets';

export interface AppStore {
  bets: IBet[];
}

export default configureStore<AppStore>({
  reducer: {
    bets: betsSlice.reducer
  }
});
