import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../assets/Ve"

const Add = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/create')
  }

  return (
    <>
      <button type="button" onClick={onClick}><img src="../Ve" alt="" /></button>
    </>
  )
}

export default Add