import React, { useState } from 'react'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function PlayerPanel({ disabled, onSelectNumber }) {
  const [usedNumbers, setUsedNumbers] = useState([]);
  return (
    <div className='d-flex flex-wrap mt-2'>
      {
        numbers.map(val => {
          return (
            <button
              className='btn btn-secondary mb-2 mr-2'
              key={val}
              disabled={disabled || usedNumbers.includes(val)}
              onClick={() => {
                setUsedNumbers(prev => [...prev, val])
                onSelectNumber(val);
              }}>{val}</button>
          )
        })
      }
    </div>
  )
}
