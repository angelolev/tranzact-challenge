import { describe, it, expect, test, beforeEach } from 'vitest';
import reducer, { addEvents } from '../../src/redux/states/events'
import { IBet } from '../../src/models/bet'

describe('Events reducer tests', ()=> {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual([])
  })
  
  it('should handle an Event being added to events list', () => {
    const previousState: IBet[] = []
  
    expect(reducer(previousState, addEvents([{id: 'EVT_50', name: "Time to first goal", markets: [] }])))
    .toEqual([{id: 'EVT_50', name: "Time to first goal", markets: [] }]
    )
  })
})

