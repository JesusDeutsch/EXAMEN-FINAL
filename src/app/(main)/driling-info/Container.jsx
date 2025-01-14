"use client"
import React, { useState } from 'react'
import ComponentA from './ComponentA';

const Container = () => {
    const [x, setX] = useState(42);
    const [currentX, setCurrentX] = useState(x);
  
    const incrementX = () => {
      setCurrentX((prevX) => prevX + 1);
    };
  
    return (
      <div className=''>
        <ComponentA x={x} currentX={currentX} incrementX={incrementX} />
      </div>
    );
}

export default Container