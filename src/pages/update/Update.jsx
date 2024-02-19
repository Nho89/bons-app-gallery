import React from 'react'
import {useForm} from "react-hook-form";
import "./Update.css"
import { useLoaderData, useNavigate, useParams} from 'react-router-dom';
import { handleUpdateData } from '../../services/bonsaisServe';



const Update = (/* {bonsais, updateData} */) => {
    const { id } = useParams();
  const navigate = useNavigate();
  const bonsai = useLoaderData();

  const {register, handleSubmit} = useForm({defaultValues:{

    especie:  bonsai.especie,
    trasplantado: bonsai.trasplantado,
    abonado: bonsai.abonado,
    image: bonsai.image,
  }});


  const handleForm = async (editedBonsai) => {
    await handleUpdateData(editedBonsai);
    navigate('/')
  };
  return (
    <>
    <h1 className='title-bonsais'>Modificar Bonsai</h1>

    <div>
      <input type="file" style={{color: "transparent"}} id="image" required/><br/>
    </div>
    
    <form  onSubmit={handleSubmit(handleForm)} className='container-form'>
      <label htmlFor="especie">Especie:</label>
      <input type='text' {...register("especie", { required: true })} required/>
      <label htmlFor="trasplantado">Trasplantado:</label>
      <input id='trasplantado' type='date' {...register("trasplantado", { required: true })} required />
      <label htmlFor="abonado">Abono:</label>
      <input name="abonado" id="abonado" {...register("abonado")} required/>
      <label htmlFor="image">Imagen Bonsai:</label>
      <input type="file" {...register("image")}  />
      <button type='submit'>Enviar</button>
    </form>
    </>
    
  )
}
export default Update