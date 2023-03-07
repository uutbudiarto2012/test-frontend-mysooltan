import React from 'react'

const Button = ({ label, ...rest }) => {
  return (
    <button
      {...rest}
      className='py-2 px-5 text-sm bg-cyan-400 rounded-lg text-white'
    >
      {label}
    </button>
  )
}

export default Button
