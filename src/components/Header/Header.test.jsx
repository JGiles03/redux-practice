import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Header from '.';

describe('Header', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the Home link', () => {
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });

  it('renders the Points link', () => {
    const pointsLink = screen.getByRole('link', { name: /points/i });
    expect(pointsLink).toBeInTheDocument();
  });

  it('renders the Letter link', () => {
    const letterLink = screen.getByRole('link', { name: /letter/i });
    expect(letterLink).toBeInTheDocument();
  });
 
});
