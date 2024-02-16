import React from 'react'
import Delete from '../Delete'
import Modal from '../modal/Modal'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Card = ({bonsais}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()
  return (
   <>
   {
      bonsais.map(bonsai =>{
        return(
      <div key={bonsai.id} className='Card-bons' style={{textAlign:"center", /* height:"100vh", */width:"100%", display:"flex", alignItems:"center", justifyContent:"end", flexDirection:"column", gap:"20px"}}>
      
        <div style={{width: "70%", display:"flex", flexWrap:"wrap", marginTop:"20%"}}><img src={bonsai.image} alt="" style={{maxWidth:"100%", textAlign:"center"}}/>
        </div>
      
        <div style={{display: "flex", flexDirection:"column",alignItems:"center" ,justifyContent:"center",width:"98%",backgroundColor:"#044C40",  borderRadius:"20px"/* , height:"400px" */}}>
        <h3 style={{color:"#F6F0BE", fontSize:"3em"}}>{bonsai.especie}</h3>
        <div style={{display:"flex", gap:"100px", color:"#F6F0BE", fontSize:"1em"}}>
        <p>Trasplantado</p>
        <p>Abonado</p>  
        </div>
        
        <div style={{display:"flex", gap:"20px", alignItems:"center"}} >
            <div style={{backgroundColor:"#F6F0BE",borderRadius:"20px", width:"180px"}}>
                <p>{bonsai.trasplantado}</p>
            </div>
            <div style={{backgroundColor:"#F6F0BE",borderRadius:"20px", width:"180px"}}>
                <p>{bonsai.abonado}</p>
            </div>
        </div>
        <div style={{display: "flex", marginTop:"20px", marginBottom:"40px", gap:"10px"}}>
            <button onClick={()=> setIsModalOpen(true)}>Detalles</button>
            <button classname = "modify" type="button" onClick = {()=>navigate(`/update/${bonsai.id}`)}>Modificar</button>
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