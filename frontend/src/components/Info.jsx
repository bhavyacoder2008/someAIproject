import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useEffect } from 'react';

const Info = () => {
  const heading = useRef();


  useEffect(()=> {
    gsap.from(heading.current , {
      duration: 1,
      opacity: 0,
      scale: 0.5,
      delay: 0.5,
    })
  })


  return (
    <div className='bg-amber-500'>
        <h1 className='text-center text-lg sm:text-5xl p-2 sm:p-4' ref={heading}>Welcome to undisclosed name</h1>

        <div className='bg-red-500 text-center text-xl sm:text-8xl font-serif p-6 sm:p-12'>
          Build Your Resume for Free <br /> <span className='text-blue-200 p-4 m-4'>With the help of AI</span>
        </div>

    </div>
  )
}

export default Info