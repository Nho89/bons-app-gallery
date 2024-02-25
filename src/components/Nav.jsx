import React from 'react'
import Add from './Add'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav className='navbar' style={{display: "flex", justifyContent: "space-between", padding:"20px"}} >
        <Link to="/" replace><img src="" alt="" />logo</Link>
        <Add/> 
    </nav>
    </>
    
  )
}

export default Nav