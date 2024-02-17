import React from 'react'
import Delete from '../Delete'
import Modify from '../Modify'
import Modal from '../modal/Modal'
import { useState } from 'react'
import './Card.css'


const Card = ({bonsais}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
   <>
   {
      bonsais.map(bonsai =>{
        return(
      
      <div key={bonsai.id} className='card-bonsai-container'> 
      
        <div className='card-image-bonsai'>
          
        </div>
      
        <div className='card-box-turquoise' >
        <h3 className='title-card-box' >{bonsai.especie}</h3>
        <img className='image-bonsai' src={bonsai.image} alt="La imagen del bonsai que sube el usuario" />
        <div className='card-text'>
        <p>Trasplantado</p>
        <p>Abonado</p>  
        </div>
        
        <div className='dates-card-input' >
            <div className='date-text'>
                <p>{bonsai.trasplantado}</p>
            </div>
            <div className='date-text'>
                <p>{bonsai.abonado}</p>
            </div>
        </div>

        <div style={{display: "flex", marginTop:"20px", marginBottom:"40px", gap:"10px"}}>
            <button style={{width: "25vw", backgroundColor:"#F69E92", color: "#000000", padding:"6px", borderRadius:"10px", fontFamily: 'Poppins', fontSize: "1rem", border: "none", boxShadow: "0 2px 4px rgba(0,0,0,0.2)"  }}  onClick={()=> setIsModalOpen(true)}>Detalles</button>
        <Modify/>
        <Delete id={bonsai.id}/>
        </div>
                <Modal isOpen = {isModalOpen} closeModal={()=> setIsModalOpen(false)}/>

        </div>

      </div>  
    
    
    )
  })
  }
   
   </> 
  )
}



export default Card