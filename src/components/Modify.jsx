import React from 'react'
import { useNavigate } from 'react-router-dom'

const Modify = ({id}) => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate(`/update/${id.toString()}`)
    }

  return (
    <>
    <button type="button" onClick={onClick}>Modificar</button>
    </>
  )
    
}

export default Modify
