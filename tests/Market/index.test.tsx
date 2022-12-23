import React from 'react'
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import { renderWithProviders } from '../../src/utilities';
import { Market } from '../../src/components/Event/Market'
import { Events } from '../../src/data/events'
import { screen } from '@testing-library/react';
import { findBet } from '../../src/utilities'

describe('Market component tests', () => {
    beforeEach(()=> {
        renderWithProviders(<Market id="MKT_1" name="Team to win" selections={Events[0].markets[0].selections} />);
    })

    afterEach(()=> {
        vi.restoreAllMocks()
    })

    vi.mock('../../src/components/Event/Selection/Selection.tsx', () => ({
        default: ()=> <div>Selection</div>
    }))

    vi.mock('../../src/utilities/findBet.utility.ts', () => {
        const state = [
            {
                id: "SEL_1",
                name: "Real Madrid",
                price: 1.23
            },
            {
                id: "SEL_2",
                name: "Barcelona",
                price: 2.05
            }
        ]
        
        const findBet = vi.fn();
        findBet.mockResolvedValue(state);
        return {
            findBet
        }
    })


  it("renders Event component", () => {
    
    expect(screen.getByText(`🏆 Team to win`));
    // expect(mockFindBet).toHaveBeenCalled()
  });
});
