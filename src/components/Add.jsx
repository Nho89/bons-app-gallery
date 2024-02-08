import React from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/create')
  }

  return (
    <>
      <button type="button" onClick={onClick}><img src="./src/assets/Vector-añadir.png" alt="" style={{border:"0"}} /></button>
    </>
  )
}

export default Add