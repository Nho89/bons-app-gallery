import React from 'react'
import { Outlet } from "react-router-dom";
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';


const LayoutPublic = () => {
  return (
    <div style={{ minHeight:"100%",position:"relative",display: 'flex', flexDirection: 'column' }}>
        <Nav/>
        {/* <main> */}
        <Outlet/>
        {/* </main> */}
        <Footer/>
    </div>
    
  )
}

export default LayoutPublic