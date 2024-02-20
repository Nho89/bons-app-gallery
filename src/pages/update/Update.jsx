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
    <form className= 'container-form'onSubmit={handleSubmit(onSubmit)}>
    <h1 className='title-bonsais'>Modificar mi bonsái</h1>

    <div>
      <input type="file" style={{color: "transparent"}} id="image" required/><br/>
    </div>
    
      <label htmlFor="especie">Especie:</label>
      <input type="text" id="especie" {...register('especie',{required:'Este campo es obligatorio'})}/><br/>
      <label htmlFor="trasplantado">Trasplantado:</label>
      <input type="date" id="trasplantado" {...register('trasplantado')}/><br/>
      <label htmlFor="abonado">Abonado:</label>
      <input type="date" id="abonado"{...register('abonado')}/><br/>
      <label htmlFor="notas">Notas</label>
      <input className="label-form-notas" id="notas"{...register('notas')} type="text" name="notas" placeholder=""/>
{errors.especie && <p>Introduce una especie{errors.especie.message}</p>}
<button className="boton-form" type='submit' onClick={handleSubmit(onSubmit)}>Enviar</button>
</form>
</>
  );
};
  
export default Update
