import React from 'react'

const NotFoundRepo = ({ type }) => {
  return (
    <div className='h-56 w-full bg-white flex flex-col justify-center items-center'>
      <div className='text-sm font-light text-red-500'>
        Public Repositories tidak ditemukan
      </div>
      {type === 'user' && (
        <>
          <div className='text-sm font-light text-red-500 mt-2 mb-3'>
            Username invalid!
          </div>
          <span className='text-cyan-400 text-sm font-semibold'>
            keyword adalah valid username github
          </span>
        </>
      )}
      {type === 'repo' && (
        <>
          <div className='text-sm font-light text-green-500 mt-2 mb-3'>
            Username valid
          </div>
          <span className='text-cyan-500 text-sm font-semibold'>
            Namun tidak memiliki pulic repository
          </span>
        </>
      )}
    </div>
  )
}

export default NotFoundRepo
