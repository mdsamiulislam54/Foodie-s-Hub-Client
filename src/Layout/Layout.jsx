import React from 'react'
import Navbar from '../Components/Header/Navbar'
import { Outlet, useLocation } from 'react-router'
import Footer from '../Components/Footer/Footer'

const Layout = () => {
  const location = useLocation()
 
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <footer className={` ${location.pathname === '/*' ? 'hidden' : 'block'}`}>
          <Footer/>
        </footer>
    </div>
  )
}

export default Layout