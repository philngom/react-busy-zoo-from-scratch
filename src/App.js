import './App.css';
import { useState } from 'react';
import AnimalFight from './AnimalFight/AnimalFight';
import Shop from './Shop/Shop';

function App() {
  const [unicornSize, setUnicornSize] = useState(10);
  const [lionSize, setLionSize] = useState(10);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="App">
      <AnimalFight unicornSize={unicornSize} setUnicornSize={setUnicornSize} lionSize={lionSize} setLionSize={setLionSize}/>
      <Shop isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div>third row</div>
    </div>
  );
}

export default App;
