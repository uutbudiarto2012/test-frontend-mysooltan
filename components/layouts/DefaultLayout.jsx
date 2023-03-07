import React from 'react'
import Footer from '../molecules/Footer'
import Navbar from '../molecules/Navbar'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='wrapper'>{children}</main>
      <Footer />
    </>
  )
}

export default DefaultLayout
