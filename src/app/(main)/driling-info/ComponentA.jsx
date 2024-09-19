import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = ({x, currentX, incrementX}) => {


  return (
    <div className='flex flex-col  border p-4 text-left m-4' >
      <h1 className="text-2xl mb-2">ComponenteA</h1>
      <p className='ml-4'>x={x}</p>

      <ComponentB x={currentX} xb={x} incrementX={incrementX}/>
     
    </div>
  )
}

export default ComponentA