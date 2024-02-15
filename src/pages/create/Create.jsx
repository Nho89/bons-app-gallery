import React from 'react'
import {useForm} from  'react-hook-form'
/* import {useHistory, useNavigate} from 'react-router-dom'
 */import axios from 'axios'
import { postData } from '../../services/bonsaisServe'

const Create = () => {
      const { register, handleSubmit, reset } = useForm()
      const onSubmit = async (data) =>{
        
      }  
  return (
    <>
    <form onSubmit={handleSubmit}>
  
        {/*Imagen*/}
        <label htmlFor="image">Foto:  </label><br />
        <div >
          <input type="file" style={{color: 'transparent'}} id="image"  required {...register("image")}/><br/>
        </div>
        {/*Especie*/}
        <label htmlFor="especie">Especie:  </label>
        <input type="text" name="especie" {...register('specie')} required/><br/>
        {/*Fecha de Trasplantado*/}
        <label htmlFor="date-trasp">Trasplantado: </label>
        <input type="date" name="date-transp" {...register('trasplantDate')}/><br />
        {/*Fecha de Abonado*/}
        <label htmlFor="date-abonado" required>Abonado: </label>
        <input type="date" {...register('fertilizateDate')}/><br />
        {/*botón añadir*/}
        <button type='submit' >Añadir</button>
    </form>
    </>
  )
}

export default Create