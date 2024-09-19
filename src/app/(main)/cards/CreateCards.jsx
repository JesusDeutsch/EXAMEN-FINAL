'use client'
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa'; // Importa el icono que deseas usar

const CardGenerator = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [cards, setCards] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { title, description, location };
    setCards([...cards, newCard]);
    setTitle('');
    setDescription('');
    setLocation('');
  };

  return (
    <div className='flex flex-col items-center'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-4 border-[2px] border-blue-700 rounded'>
        <h1>Input form</h1>

        <label htmlFor='title'>Enter Name</label>
        <input
          type='text'
          placeholder='Name'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='p-2 border-[1px] border-gray-300 rounded'
        />
        <label htmlFor='description'>Enter College Name</label>
        <input
          type='text'
          placeholder='College'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='p-2 border-[1px] border-gray-300 rounded'
        />
        <label htmlFor='location'>Enter Location</label>
        <input
          type='text'
          placeholder='Location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className='p-2 border-[1px] border-gray-300 rounded'
        />
        <button type='submit' className='p-2 bg-blue-700 text-white rounded'>Generar Carta</button>
      </form>

      <div className='flex flex-col gap-4 mt-4'>
        <h1>Generated Card</h1>
        {cards.map((card, index) => (
          <div key={index} className='border-[1px] border-gray-300 p-4 bg-gray-400 rounded flex items-center gap-2'>
            <FaUser size={100} className='text-blue-700' /> 
            <div className='flex flex-col bg-white p-4 min-w-[300px]'>
              <h2 className='text-lg font-bold'>{card.title}</h2>
              <div className='flex flex-col '>
              <p>{card.description}</p>
              <p>{card.location}</p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGenerator;