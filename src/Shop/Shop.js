import React from 'react';
import './Shop.css';

export default function Shop({ isOpen, setIsOpen }) {
  return (
    <div className='shop'>
      <div className='door'>
        The shop is {isOpen ? 'open!' : 'closed!'}
      </div>
      <div>
        <button onClick={() => setIsOpen(true)}>Open Shop</button>
        <button onClick={() => setIsOpen(false)}>Close Shop</button>
      </div>
    </div>
  );
}