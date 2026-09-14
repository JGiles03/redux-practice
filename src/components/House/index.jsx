import React from 'react';
import { useDispatch } from 'react-redux';
import { addPoints, removePoints } from '../../actions';

function House({ house, points }) {
  const dispatch = useDispatch();

  function handleAddPoints() {
    dispatch(addPoints(house, 10));
  }

  function handleRemovePoints() {
    dispatch(removePoints(house, 10));
  }

  return (
    <div className="house">
      <h2 className="house-name"></h2>
      <p role="points" className="house-points">Points: </p>
      <div className="buttons">
        
      </div>
    </div>
  );
};

export default House;
