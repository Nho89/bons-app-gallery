import React from 'react'
import Delete from '../Delete'
import Modify from '../Modify'
import Modal from '../modal/Modal'
import { useState } from 'react'


const Card = ({bonsais}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
   <>
   {
      bonsais.map(bonsai =>{
        return(
          //Este es el contenedor grande.
      <div key={bonsai.id} className='card-bonsai-container' style={{textAlign:"center", /* height:"100vh", */width:"100%", display:"flex", alignItems:"center", justifyContent:"end", flexDirection:"column", gap:"20px"}}> 
      
        <div className="image-card" style={{width: "70%", display:"flex", flexWrap:"wrap", marginTop:"20%"}}><img src={bonsai.image} alt="" style={{maxWidth:"100%", textAlign:"center"}}/>
        </div>
      
        <div className="card-box-turquoise" style={{display: "flex", flexDirection:"column",alignItems:"center" ,justifyContent:"center",width:"98%",backgroundColor:"#044C40",  borderRadius:"20px"/* , height:"400px" */}}>
        <h3 className="title-card-box" style={{color:"#F6F0BE", fontSize:"3em"}}>{bonsai.especie}</h3>
        <div style={{display:"flex", gap:"100px", color:"#F6F0BE", fontSize:"1em"}}>
        <p>Trasplantado</p>
        <p>Abonado</p>  
        </div>
        
        <div className="dates-card-box" style={{display:"flex", gap:"20px", alignItems:"center"}} >
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