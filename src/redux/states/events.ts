import { IEvent, LocalStorageTypes } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IEvent[] = [];

export const eventsSlice = createSlice({
  name: 'events',
  initialState: getLocalStorage(LocalStorageTypes.EVENTS) ? JSON.parse(getLocalStorage(LocalStorageTypes.EVENTS) as string) : initialState,
  reducers: {
    addEvents: (state, action) => {
        setLocalStorage(LocalStorageTypes.EVENTS, state);
        return action.payload
    },
  }
});

export const { addEvents } = eventsSlice.actions;

export default eventsSlice.reducer;
