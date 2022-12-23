import eventsSlice, { addEvents } from "../../src/redux/states/events";
import { describe, it, expect } from 'vitest';

describe("tests for eventsSlice", () => {
  const initialState = []
  it("initialize slice with initialValue", () => {
    const eventsSliceInit = eventsSlice(initialState, { type: "unknown" });
    expect(eventsSliceInit).toBe(initialState);
  });

  it("should add a new Event", () => {
    const testData = {
      id: 'EVT-50',
      name: "First goal",
      markets: [],
    };

    const afterReducerOperation = eventsSlice(
      initialState,
      addEvents(testData)
    );

    expect(afterReducerOperation).toStrictEqual({
      id: testData.id,
      name: testData.name,
      markets: testData.markets
    });
  });
});