import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Base({children}) {
  return (
    <div>
        <Navbar/>
            {children}
        <Footer/>
    </div>
  )
}
