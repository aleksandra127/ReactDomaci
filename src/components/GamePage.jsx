import React, { useEffect, useState } from 'react'
import PlayerPanel from './PlayerPanel';

export default function GamePage({ onEndGame }) {
  const [usedNumbers, setUsedNumbers] = useState([]);
  const sum = usedNumbers.reduce((acc, val) => acc + val, 0);
  const firstPlayerTurn = usedNumbers.length % 2 === 0;
  const onAddNumber = val => {
    setUsedNumbers(prev => [...prev, val]);
  }

  useEffect(() => {
    if (sum > 100) {
      onEndGame(firstPlayerTurn ? 2 : 1);
      alert(`Player ${firstPlayerTurn ? 'two' : 'one '} has won`)
    }
  }, [sum]);

  return (
    <div className='container'>
      <h1 className='p-2 text-center'>Game</h1>
      <div className='row'>
        <div className='col-4'>
          <h2>First player</h2>
          <PlayerPanel
            disabled={sum > 100 || !firstPlayerTurn}
            onSelectNumber={onAddNumber}
          />
        </div>
        <div className='col-4'>
          <h2 className='text-center'>Sum</h2>
          <div className='mt-2'>
            {
              usedNumbers.map((val, i) => {
                return (
                  <div className={`p-2 text-${i % 2 == 0 ? 'left' : 'right'}`} key={val}>
                    {val}
                  </div>
                )
              })
            }
          </div>
          <div className='mt-2 pr-4 sum'>
            {sum}
          </div>
        </div>
        <div className='col-4'>
          <h2 className='text-right'>Second player</h2>
          <PlayerPanel
            disabled={sum > 100 || firstPlayerTurn}
            onSelectNumber={onAddNumber}
          />
        </div>
      </div>
    </div>
  )
}
