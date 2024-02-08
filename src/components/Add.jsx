import React from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/create')
  }

  return (
    <>
      <button type="button" onClick={onClick}></button>
    </>
  )
}

export default Add