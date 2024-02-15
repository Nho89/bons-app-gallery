import React from 'react'
import {useForm} from  'react-hook-form'
/* import {useHistory, useNavigate} from 'react-router-dom'
 */
import { postData } from '../../services/bonsaisServe'

const Create = () => {
      const { register, handleSubmit } = useForm();

      const onSubmit = async (newBonsai) => {
        await postData(newBonsai);
};

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
  
        {/*Imagen*/}
        <label htmlFor="image">Foto:  </label><br />
        <div >
          <input type="file" style={{color: 'transparent'}} id="image" {...register('image', {required: true})}/><br/>
        </div>
        {/*Especie*/}
        <label htmlFor="especie">Especie:  </label>
        <input type="text" name="especie" {...register('specie', {required: true})}/><br/>
        {/*Fecha de Trasplantado*/}
        <label htmlFor="date-trasp">Trasplantado: </label>
        <input type="date" name="date-transp" {...register('trasplantDate', {required: true})}/><br />
        {/*Fecha de Abonado*/}
        <label htmlFor="date-abonado">Abonado: </label>
        <input type="date"  {...register('fertilizateDate' , {required: true})}/><br />
        {/*botón añadir*/}
        <button type='submit' >Añadir</button>
    </form>
    </>
  )
}

export default Create