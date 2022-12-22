import { IBet, IEvent } from '@/models';
import { ISlideBets } from '@/models/slidebets';
import { configureStore } from '@reduxjs/toolkit';
import { betsSlice } from './states/bets';
import { eventsSlice } from './states/events';
import { slideBetsSlice } from './states/slidebets';

export interface AppStore {
  bets: IBet[];
  slideBets: ISlideBets;
  events: IEvent[];
}

export default configureStore<AppStore>({
  reducer: {
    bets: betsSlice.reducer,
    slideBets: slideBetsSlice.reducer,
    events: eventsSlice.reducer
  }
});
