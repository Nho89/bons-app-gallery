import React from 'react'
import {useForm} from  'react-hook-form'
/* import {useHistory, useNavigate} from 'react-router-dom'*/
import axios from 'axios'
import { postData } from '../../services/bonsaisServe'
import './Create.css'
import Add from '../../components/Add'

const Create = () => {
      const { register, handleSubmit, reset } = useForm()
      const onSubmit = async (data) =>{
        
      }  

// const mockup =`http://localhost:3000/${bonsais}`
  return (
    <>

    <h1 className='title-bonsais'>Añadir Bonsai</h1>
    {/* <img src={mockup} alt="Mockup de los bonsais que va a subir el usuario" />  */}
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
    <Add/>
    </>
  )
}

export default Create