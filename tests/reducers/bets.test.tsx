import { describe, it, expect, test, beforeEach } from 'vitest';
import reducer, { addBet, removeBet } from '../../src/redux/states/bets'
import { IBet } from '../../src/models/bet'

describe('Bet reducer tests', ()=> {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual([])
  })
  
  it('should handle a bet being added to bets list', () => {
    const previousState: IBet[] = []
  
    expect(reducer(previousState, addBet({id: 'bet-123', name: "Barcelona", price: 1.4 }))).toEqual([
      { id: 'bet-123', name: "Barcelona", price: 1.4 }]
    )
  })
  
  it('should handle a bet being added to an existing bet list', () => {
    const previousState: IBet[] = [
      { id: 'bet-123', name: "Barcelona", price: 1.4 }
    ]
  
    expect(reducer(previousState, addBet({ id: 'bet-124', name: "Real Madrid", price: 2.1 }))).toEqual([
      { id: 'bet-123', name: "Barcelona", price: 1.4 },
      { id: 'bet-124', name: "Real Madrid", price: 2.1 }
    ])
  })
  
  it('should handle a bet being removed from an existing bet list', () => {
    const previousState: IBet[] = [
      { id: 'bet-123', name: "Barcelona", price: 1.4 }
    ]
  
    expect(reducer(previousState, removeBet({ id: 'bet-123', name: "Barcelona", price: 1.4 }))).toEqual([])
  })
})

