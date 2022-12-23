import React from 'react'
import { describe, it, expect, vi } from 'vitest';
import { renderWithProviders } from '../../src/utilities';
import { EventsList } from '../../src/pages/Home/EventsList'
import { Events } from '../../src/data/events'
import { screen } from '@testing-library/react';

describe('Event component tests', () => {
    vi.mock('../../src/components/Event/Market/Market.tsx', () => ({
        default: ()=> <div>Market</div>
    }))

  it("renders Event component", () => {
    renderWithProviders(<EventsList events={Events} />);
    expect(screen.getByText(`⚽ Real Madrid vs Barcelona`));
  });
});
