import React, { useState } from 'react';
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import HogwartsLetter from '.';

describe('HogwartsLetter', () => {
  beforeEach(() => {
    render(<HogwartsLetter />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders a "Enter Your Name:" heading', () => {
    const heading = screen.getByRole('heading', { name: /enter your name:/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders an input field for entering the name', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('displays the name entered by the user', async () => {
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Harry Potter');
    const name = await screen.findByText(/dear harry potter,/i);
    expect(name).toBeInTheDocument();
  });

  it('does not display the letter if no name is entered', () => {
    const input = screen.getByRole('textbox');
    expect(screen.queryByText(/dear/i)).not.toBeInTheDocument();
    userEvent.type(input, ' ');
    expect(screen.queryByText(/dear/i)).not.toBeInTheDocument();
  });

});