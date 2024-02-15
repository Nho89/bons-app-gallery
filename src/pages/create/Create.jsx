import React from 'react'
import {useForm} from  'react-hook-form'
import { postData } from '../../services/bonsaisServe'
import './Create.css'
import Add from '../../components/Add'

const Create = () => {
  const { handleSubmit, register, errors} = useForm()

  const bonsais = (data) =>{
    postData(data)
  }

// const mockup =`http://localhost:3000/${bonsais}`

  return (
    <>

    <h1 className='title-bonsais'>Añadir Bonsai</h1>
    {/* <img src={mockup} alt="Mockup de los bonsais que va a subir el usuario" />  */}
   
    <form className='container-form' onSubmit={handleSubmit(bonsais)}>

      <label htmlFor="image">Añade la imagen de tu Bonsai<img src="https://res.cloudinary.com/dvko0roau/image/upload/v1708026581/add_frame_tbf87i.png" alt="" /></label>
      <input type="file" {...register("image")} /> <br />

      <label htmlFor="especie">Especie </label>
      <input className="label-form" type='text' {...register("especie", { required: true })} required/><br/>

      <label htmlFor="trasplantado">Trasplantado</label>
      <input className="label-form" id='trasplantado' {...register("trasplantado", { required: true })} required /><br />

      <label className="label-form" htmlFor="abonado" required>Abonado</label>
      <input className="label-form" name="abonado" id="abonado" {...register("abonado")} required type="date" /><br />

      <label htmlFor="notas">Notas</label>
      <input className="label-form-notas" type="text" name="notas" id="notas" {...register("notas")} placeholder=""/>

    </form>
    <Add/>
    </>
  )
}

export default Create