import React from 'react'
import FlipCard from './Flipcard'

function CustomEvents() {
  return (
    <div className='flex flex-col p-4 items-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 flex-grow'>
        <FlipCard index={1} EventName={"Session 1"} />
        <FlipCard index={2} EventName={"Session 2"} />
        <FlipCard index={3} EventName={"Session 3"} />
        <FlipCard index={4} EventName={"Session 4"} />
      </div>
    </div>
  )
}

export default CustomEvents   
