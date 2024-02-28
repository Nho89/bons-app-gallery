import React, { useState } from 'react'
import {useForm} from  'react-hook-form'
import { postData} from '../../services/bonsaisServe'
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import './Create.css'

const Create = () => {
  const [Url_Imagen, setUrl_Imagen ] = useState("");
  const navigate = useNavigate()
  const { handleSubmit,register, formState: { errors }} = useForm()

const onSubmit = (data) => {
  data.image = Url_Imagen
  postData(data).then(() => {
    navigate('/'); //viaja a la home una vez creado el nuevo bonsai.
  });
};

const changeUploadImage = async (e) => {
    const file = e.target.files[0];

    const data = new FormData(); 

    data.append("file", file);
    data.append("upload_preset","preset_bonsai");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dputvv9bi/image/upload", 
      data
      );
      setUrl_Imagen(response.data.secure_url);
      console.log(response.data);
};
      return (
        <div  className="container-create">
         <h1 className='title-bonsai-create'>Añadir Bonsai</h1>

          <form className='container-form-create' onSubmit={handleSubmit(onSubmit)}>
              <div className='form-left-create'>
              <label htmlFor="image" className='container-image-create'>Añade la imagen de tu Bonsai<img src="https://res.cloudinary.com/dvko0roau/image/upload/v1708026581/add_frame_tbf87i.png" alt="imagen de un marco de fotos" /></label>
              <input id="image" style={{ color: "transparent", opacity: 0, position: "absolute" }} type="file" 
        {...register("image", { required: true })} accept="image/*" onChange={changeUploadImage} />

        {Url_Imagen && (
        <div>
        <img src={Url_Imagen}  alt="Imagen de mi bonsai" style={{maxWidth:"200px"}}/>
        </div>)
      }
      
      {/* {
        errors.image && <span>Imagen requerida</span>
      }
     */}
     
      <br />
        </div>
        
        <div className='form-right-create'>
        <label htmlFor="especie">Especie:</label>
        <input className="label-form-create" type='text' {...register("especie", { required: 'La especie es requerida' })}/>
        {errors.especie && <span className='span-error'>{errors.especie.message}</span>}

        
        <div className='dates-input-create'>
        <label htmlFor="trasplantado">Trasplantado</label>
        <input className="label-form-create" id='trasplantado' type='date' {...register("trasplantado", { required: true })} />
        <br />
        {errors.trasplantado && <span  className='span-error'> La fecha de trasplantado es requerida </span>}
        <br />


        <label  htmlFor="abonado">Abonado</label>
        <input type='date' className="label-form-create" name="abonado" id="abonado" {...register("abonado", { required: true })} />
        <br />
        {errors.abonado && <span className='span-error'> La fecha de abonado es requerida </span>}

        </div>
        <label htmlFor="notas">Descripción</label>
        <textarea className="label-form-notas" type="text" name="notas" id="notas" {...register("notas", { required: true })} placeholder=""/> <br />
        { errors.notas && <span className='span-error'> La casilla de notas es requerida </span>}


        <button style={{width: "25vw", backgroundColor:"#F69E92", color: "#000000", padding:"6px", borderRadius:"10px", fontFamily: 'Poppins', fontSize: "1rem", border: "none", boxShadow: "0 2px 4px rgba(0,0,0,0.2)", width: "90%", marginBottom: "10%"  }} className="boton-form" type='submit'>Enviar</button> 
        </div>
        
         
    </form>
    </div>
        
       
      
      );
    };  
   

export default Create