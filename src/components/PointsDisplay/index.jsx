import React from 'react';
import House from '../House';
import { useSelector } from 'react-redux';

function PointsDisplay() {
    const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw','Slytherin']
    const points = [] //Must Update
    const maxPoints = null //Must Update
    const winner = null //Must Update
    const colors = {
      Gryffindor: '#7F0909',
      Hufflepuff: '#FFC500',
      Ravenclaw: '#0E1A40',
      Slytherin: '#1A472A'
    };

    return (
    <div data-testid="app" className="app" style={{ backgroundColor: colors[winner] }}>
      <h1 className="title"></h1>
      <div role='article' className="houses">
        {houses.map(house => (
           <House key={house} house={house} points={points[house]} /> 
        ))}
      </div>
    </div>
  );
};

export default PointsDisplay;
