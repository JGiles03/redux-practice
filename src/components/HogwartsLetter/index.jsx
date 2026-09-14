import React, { useState } from 'react';

function HogwartsLetter() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="hogwarts-letter">
      <form>
        <h2>Enter Your Name:</h2>
        <input type='text' onChange={handleChange}></input>
      </form>
      
      {name && (
        <>
          <h2>Dear {name},</h2>
          <p>We are pleased to inform you that you have been accepted at Hogwarts School of Witchcraft and Wizardry.</p>
          <p>Yours sincerely,</p>
          <p>Minerva McGonagall</p>
          <p>Deputy Headmistress</p>
        </>
      )}
    </div>
  );
};

export default HogwartsLetter;
