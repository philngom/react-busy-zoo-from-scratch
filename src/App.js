import './App.css';
import { useState } from 'react';
import AnimalFight from './AnimalFight/AnimalFight';
import Shop from './Shop/Shop';
import AnimalEmoji from './AnimalEmoji/AnimalEmoji';


function App() {
  const [unicornSize, setUnicornSize] = useState(10);
  const [lionSize, setLionSize] = useState(10);
  const [isOpen, setIsOpen] = useState(true);
  const [animalsArray, setAnimalsArray] = useState(['lion', 'cow']);

  return (
    <div className="App">
      <AnimalFight unicornSize={unicornSize} setUnicornSize={setUnicornSize} lionSize={lionSize} setLionSize={setLionSize}/>
      <Shop isOpen={isOpen} setIsOpen={setIsOpen}/>
      <AnimalEmoji animalsArray={animalsArray} setAnimalsArray={setAnimalsArray}/>
    </div>
  );
}

export default App;
