import React from 'react'
import Edit from '../../components/Edit'
import {useForm} from "react-hook-form";
import {useLoaderData, Link, useNavigate} from 'react-router-dom'


const Update = () => {
     
  const {bonsais} = useLoaderData();

  const {register, handleSubmit, errors} = useForm({defaultValues:{

    especie:  bonsais.especie,
    trasplantado: bonsais.trasplantado,
    abonado: bonsais.abonado,
    image: bonsais.image,

  }});

  const navigate = useNavigate()

  const handleForm = (updateData) =>{
    updateData.id = bonsais.id;
    navigate('/')
  }

  return (
    <>
    <form action="">

      <label htmlFor="especie">Especie:</label>
      <input type="text" name="especie"/><br/>
      <label htmlFor="trasplantado">Trasplantado:</label>
      <input type="date" name="trasplantado"/><br/>
      <label htmlFor="abonado">Abonado:</label>
      <input type="date" name="abonado"/><br/>
      <Edit/>
    </form>

    </>
    
  )
}
export default Update