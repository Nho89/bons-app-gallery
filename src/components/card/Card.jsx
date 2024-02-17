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
        
        <div className='dates-card-box' style={{display:"flex", gap:"20px", alignItems:"center"}} >
            <div style={{backgroundColor:"#F6F0BE",borderRadius:"20px", width:"180px"}}>
                <p>{bonsai.trasplantado}</p>
            </div>
            <div style={{backgroundColor:"#F6F0BE",borderRadius:"20px", width:"180px"}}>
                <p>{bonsai.abonado}</p>
            </div>
        </div>

        <div style={{display: "flex", marginTop:"20px", marginBottom:"40px", gap:"10px"}}>
            <button onClick={()=> setIsModalOpen(true)}>Detalles</button>
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