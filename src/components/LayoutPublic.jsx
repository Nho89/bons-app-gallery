import React from 'react'
import { Outlet } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';


const LayoutPublic = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default LayoutPublic