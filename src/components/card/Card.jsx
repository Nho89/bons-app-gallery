import React from 'react'
import Modify from '../Modify';
import Delete from '../Delete';
import Modal from '../Modal'


const Card = ({bonsais}) => {
  return (
   <>
   {
      bonsais.map(bonsai =>{
        return(
      <div key={bonsai.id} className='Card-bons' style={{textAlign:"center", height:"80vh",width:"100%", display:"flex", alignItems:"center", justifyContent:"end", flexDirection:"column"}}>
      
        <div style={{width: "70%"}}><img src={bonsai.image} alt="" style={{maxWidth:"100%", textAlign:"center"}}/>
        </div>
      
        <div style={{display: "flex", flexDirection:"column",alignItems:"center" ,justifyContent:"center",width:"98%",backgroundColor:"#044C40",  borderRadius:"20px", height:"400px"}}>
        <h3 style={{color:"#F6F0BE", fontSize:"3em"}}>{bonsai.especie}</h3>
        <div style={{display:"flex", gap:"80px", color:"#F6F0BE", fontSize:"1em"}}>
        <p>{bonsai.trasplantado}</p>
        <p>{bonsai.abonado}</p>  
        </div>
        
        <div style={{display:"flex", gap:"20px", alignItems:"center"}} >
            <div style={{backgroundColor:"#F6F0BE",borderRadius:"20px", width:"180px"}}>
                <p>Fecha</p>
            </div>
            <div style={{backgroundColor:"#F6F0BE",borderRadius:"20px", width:"180px"}}>
                <p>Fecha</p>
            </div>
        </div>
        <div style={{display: "flex", marginTop:"20px", marginBottom:"40px"}}>
            <button>Detalles</button>
        <Modal/>
        <Modify/>
        <Delete id={bonsai.id}/>
        </div>
        
        </div>

      </div>  
    
    
    )
  })
  }
   
   </> 
  )
}



export default Card