import React from 'react'
import {useForm} from  'react-hook-form'
import { postData } from '../../services/bonsaisServe'

const Create = () => {
  const { handleSubmit, register, errors} = useForm()

    const bonsais = (data) =>{
      postData(data)
    }
      return (
    <form  onSubmit={handleSubmit(bonsais)}>
      <label htmlFor="especie">Especie:</label>
      <input type='text' {...register("especie", { required: true })} required/>
      <label htmlFor="trasplantado">Trasplantado:</label>
      <input id='trasplantado' type='date' {...register("trasplantado", { required: true })} required />
      <label htmlFor="abonado">Abono:</label>
      <input name="abonado" id="abonado" {...register("abonado")} required/>
      <label htmlFor="image">Imagen Bonsai:</label>
      <input type="file" {...register("image")} />
      <button type='submit'>Enviar</button>
    </form>
      )
    }
   

export default Create