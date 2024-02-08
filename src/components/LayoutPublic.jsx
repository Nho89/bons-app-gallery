import React from 'react'
import { Outlet } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';


const LayoutPublic = () => {
  return (
    <div>
        <Nav>soy un nav</Nav>
        <Outlet/>
        <Footer>soy un footer</Footer>
    </div>
  )
}

export default LayoutPublic