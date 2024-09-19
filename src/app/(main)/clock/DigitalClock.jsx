'use client';
import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    
    <div className='flex flex-col items-center justify-center text-7xl text-green-600 bg-black h-[300px] max-w-[500px] p-10 rounded-3xl gap-5'>
        
        <h1 className='text-4xl text-white'>Digital Clock</h1>
      
      <div className='border-4 border-green-600 shadow-2xl rounded-xl p-8 font-mono'>
        {formatTime(time)}
      </div>
    </div>
  );
};

export default DigitalClock;
   






































