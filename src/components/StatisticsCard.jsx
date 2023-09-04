import React from 'react'

export default function StatisticsCard({ name, value }) {
  return (
    <div className='mt-3 card d-flex justify-content-between'>
      <div>
        {name}
      </div>
      <div className='statValue'>
        {value}
      </div>
    </div>
  )
}
