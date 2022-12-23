import betsSlice, { addBet, removeBet } from "../../src/redux/states/bets";
import { describe, it, expect } from 'vitest';

describe("Bet slice tests", () => {
  const initialState = []
  it("initialize slice with initialValue", () => {
    const betsSliceInit = betsSlice(initialState, { type: "unknown" });
    expect(betsSliceInit).toBe(initialState);
  });

  it("should add a new Bet", () => {
    const testData = {
      id: 'BET-01',
      name: "Bayern Munich",
      price: 2.3,
    };

    const afterReducerOperation = betsSlice(
      initialState,
      addBet(testData)
    );

    expect(afterReducerOperation).toStrictEqual([{
      id: testData.id,
      name: testData.name,
      price: testData.price
    }]);
  });

  it("should remove a Bet", () => {
    const tempBets = [{
        id: 'BET-01',
        name: "Bayern Munich",
        price: 2.3,
    }]
    
    const testData = {
      id: 'BET-01',
      name: "Bayern Munich",
      price: 2.3,
    };

    const afterReducerOperation = betsSlice(
      tempBets,
      removeBet(testData)
    );

    expect(afterReducerOperation).toStrictEqual([]);
  });
});