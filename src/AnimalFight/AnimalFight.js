import React from 'react';
import './AnimalFight.css';

export default function AnimalFight({ setLionSize, setUnicornSize, lionSize, unicornSize }) {



  return (
    <div className="fight">
      <div className="lion">
        <img src={'./images/lion.jpeg'} style={{ width: lionSize * 10 }}></img>
        <div className="buttons">
          <button className='center' onClick={() => setLionSize(lionSize + 1)}>The lion is growing!</button>
          <button onClick={() => setUnicornSize(unicornSize - 1)}>The lion is munching down on the unicorn!</button>
        </div>
      </div>
      <div className="unicorn">
        <img src={'./images/unicorn.jpeg'} style={{ width: unicornSize * 10 }}></img>
        <div>
          <button className='center' onClick={() => setUnicornSize(unicornSize + 1)}>The unicorn is growing!</button>
          <button onClick={() => setLionSize(lionSize - 1)}>The unicorn is munching down on the lion!</button>
        </div>

      </div>

    </div>
  );
}