import React from 'react'
import Add from './Add'
import "../../src/index.css"

const Nav = () => {
  return (
    <>
    <nav className='navbar'>
      <div>Logo</div>
      
      <div class="contain-menu">
            <p class="header-text">Home</p>
            <p class="header-text">Mis bonsáis</p>
            <p class="header-text">Añadir</p>
            <p class="header-text">Detalles</p>
      </div>
           
      <Add/> 
    </nav>
    </>
    
  )
}

export default Nav