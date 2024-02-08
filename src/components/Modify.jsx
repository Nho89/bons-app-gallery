import React from 'react'
import { useNavigate } from 'react-router-dom'

const Modify = () => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate('/update')
    }

  return (
    <>
    <button type="button" onClick={onClick}>Modificar</button>
    </>
  )
    
}

export default Modify
