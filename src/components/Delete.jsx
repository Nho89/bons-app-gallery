import React from 'react'
import {deleteData} from '../services/bonsaisServe'

const Delete = ({id}) => {
  console.log(id)
  const bonsaiDelete = () => {
    deleteData(id)}
  return (
    <>
    <div>
        <button style={{width: "25vw", backgroundColor:"#000000", color: "#F6F0BE", padding:"6px", borderRadius:"10px", fontFamily: 'Poppins', fontSize: "1rem", border: "none", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}  onClick={bonsaiDelete}>Borrar</button>
    </div>
    </>
  )
}

export default Delete