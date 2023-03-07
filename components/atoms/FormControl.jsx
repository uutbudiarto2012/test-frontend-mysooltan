import React from 'react'

const FormControl = ({ placeholder, ...rest }) => {
  return (
    <div className='border flex p-2 bg-white rounded-lg focus-within:border-cyan-300'>
      <input
        placeholder={placeholder}
        {...rest}
        type='text'
        className='w-full outline-none bg-transparent'
      />
    </div>
  )
}

export default FormControl
