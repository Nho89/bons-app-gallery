import React from 'react'
import {useForm} from  'react-hook-form'
/* import {useHistory, useNavigate} from 'react-router-dom'*/
import axios from 'axios'
import { postData } from '../../services/bonsaisServe'
import './Create.css'

const Create = () => {
      const { register, handleSubmit, reset } = useForm()
      const onSubmit = async (data) =>{
        
      }  
  return (
    <>

    <h1 className='title-bonsais'>Añadir Bonsai</h1>

    <div>
      <input type="file" style={{color: "transparent"}} id="image" required/><br/>
    </div>
    
    <form className='container-form'>
      <label htmlFor="especie">Especie </label>
      <input className="label-form" type="text" name="especie" required/><br/>
      <label htmlFor="date-trasp">Trasplantado </label>
      <input className="label-form" type="date" name="date-transp"/><br />
      <label htmlFor="date-abonado" required>Abonado </label>
      <input className="label-form" type="date" /><br />
      <label htmlFor="notas">Notas</label>
      <input className="label-form-notas" type="text" name="notas" placeholder=""/>
    </form>
    <button type='submit' >Enviar</button>
    </>
  )
}

export default Create