import React from 'react'
import {useForm} from  'react-hook-form'
import { postData } from '../../services/bonsaisServe'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

const Create = () => {
  const navigate = useNavigate()
  const { handleSubmit, register, errors} = useForm()

    
  const bonsais = (data) =>{
      data.image = image;
      postData(data)
      
      navigate('/')

    }
      return (
    <form  onSubmit={handleSubmit(bonsais)}>
      <label htmlFor="especie">Especie:</label>
      <input type='text' {...register("especie", { required: true })} required/>
      <label htmlFor="trasplantado">Trasplantado:</label>
      <input id='trasplantado' type='date' {...register("trasplantado", { required: true })} required />
      <label htmlFor="abonado">Abono:</label>
      <input name="abonado" id="abonado" {...register("abonado")} required/>
      <label htmlFor="image">Imagen Bonsai</label>
      <input type="file" /* onChange={(e) => uploadImage(e)} */  {...register("image")} />
      <button type='submit'>Enviar</button>
    </form>
      )
    }  
   

export default Create