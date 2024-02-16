import React from 'react'
import {useForm} from  'react-hook-form'
import { postData } from '../../services/bonsaisServe'
import './Create.css'

const Create = () => {
  const { handleSubmit, register, 
    formState: {errors}
  } = useForm();

  const bonsais = (data) =>{
    postData(data)
  }

  return (
    <>

    <h1 className='title-bonsais'>Añadir Bonsai</h1>
     
    <form className='container-form' onSubmit={handleSubmit(bonsais)}>

      <label htmlFor="image">Añade la imagen de tu Bonsai<img src="https://res.cloudinary.com/dvko0roau/image/upload/v1708026581/add_frame_tbf87i.png" alt="" /></label>
      <input type="file" {...register("image", {required:true})} />
      {
        errors.image && <span>Imagen requerida</span>
      }
    
      <br />

      <label htmlFor="especie">Especie </label>
      <input className="label-form" type='text' {...register("especie", { required: "La especie es requerida" })}
      />
        {errors.especie && <span>{errors.especie.message}</span>}
    
      <br/>
      <label htmlFor="trasplantado">Trasplantado</label>
      <input {...register("trasplantado", { required:true })} className="label-form" type="date" id='trasplantado' />
      {
      errors.trasplantado && <span> La fecha de trasplantado es requerida </span>
      }
      <br />

      <label className="label-form" htmlFor="abonado">Abonado</label>
      <input className="label-form" name="abonado" id="abonado" {...register("abonado", { required:true })} type="date" />
      {
      errors.abonado && <span> La fecha de abonado es requerida </span>
      }
      <br />

      <label htmlFor="notas">Notas</label>
      <input className="label-form-notas" type="text" name="notas" id="notas"  placeholder=""/>

      {
      errors.notas && <span> La fecha de notas es requerida </span>
      }
      <button className="boton-form" type='submit'>Enviar</button>
    </form>
    </>
      )
    }
   

export default Create