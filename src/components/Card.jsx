import { useLoaderData } from 'react-router-dom';
import React from 'react'
import Acebuche2 from '../assets/images/Acebuche2.png';
import Modify from './Modify';
import Delete from './Delete';
import Modal from './Modal'

const getData = async () => {
  const response = await fetch('http://localhost:5173/server/db.json');
  const data = await response.json();
  console.log(data);
  return data;
};

const Card = () => {
  return (
    <>
    <div className='Card-bons' style={{textAlign:"center", height:"80vh",width:"100%", display:"flex", alignItems:"center", justifyContent:"end", flexDirection:"column"}}>
      
      <div style={{width: "70%"}}><img src={Acebuche2} alt="" style={{maxWidth:"100%", textAlign:"center"}}/></div>
      
      <div style={{display: "flex", flexDirection:"column",alignItems:"center" ,justifyContent:"center",width:"98%",backgroundColor:"#044C40",  borderRadius:"20px", height:"400px"}}>
        <h3 style={{color:"#F6F0BE", fontSize:"3em"}}>Azalea</h3>
        <div style={{display:"flex", gap:"80px", color:"#F6F0BE", fontSize:"1em"}}>
        <p>Trasplantado</p>
        <p>Abonado</p>  
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
            <button onClick={getData} >Detalles</button>
        <Modal/>
      <Modify/>
      <Delete/>
        </div>
        
      </div>

    </div>
    
    </>
  )
}



export default Card