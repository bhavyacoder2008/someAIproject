import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Info = () => {
  const heading = useRef();
  const byrAI = useRef();
  const chooseATemplate = useRef();
  const btns = useRef();

  const navigate = useNavigate();

  const getOrCreateUser = async () => {
    try{
      const res = await axios.post("http://localhost:3000/user/getOrCreateUser" , {} , {withCredentials: true});
      console.log(res.data);
      navigate("/details1")
    }
    catch(err){
      console.log(err)
    }


  }

  useEffect(()=> {
    gsap.from(heading.current , {
      duration: 1,
      opacity: 0,
      scale: 0.5,
      delay: 0.5
    })
    gsap.from(byrAI.current , {
      delay: 1,
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut"
    })
    gsap.from(chooseATemplate.current , {
      delay: 2,
      x: -200,
      opacity: 0,
      duration: 1,
      color: "red"
    })
    gsap.from(btns.current , {
      delay: 2.5,
      x: -400,
      opacity: 0,
      duration: 0.5,
      stagger: 2,
    })
  })


  return (
    <div className=''>
        <h1 className='text-center text-2xl text-nowrap sm:text-7xl p-2 sm:p-4 text-[#ffeeff]' ref={heading}>Welcome to undisclosed name</h1>

        <div className=' text-center text-lg sm:text-6xl font-serif p-2 sm:p-12 text-gray-200' ref={byrAI}>
          Build Your Resume for Free <br /> <span className='text-blue-200 p-4 inline-block m-2 sm:m-12'>With the help of AI</span>
        </div>
        <div className='flex items-center justify-center flex-col'>
          
          {/* <div className=' text-white sm:text-8xl p-4 text-2xl' ref={chooseATemplate}>Choose a Template</div> */}
          {/* <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <div className='flex items-center justify-center flex-col bg-amber-300'><img src={classicTemplate} alt="" />  <span className='text-white text-lg sm:text-4xl'>Classic</span></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div> */}

          {/* </div> */}
        </div>
        <div className='flex items-center justify-center sm:flex-row sm:gap-8 gap-4' ref={btns}>
          <button className='text-lg sm:text-3xl bg-amber-400 hover:scale-95 cursor-pointer transition-all duration-200 p-2 sm:p-6' onClick={() => {

            getOrCreateUser()

          }}>Get started For Free</button>
          <button className='text-lg sm:text-3xl bg-amber-400 hover:scale-95 cursor-pointer transition-all duration-200 p-2 sm:p-6'>Get Premium</button>
        </div>

    </div>
  )
}

export default Info