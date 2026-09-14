import React, { useState } from 'react';

function HogwartsSortingHat() {
  const [house, setHouse] = useState(null);

  function handleClick() {
    const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    setHouse(randomHouse)
    
  }

  function getHouseColor(house) {
    switch (house) {
      case 'Gryffindor':
        return '#7F0909';
      case 'Hufflepuff':
        return '#FFC500';
      case 'Ravenclaw':
        return '#0E1A40';
      case 'Slytherin':
        return '#1A472A';
      default:
        return '#FFFFFF';
    }
  }
  document.body.style.background = getHouseColor(house)

  return (
    <div className="hogwarts-sorting-hat">
      {!house && <button onClick={handleClick}>Sort Me!</button>}
      {house && (
        <>
          <h1 data-testid="house-name">You have been sorted into {house}!</h1>
          <p>Welcome to {house} house at Hogwarts School of Witchcraft and Wizardry.</p>
        </>
      )}
    </div>
  );
};

export default HogwartsSortingHat;
