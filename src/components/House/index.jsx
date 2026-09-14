import React from 'react';
import { useDispatch } from 'react-redux';
import {  actions } from '../../actions'
import { bindActionCreators } from 'redux';

function House({ house, points }) {
  const dispatch = useDispatch();
  const { addPoints, removePoints } = bindActionCreators(actions, dispatch)

  function handleAddPoints() {
    addPoints(house, 10);
  }

  function handleRemovePoints() {
    removePoints(house, 10);
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
