import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import userEvent from "@testing-library/user-event";

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import House from '.'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('House', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      points: {
        Gryffindor: 10,
        Hufflepuff: 20,
        Ravenclaw: 30,
        Slytherin: 40
      }
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the house name and points', () => {
    render(
      <Provider store={store}>
        <House house="Gryffindor" points={10}/>
      </Provider>
    );
    const houseName = screen.getByText(/Gryffindor/i);
    const housePoints = screen.getByText(/points: 10/i);
    expect(houseName).toBeInTheDocument();
    expect(housePoints).toBeInTheDocument();
  });

  it('displays correct points', async () => {
    render(
      <Provider store={store}>
        <House house="Gryffindor" points="10"/>
      </Provider>
    );
    const points = screen.getByRole('points');
    const addButton = screen.getByRole('button', { name: '+ 10' });
    await userEvent.click(addButton);
    expect(points.textContent).toBe('Points: 10');
  })
});

