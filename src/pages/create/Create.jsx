import React from 'react'
import {useForm} from  'react-hook-form'
import { postData } from '../../services/bonsaisServe'
import {useNavigate} from 'react-router-dom'
import './Create.css'
import { useState } from 'react'

const Create = () => {
  const navigate = useNavigate()
  const { handleSubmit, register, errors} = useForm()

    
  const bonsais = (data) =>{
      // data.image = image;
      postData(data)
      
      navigate('/')

    }
      return (
        <>
         <h1 className='title-bonsais'>Añadir Bonsai</h1>

      <form className='container-form' onSubmit={handleSubmit(bonsais)}>

        <label htmlFor="image" >Añade la imagen de tu bonsái<img src="https://res.cloudinary.com/dvko0roau/image/upload/v1708026581/add_frame_tbf87i.png" alt="" /></label>
        <input style={{color:"transparent"}} type="file" {...register("image")} />

        <label htmlFor="especie">Especie:</label>
        <input className="label-form" type='text' {...register("especie", { required: true })} required/>

        <label htmlFor="trasplantado">Trasplantado</label>
        <input className="label-form" id='trasplantado' type='date' {...register("trasplantado", { required: true })} required />

        <label  htmlFor="abonado">Abonado</label>
        <input type='date' className="label-form" name="abonado" id="abonado" {...register("abonado")} required/>
      
        <label htmlFor="notas">Notas</label>
        <input className="label-form-notas" type="text" name="notas" id="notas" {...register("notas")} placeholder=""/>

        <button style={{width: "25vw", backgroundColor:"#F69E92", color: "#000000", padding:"6px", borderRadius:"10px", fontFamily: 'Poppins', fontSize: "1rem", border: "none", boxShadow: "0 2px 4px rgba(0,0,0,0.2)", width: "90%", marginBottom: "10%" }} className="boton-form" type='submit'>Enviar</button>

    </form>
        
        
        </>
       
      )
    }  
   

export default Create