import React from 'react'
import Footer from '../molecules/Footer'
import Navbar from '../molecules/Navbar'

const DefaultLayout = ({ children }) => {
  return (
    <div className='bg-slate-50'>
      <Navbar />
      <main className='wrapper'>{children}</main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
