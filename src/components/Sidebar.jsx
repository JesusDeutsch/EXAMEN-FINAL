import React from 'react'
import { LiaIdCardSolid } from "react-icons/lia";
import { FaRegClock } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { RiGalleryView2 } from "react-icons/ri";
import Link from 'next/link';

const sideBar = () => {
  return (
    <div className='flex flex-col  bg-black text-white h-screen w-[300px] p-4 gap-10'>

      <h1 className='flex flex-col items-center justify-center w-full bg-blue-700 p-2 rounded-full text-white text-md'>
        <span>Examen</span> 
        <span>Final</span>
      </h1>
      <div>
        <ul className='flex flex-col gap-4'>
          <li>
            <Link href={'/cards'} className='flex gap-2 cursor-pointer hover:scale-110 transition-all'> <LiaIdCardSolid size={25}/>Card Generator
            </Link></li>
          <li className='flex items-center gap-2'>
          <Link href={'/clock'} className='flex gap-2 cursor-pointer hover:scale-110 transition-all'><FaRegClock size={25}/>Digital Clock</Link>
          </li>
          <li >
          <Link href={'/driling-info'} className='flex gap-2 cursor-pointer hover:scale-110 transition-all'><FaInfoCircle size={25}/>Driling Info
          </Link></li>
          <li className='flex items-center gap-2'>
          <Link href='/card-gallery' className='flex cursor-pointer gap-2 hover:scale-110 transition-all'> <RiGalleryView2 size={25}/> Galeria de cartas</Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default sideBar