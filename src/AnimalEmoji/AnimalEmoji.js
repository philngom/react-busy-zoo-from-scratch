import React from 'react';
import Parade from '../Parade/Parade';
import './AnimalEmoji.css';

export default function AnimalEmoji({ animalsArray, setAnimalsArray }) {

  function handleAddAnimalClick(e) {
    setAnimalsArray([...animalsArray, `${e.target.innerHTML}`]);
  }

  return (
    <div className='animals'>
      <Parade animals={animalsArray}/>
      <div className='add-animal-buttons'>
        <button onClick={ handleAddAnimalClick }>lion</button>
        <button onClick={ handleAddAnimalClick }>lizard</button>
        <button onClick={ handleAddAnimalClick }>giraffe</button>
        <button onClick={ handleAddAnimalClick }>dog</button>
        <button onClick={ handleAddAnimalClick }>bird</button>
      </div>
    </div>
  );
}
