import React from 'react'
import { Outlet } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';


const LayoutPublic = () => {
  return (
    <div style={{ minHeight:"100%",position:"relative",display: 'flex', flexDirection: 'column' }}>
        <Nav/>
        <main style={{flex: 1, padding: '2rem' }}>
        <Outlet/>
        </main>
        <Footer/>
    </div>
    
  )
}

export default LayoutPublic