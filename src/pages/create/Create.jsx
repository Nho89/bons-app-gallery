import React, { useState } from 'react'
// import { useForm } from  'react-hook-form'
// import { postData} from '../../services/bonsaisServe'
import axios from "axios";
import './Create.css'


const Create = () => {
  const {Url_Imagen, setUrl_Imagen } = useState("");
  // const { handleSubmit, register, 
  //   formState: {errors}
  // } = useForm();

  // const bonsais = (data) =>{
  //   postData(data)
  // }

  const changeUploadImage = async (e) => {
    const file = e.target.files[0];

    const data = new FormData(); 

    data.append("file", file);
    // data.append("upload_preset","preset_bonsai");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dputvv9bi/image/upload", 
      data
      );
      console.log(response.data);

  // setUrl_Imagen(response.data.secure_url);

};

  return (
    <>

    <h1 className='title-bonsais'>Añadir Bonsai</h1>
     
    <form className='container-form'>

      <label htmlFor="image">Añade la imagen de tu Bonsai</label>
      <input type="file"  accept="image/*" onChange={changeUploadImage} />

      {Url_Imagen && (
        <div>
        <img src={"Url_Imagen"}  alt="Imagen de mi bonsai" />
        </div>)
      }
      
      {/* {
        errors.image && <span>Imagen requerida</span>
      }
    
      <br /> */}
{/* 
      <label htmlFor="especie">Especie </label>
      <input className="label-form" type='text' {...register("especie", { required: "La especie es requerida" })}
      />
        {errors.especie && <span>{errors.especie.message}</span>}
    
      <br/>
      <label htmlFor="trasplantado">Trasplantado</label>
      <input {...register("trasplantado", { required:true })} className="label-form" type="date" id='trasplantado' />
      {
      errors.trasplantado && <span> La fecha de trasplantado es requerida </span>
      }
      <br />

      <label className="label-form" htmlFor="abonado">Abonado</label>
      <input className="label-form" name="abonado" id="abonado" {...register("abonado", { required:true })} type="date" />
      {
      errors.abonado && <span> La fecha de abonado es requerida </span>
      }
      <br />

      <label htmlFor="notas">Notas</label>
      <input className="label-form-notas" type="text" name="notas" id="notas"  placeholder=""/>

      {
      errors.notas && <span> La fecha de notas es requerida </span>
      }
      <button className="boton-form" type='submit'>Enviar</button> */}
    </form>
    </>
      )
    }
   

export default Create