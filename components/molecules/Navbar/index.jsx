import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white sticky top-0 z-50 shadow-sm'>
      <div className='wrapper'>
        <div className='flex flex-col md:flex-row justify-center md:items-center md:justify-between h-20'>
          <div className='text-slate-600 font-semibold'>UUT BUDIARTO</div>
          <div className='text-sm mt-2 md:mt-0'>TEST FRONTEND MYSOOLTAN</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
