import React from 'react'
import StatisticsCard from './StatisticsCard'

export default function Statistics({ winners }) {
  return (
    <div className='container'>
      <h1 className='text-center p-3'>Player statistics</h1>
      <StatisticsCard
        name='Total games'
        value={winners.length}
      />
      <StatisticsCard
        name='Total times first player won'
        value={winners.filter(e => e === 1).length}
      />
      <StatisticsCard
        name='Average times first player won'
        value={(100 * (winners.length === 0 ? 0 : winners.filter(e => e === 1).length / winners.length)).toFixed(2) + ' %'}
      />
      <StatisticsCard
        name='Total times second player won'
        value={winners.filter(e => e === 2).length}
      />
      <StatisticsCard
        name='Average times second player won'
        value={(100 * (winners.length === 0 ? 0 : winners.filter(e => e === 2).length / winners.length)).toFixed(2) + ' %'}
      />
      <div className='mt-2'>
        <h2 className='text-center p-2'>History</h2>
        <div className='d-flex '>
          {
            winners.slice().reverse().map(e => {
              return (
                <div className='streak-item mr-2 '>{e}</div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
