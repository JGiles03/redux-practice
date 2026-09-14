import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import PointsDisplay from '.';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('PointsDisplay', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      Gryffindor: 10,
      Hufflepuff: 20,
      Ravenclaw: 30,
      Slytherin: 40
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the title', () => {
    render(
      <Provider store={store}>
        <PointsDisplay />
      </Provider>
    );
    const title = screen.getByText(/Hogwarts House Points Manager/i);
    expect(title).toBeInTheDocument();
  });

  it('sets the background color to the winning house color', () => {
    render(
      <Provider store={store}>
        <PointsDisplay />
      </Provider>
    );
    expect(screen.getByTestId('app')).toHaveStyle({ backgroundColor: '#1A472A' });
  });

});