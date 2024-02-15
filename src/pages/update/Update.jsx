import React from 'react';
//import 'css'
import { useForm } from 'react-hook-form'; //convierte info de un form en un objeto
import { updateData } from '../../services/bonsaisServe';
import { getData } from '../../services/bonsaisServe';
import { useParams } from 'react-router-dom';

const RegisterForm = () => {
const {id} = useParams();
const { register, handleSubmit, formState: {errors} } = useForm()

//Función que se ejecuta al enviar el formulario
const onSubmit = async (formData) => {
  try {
    await updateData(id, formData);
    console.log("Datos actualizados correctamente");
  } catch (error) {
    console.error("Error al actualizar los datos:", error);
  }
};
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="especie">Especie:</label>
      <input type="text" id="especie" {...register('especie',{required:'Este campo es obligatorio'})}/><br/>
      <label htmlFor="trasplantado">Trasplantado:</label>
      <input type="date" id="trasplantado" {...register('trasplando',{required:'Este campo es obligatorio'})}/><br/>
      <label htmlFor="abonado">Abonado:</label>
      <input type="date" id="abonado"{...register('abonado',{required:'Este campo es obligatorio'})}/><br/>
{errors.especie && <p>Introduce una especie{errors.especie.message}</p>}
//botón de envío
<button type="submit">Actualizar</button>
</form>
</>
  );
};
  
export default RegisterForm