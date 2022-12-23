import React from 'react'
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../src/utilities';
import { Event } from '../../src/components/Event/'
import { screen } from '@testing-library/react';

describe('Event component tests', () => {
  it("renders Event component", () => {
    
    renderWithProviders(<Event 
      id="EVT-1" 
      name="Team to Win" 
      markets={[]}
      isVisible />);

      expect(screen.getByText(`⚽ Team to Win`));
  });
});
