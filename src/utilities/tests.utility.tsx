// @ts-nocheck
import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { eventsSlice } from "../redux/states/events";
import { betsSlice } from "../redux/states/bets";
import { slideBetsSlice } from "../redux/states/slidebets";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: { eventsReducer: eventsSlice.reducer, betsReducer: betsSlice.reducer, slideBetsReducer: slideBetsSlice.reducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}