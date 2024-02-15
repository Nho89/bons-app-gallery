import React from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/create')
  }

  return (
    <>
      <button type="button" onClick={onClick}  style={{border: "none", outline: "none", background: "none"}}><img src="./src/assets/Vector-añadir.png" alt="" /></button>
    </>
  )
}

export default Add