import React from 'react'
import {deleteData} from '../services/bonsaisServe'

const Delete = ({id}) => {
  console.log(id)
  const handleDelete = () => {
    deleteData(id)}
  return (
    <>
    <div>
        <button onClick={handleDelete}>Borrar</button>
    </div>
    </>
  
  )
}

export default Delete