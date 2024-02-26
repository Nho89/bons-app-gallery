import React from 'react'
import {deleteData} from '../services/bonsaisServe'
import { useNavigate } from 'react-router-dom'
import "../components/card/Card.css"

const Delete = ({id}) => {
  const navigate = useNavigate()
  /* console.log(id) */
  const bonsaiDelete = () => {
    deleteData(id)
    navigate(0)  
  }
  return (
    <>
    <div>
        <button className='buttons-card-delete'  onClick={bonsaiDelete}>Borrar</button>
    </div>
    </>
  )
}

export default Delete