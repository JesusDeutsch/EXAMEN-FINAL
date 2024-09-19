import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {

  const x = 42

    return (

      <div>
        <ComponentB x={x}/>
      </div>


      )
    }

export default ComponentA