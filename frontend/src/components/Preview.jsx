import React from 'react'

const Preview = ({name , email , phone}) => {
  return (
            <div className='flex justify-center items-center p-5'>
            <div className='bg-white w-150 p-5 h-[70%]'>
                {name ? <div className='text-3xl '>{name.toUpperCase()}</div> : (<h1 className='sm:text-3xl'>
                    YOUR NAME 
                </h1>)}<br />
                {/* email and phone and portfolio if its there */}
                <div className='flex flex-row gap-4 w-120'>
                    {email ? <p className='text-nowrap text-lg w-1/2 mr-4'>{email}</p>:  <p className='text-lg text-nowrap w-1/2 mr-4'>yourEmail@example.com</p>}
                    {phone ? <p className='text-nowrap text-lg w-1/2'> +91 {phone}</p>:  <p className='text-lg text-nowrap w-1/2'>+91 99999999999</p>}
                </div>
  
            </div>
        </div>
  )
}

export default Preview