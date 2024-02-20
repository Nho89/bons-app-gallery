import React from 'react';
import './Update.css';
import { useForm } from 'react-hook-form'; //convierte info de un form en un objeto
import { updateData, getBonsaiById } from '../../services/bonsaisServe';
import { useParams, useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';


const Update = () => {
 
  const [bonsai, setBonsai] = useState() 
  const {id} = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: {errors} } = useForm()

  useEffect(() => {
    const fetchData = async() =>{
    console.log(id);
    const bonsaiData = await getBonsaiById(id)
    console.log(bonsaiData);
    setBonsai(bonsaiData)
    
    }
    fetchData()
    
  },[id])
  console.log(bonsai);


//Función que se ejecuta al enviar el formulario
const onSubmit = async (newData) => {
  try {
    await updateData(id, newData);
    console.log("Datos actualizados correctamente");
    navigate('/');
  } catch (error) {
    console.error("Error al actualizar los datos:", error);
  }
};
  return (
    <>
    
    <h1 className='title-bonsais'>Modificar mi bonsái</h1>
  <form className= 'container-form'onSubmit={handleSubmit(onSubmit)}>
    <div>
    <label htmlFor="image" ><img src="https://res.cloudinary.com/dvko0roau/image/upload/v1708026581/add_frame_tbf87i.png" alt="" /></label>
      <input type="file" style={{color: "transparent"}} id="image" required/><br/>
    </div>
    
      <label htmlFor="especie">Especie:</label>
      <input className="label-form" type="text" id="especie" {...register('especie',{required:'Este campo es obligatorio'})}/><br/>
      <label htmlFor="trasplantado">Trasplantado:</label>
      <input className="label-form" type="date" id="trasplantado" {...register('trasplantado')}/><br/>
      <label htmlFor="abonado">Abonado:</label>
      <input className="label-form" type="date" id="abonado"{...register('abonado')}/><br/>
      <label htmlFor="notas">Notas</label>
      <input className="label-form-notas" id="notas"{...register('notas')} type="text" name="notas" placeholder=""/>
{errors.especie && <p>Introduce una especie{errors.especie.message}</p>}
<button style={{width: "25vw", backgroundColor:"#E1E361", color: "#000000", padding:"6px", borderRadius:"10px", fontFamily: 'Poppins', fontSize: "1rem", border: "none", boxShadow: "0 2px 4px rgba(0,0,0,0.2)", width: "90%", marginBottom: "10%" }}  type='submit' onClick={handleSubmit(onSubmit)}>Actualizar</button>
</form>
</>
  );
};
  
export default Update