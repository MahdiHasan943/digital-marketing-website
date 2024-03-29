import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer/Footer'
import Navbar from '../component/header/navbar'

const Main = () => {
  return (
      <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
      </div>
  )
}

export default Main