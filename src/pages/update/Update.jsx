import React, { useState, useEffect } from 'react';
import './Update.css';
import { useForm } from 'react-hook-form';
import { updateData, getBonsaiById } from '../../services/bonsaisServe';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const Update = () => {
  const [bonsai, setBonsai] = useState({}); 
  const [Url_Imagen, setUrl_Imagen] = useState("");
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm(); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const bonsaiData = await getBonsaiById(id);
        setBonsai(bonsaiData);
        setValue('especie', bonsaiData.especie);
        setValue('abonado', bonsaiData.abonado);
        setValue('trasplantado', bonsaiData.trasplantado);
        setValue('notas', bonsaiData.notas);
      } catch (error) {
        console.error('Error al obtener el bonsái:', error);
      }
    };
    fetchData();
  }, [id, setValue]);

  const onSubmit = async (newData) => {
    newData.image = Url_Imagen;
    try {
      await updateData(id, newData);
      console.log('Datos actualizados correctamente');
      navigate('/');
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
  };
.
  const changeUploadImage = async (e) => {
  const file = e.target.files[0];
  const newData = new FormData();
  newData.append("file", file);
  newData.append("upload_preset", "preset_bonsai"); 

  try {
    const response = await axios.put(
      "https://api.cloudinary.com/v1_1/dputvv9bi/image/upload",
      newData
    );
    setUrl_Imagen(response.data.secure_url);
    console.log(response.data);
  } catch (error) {
    console.error("Error al cargar la imagen a Cloudinary:", error);
  }
};
  return (
    <>
    <h1 className='title-bonsai-update'>Modificar mi bonsái</h1>
    <div  className="container-update">
      <form className='container-form-update' onSubmit={handleSubmit(onSubmit)}> 


        <div className='form-update-left' >  
          <label htmlFor="image" ><p>Cambia la imagen de tu Bonsai</p><img  src="https://res.cloudinary.com/dvko0roau/image/upload/v1708026581/add_frame_tbf87i.png" alt="imagen de un marco de fotos" /></label>
          <input id="image" type="file" style={{ color: "transparent", opacity: 0, position: "absolute" }}   onChange={changeUploadImage}/>
            <br /> 
          {Url_Imagen && (
              <div>
                <img src={Url_Imagen}  alt="Imagen de mi bonsai" style={{maxWidth:"200px"}}/>
              </div>)}
          </div>

        <div className='form-update-right'>
         
            <label htmlFor='especie'>Especie:</label>
            <input type='text' className="label-form-update" id='especie' {...register('especie', { required: 'La especie es requerida' })} /><br />
            {errors.especie && <span className='span-error'>{errors.especie.message}</span>}
            <div className='dates-input-update'>
            <label htmlFor='trasplantado'>Trasplantado:</label>
            <input type='date' className="label-form-update"  id='trasplantado' {...register('trasplantado', { required: true })} /><br />
            {errors.trasplantado && <span className='span-error'> La fecha de trasplantado es requerida </span>}

            <label htmlFor='abonado'>Abonado:</label>
            <input type='date' className="label-form-update" id='abonado' {...register('abonado', { required: true })} /><br />
            {errors.abonado && <span className='span-error'> La fecha de abonado es requerida </span>}
            </div>

            <label htmlFor='notas'>Descripción</label>
            <textarea className='label-form-notas' id='notas' {...register('notas', { required: true })} type='text' name='notas' placeholder='' />
            { errors.notas && <span className='span-error'> La casilla de notas es requerida </span>}
            
            <button className='boton-form-update' type='submit'>Enviar</button>
           
        </div> 
          

      </form>
    </div>
    </>
  );
};

export default Update;