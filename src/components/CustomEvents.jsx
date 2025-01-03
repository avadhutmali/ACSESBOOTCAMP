import React from 'react'
import FlipCard from './Flipcard'

function CustomEvents() {
  return (
    <div className='flex flex-col p-4 items-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 flex-grow'>
        <FlipCard EventName={"Session 1"} />
        <FlipCard EventName={"Session 2"} />
        <FlipCard EventName={"Session 3"} />
        <FlipCard EventName={"Session 4"} />
      </div>
    </div>
  )
}

export default CustomEvents   
