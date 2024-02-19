import React from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/create')
  }

  return (
    <>
      <button style={{border: "none", outline: "none", background: "none"}} type="button" onClick={onClick}><img src="./src/assets/Vector-añadir.png" alt=""  /></button>
    </>
  )
}

export default Add