import { describe, it, expect } from 'vitest';
import { addPoints, removePoints } from './actions';

describe('addPoints action creator', () => {
  it('returns an object with the type "ADD_POINTS" and the house and points properties', () => {
    const action = addPoints('Gryffindor', 10);
    expect(action).toEqual({
      type: 'ADD_POINTS',
      house: 'Gryffindor',
      points: 10
    });
  });
});

describe('removePoints action creator', () => {
  it('returns an object with the type "REMOVE_POINTS" and the house and points properties', () => {
    const action = removePoints('Hufflepuff', 5);
    expect(action).toEqual({
      type: 'REMOVE_POINTS',
      house: 'Hufflepuff',
      points: 5
    });
  });
});





