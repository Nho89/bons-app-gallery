import React from 'react'
import { useNavigate } from 'react-router-dom'

const Modify = () => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate('/update')
    }

  return (
    <>
    <button type="button" style={{width: "25vw", backgroundColor:"#F4DC5E", color: "#000000", padding:"6px", borderRadius:"10px", fontFamily: 'Poppins', fontSize: "1rem", border: "none", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}  onClick={onClick}>Modificar</button>
    </>
  )
    
}

export default Modify
