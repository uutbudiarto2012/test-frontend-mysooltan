import React from 'react'

const Loader = ({ count = 4 }) => {
  const sequence = [...Array(count).keys()]
  return (
    <>
      {sequence.map(item => (
        <div
          key={item}
          className='p-3 animate-pulse rounded-lg shadow bg-slate-50 hover:scale-105 transition-all duration-300'
        >
          <div className='mb-2'>
            <div className='md:flex gap-2 my-1 text-xs md:text-sm mb-3'>
              <div className='w-12 h-3 rounded-xl bg-slate-400' />
              <div className='flex-1 h-3 rounded-xl bg-slate-400' />
            </div>
            <div className='h-2.5 rounded-xl bg-slate-400' />
          </div>
          <div className='flex mt-6 items-center gap-1 border-t pt-2'>
            <div className='w-10 h-10 border rounded-full bg-slate-400 relative' />
            <div className='text-xs md:text-sm flex flex-1 flex-col gap-2'>
              <div className='h-2 rounded-xl bg-slate-400' />
              <div className='h-2 rounded-xl bg-slate-400' />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Loader
