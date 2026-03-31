import React from 'react'
import Info from '../components/Info'

const Main = () => {
  return (
    <>
      <div className='flex'>
        <div className='w-1/5'></div>
        <div className='min-w-4/5 w-full'>
          <Info />
        </div>
      </div>
    </>
  )
}

export default Main