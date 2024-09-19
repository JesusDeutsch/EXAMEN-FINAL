'use client'
import React, { useState } from 'react'
import ComponentC from './ComponentC'



const ComponentB = () => {
    
  const [x , setX] = useState(42) 

    return (
      

        <div>
        <ComponentC x={x}/> 
      </div>
  
    )
  }

export default ComponentB