import React from 'react'
import Add from './Add'

const Nav = () => {
  return (
    <>
    <nav className='navbar' style={{display: "flex", justifyContent: "space-between", padding:"20px"}} >
      <div >Logo</div>
           <Add/>
    </nav>
    </>
    
  )
}

export default Nav