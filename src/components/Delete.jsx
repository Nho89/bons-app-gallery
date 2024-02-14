import React from 'react'
import {deleteData} from '../services/bonsaisServe'

const Delete = ({id}) => {
  console.log(id)
  const bonsaiDelete = () => {
    deleteData(id)}
  return (
    <>
    <div>
        <button onClick={bonsaiDelete}>Borrar</button>
    </div>
    </>
  )
}

export default Delete