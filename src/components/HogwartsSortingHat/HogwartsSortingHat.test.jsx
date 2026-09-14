import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import HogwartsSortingHat from ".";

describe("SortingHat", () => {
  beforeEach(() => {
    render(<HogwartsSortingHat />);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders a 'Sort Me' button", () => {
    const sortMeButton = screen.getByRole('button', { name: /Sort me!/i });
    expect(sortMeButton).toBeInTheDocument();
  });

  it("displays a Hogwarts house name when the 'Sort Me' button is clicked", async () => {
    const sortMeButton = screen.getByRole('button', { name: /Sort me!/i });
    userEvent.click(sortMeButton);
    const houseName = await screen.findByTestId('house-name');
    expect(houseName).toBeInTheDocument();
  });

  it("changes the background color of the page to the house color", async () => {
    const sortMeButton = screen.getByRole('button', { name: /Sort me!/i });
    userEvent.click(sortMeButton);
    const houseName = await screen.findByTestId('house-name');
    const backgroundColor = document.body.style.backgroundColor;

    let mhc
    if(backgroundColor === 'rgb(127, 9, 9)' ||
    backgroundColor === 'rgb(255, 197, 0)' ||
    backgroundColor === 'rgb(14, 26, 64)' || 
    backgroundColor === 'rgb(26, 71, 42)'){
        mhc=true
    }else{
        mhc = false
    }
    expect(mhc).toBe(true)
  });
});