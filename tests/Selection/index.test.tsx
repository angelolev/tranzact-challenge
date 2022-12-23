import React from 'react'
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../src/utilities';
import { Selection } from '../../src/components/Event/Selection'
import { fireEvent, screen } from "@testing-library/react";

describe('Selection component tests', () => {
  it("renders Selection component", () => {
    renderWithProviders(<Selection id='SEL_1' name='Barcelona' price={1.3} isSelected />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it("verifies button has custom css class on 'selected' state", () => {
    const { container } = renderWithProviders(<Selection id='SEL_1' name='Barcelona' price={1.3} isSelected />);
    expect(container.getElementsByClassName('is--selected').length).toBe(1);
  });

  // it('verifies bet is being added when button is clicked', () => {
  //   const { container, getByTestId} = renderWithProviders(<Selection id='SEL_1' name='Barcelona' price={1.3} isSelected={true} />);
  //   const clickButton = getByTestId('SEL_1');
  //   fireEvent.click(clickButton);
  //   expect(container.getElementsByClassName('is--selected').length).toBe(1);
  // });
});
