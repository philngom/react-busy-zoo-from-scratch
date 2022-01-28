import React from 'react';
import './Parade.css';

export default function Parade({ animals }) {
  return (
    <div className="parade">
      {
        animals.map((animal, i) =>
          <p key={animal + i} className='animal'>{
            animal === 'lion' ? '🦁' :
              animal === 'lizard' ? '🦎' :
                animal === 'giraffe' ? '🦒' :
                  animal === 'dog' ? '🐕' :
                    animal === 'bird' ? '🐦' : ''

          }</p>
        )

      }
    </div>
  );
}