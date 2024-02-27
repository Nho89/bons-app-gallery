import React from 'react'
import Add from './Add'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav className='navbar' style={{display: "flex", justifyContent: "space-between", padding:"20px"}} >
        <Link to="/" replace className='logo-nav'><img src="../src\assets\images\Bonsai.png" alt="" /></Link>
        <ul className="contain-menu">
          {/* <li className="header-text">Home</li> */}
          <li className="header-text">Mis bonsáis</li>
          <Link to="/create" replace className="header-text"><li >Añadir</li></Link>
          <li className="header-text">Detalles</li>
        </ul>
        <Add className="add-nav"/> 
    </nav>
    </>
    
  )
}

export default Nav