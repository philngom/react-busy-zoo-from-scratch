import './App.css';
import { useState } from 'react';
import AnimalFight from './AnimalFight/AnimalFight';

function App() {
  const [unicornSize, setUnicornSize] = useState(10);
  const [lionSize, setLionSize] = useState(10);

  return (
    <div className="App">
      <AnimalFight unicornSize={unicornSize} setUnicornSize={setUnicornSize} lionSize={lionSize} setLionSize={setLionSize}/>
      <div>second row</div>
      <div>third row</div>
    </div>
  );
}

export default App;
