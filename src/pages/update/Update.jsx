import React from 'react'
import Edit from '../../components/Edit'
import {useForm} from "react-hook-form";
import "./Update.css"
import { useLoaderData, useNavigate} from 'react-router-dom';
import { updateData } from '../../services/bonsaisServe';



const Update = (/* {bonsais, updateData} */) => {
    
  const {bonsais} = useLoaderData();

  const {register, handleSubmit} = useForm({defaultValues:{

    especie:  bonsais.especie,
    trasplantado: bonsais.trasplantado,
    abonado: bonsais.abonado,
    image: bonsais.image,
  }});

  const navigate = useNavigate()

  const handleForm = (editedBonsai) => {
    editedBonsai.id = bonsais.id
    handleUpdateData = async ({editedBonsai}) => {
      return;
    }
    const res = updateData(editedBonsai)
    return res;
    }
    handlerUpdateData({editedBonsai})
  navigate('/')

  return (
    <>
    <h1 className='title-bonsais'>Modificar Bonsai</h1>

    <div>
      <input type="file" style={{color: "transparent"}} id="image" required/><br/>
    </div>
    
    <form key={bonsais.id} onSubmit={handleSubmit(handleForm)} className='container-form'>
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
    </>
    
  )
}
export default Update