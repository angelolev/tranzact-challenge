import React from 'react'
import { beforeEach, describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../src/utilities';
import { Bet } from '../../src/components/SlideBet/Bet'
import { fireEvent, screen } from "@testing-library/react";

describe('Bet component tests', () => {
    beforeEach(() => {
        renderWithProviders(<Bet id='SEL_1' name='Barcelona' price={1.3} isSelected />);
    })

  it("renders Bet component", () => {
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
