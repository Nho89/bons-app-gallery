import React from 'react'
import Add from '../Add'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav className='navbar' style={{display: "flex", justifyContent: "space-between", padding:"20px"}} >
        <Link to="/"  className='logo-nav'><img src="../src\assets\images\logo-bonsai-app-gallery.svg" alt="logo" /></Link>
        <ul className="contain-menu">
          <Link to="/" className="header-text"><li >Mis bonsáis</li></Link>
          <Link to="/create"  className="header-text"><li >Añadir</li></Link>
          <Link to="/details" className="header-text"><li >Anotaciones</li></Link>
        </ul>
        <Add className="add-nav"/> 
    </nav>
    </>
    
  )
}

export default Nav