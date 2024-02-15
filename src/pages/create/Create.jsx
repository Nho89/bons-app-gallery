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
    <form>

        <label htmlFor="image">Foto:  </label><br />
        <div >
          <input type="file" style={{color: "transparent"}} id="image"  required/><br/>
        </div>
        <label htmlFor="especie">Especie:  </label>
        <input type="text" name="especie" required/><br/>
        <label htmlFor="date-trasp">Trasplantado: </label>
        <input type="date" name="date-transp"/><br />
        <label htmlFor="date-abonado" required>Abonado: </label>
        <input type="date" /><br />
        <button type='submit' >Enviar</button>
    </form>
    </>
  )
}

export default Create