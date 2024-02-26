import React from 'react'
import {useForm} from  'react-hook-form'
import { postData} from '../../services/bonsaisServe'
import {useNavigate} from 'react-router-dom'
import './Create.css'
import axios from 'axios';

const Create = () => {
  const navigate = useNavigate()
  const { handleSubmit, register, errors} = useForm()

  const onSubmit = async (data) => {
    // Create a FormData object
    const formData = new FormData();
    // Append the file to the form data
    formData.append('file', data.image[0]);
    formData.append('upload_preset', "preset_bonsai"); 
  
    try {
      // Send a POST request to Cloudinary's API endpoint
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dputvv9bi/image/upload`,
        formData
      );
  
      // Assuming the response contains the URL of the uploaded image
      const imageUrl = response.data.secure_url;
  
      // Now, you can save this imageUrl to your database (db.json)
      // Assuming you have a function to save data to db.json
      await saveImageUrlToDb(imageUrl);
  
      // Navigate to the home page after successful upload
      navigate('/');
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle errors appropriately
    }
  };
      return (
        <>
         <h1 className='title-bonsais'>Añadir Bonsai</h1>

      <form className='container-form' onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="image">Añade la imagen de tu Bonsai<img src="https://res.cloudinary.com/dvko0roau/image/upload/v1708026581/add_frame_tbf87i.png" alt="imagen de un marco de fotos" /></label>
        <input id="image" style={{ color: "transparent", opacity: 0, position: "absolute" }} type="file" {...register("image")} />

        <label htmlFor="especie">Especie:</label>
        <input className="label-form" type='text' {...register("especie", { required: true })} required/>

        <label htmlFor="trasplantado">Trasplantado</label>
        <input className="label-form" id='trasplantado' type='date' {...register("trasplantado", { required: true })} required />

        <label  htmlFor="abonado">Abonado</label>
        <input type='date' className="label-form" name="abonado" id="abonado" {...register("abonado")} required/>
      
        <label htmlFor="notas">Notas</label>
        <input className="label-form-notas" type="text" name="notas" id="notas" {...register("notas")} placeholder=""/>

        <button style={{width: "25vw", backgroundColor:"#F69E92", color: "#000000", padding:"6px", borderRadius:"10px", fontFamily: 'Poppins', fontSize: "1rem", border: "none", boxShadow: "0 2px 4px rgba(0,0,0,0.2)", width: "90%", marginBottom: "10%"  }} className="boton-form" type='submit'>Enviar</button>
    </form> 
        </>
       
      )
    }  

export default Create

