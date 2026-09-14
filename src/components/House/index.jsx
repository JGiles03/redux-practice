import React from 'react';
import { useDispatch } from 'react-redux';
import { addPoints, removePoints } from '../../reducers';

function House({ house, points }) {
  const dispatch = useDispatch();
  

  function handleAddPoints() {
    dispatch(addPoints({house: house, points: 10}));
  }

  function handleRemovePoints() {
    dispatch(removePoints({house: house, points: 10}));
  }

  return (
    <div className="house">
      <h2 className="house-name">{house}</h2>
      <p role="points" className="house-points">Points: {points}</p>
      <div className="buttons">
        <button onClick={handleAddPoints}> + 10 </button>
        <button onClick={handleRemovePoints}> - 10 </button>
      </div>
    </div>
  );
};

export default House;
