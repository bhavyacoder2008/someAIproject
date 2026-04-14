import Info from '../components/Info'

const Main = () => {
  return (
    <>
      <div className='flex min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-indigo-900'>
        <div className=' w-full p-6'>
          <Info />
        </div>
      </div>
    </>
  )
}

export default Main