import React, { useState, useEffect } from 'react';
import './Update.css';
import { useForm } from 'react-hook-form';
import { updateData, getBonsaiById } from '../../services/bonsaisServe';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const Update = () => {
  const [Url_Imagen, setUrl_Imagen ] = useState("");
  const [bonsai, setBonsai] = useState({}); 
  const { id } = useParams(); // obtenemos el parámetro id de la URL
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm(); // con el hook useForm inicializamos un form con funciones y datos para gestionarlo.

//usamos el hook useEffect para realizar efectos secundarios en el componente. 
//Para obtener los datos del bonsái mediante la función getBonsaiById y se establecerlos como valores predeterminados en el formulario, con la función setValue.

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bonsaiData = await getBonsaiById(id);
        setBonsai(bonsaiData);
        // Establecer los valores predeterminados para todos los campos del formulario
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

  //cuando enviamos el form, se ejecuta la función onSubmit, que llama a updateData, para actualizar datos e ir luego a la home.
  const onSubmit = async (newData) => {
    newData.image = Url_Imagen
    try {
      await updateData(id, newData);
      console.log('Datos actualizados correctamente');
      navigate('/');
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
  };
//gestionamos el envío del form con handleSubmit. Se registran los campos en register.
  const changeUploadImage = async (e) => {
    const file = e.target.files[0];

    const data = new FormData(); 

    data.append("file", file);
    data.append("upload_preset","preset_bonsai");


    const response = await axios.put(
      "https://api.cloudinary.com/v1_1/dputvv9bi/image/upload", 
      data
      );
      setUrl_Imagen(response.data.secure_url);
      console.log(response.data);
};
  return (
    <>
      <form className='container-form' onSubmit={handleSubmit(onSubmit)}> 
        <h1 className='title-bonsais'>Modificar mi bonsái</h1>
        {/* Campos del formulario */}
        <label htmlFor="image">Cambia la imagen de tu Bonsai<img src="https://res.cloudinary.com/dvko0roau/image/upload/v1708026581/add_frame_tbf87i.png" alt="imagen de un marco de fotos" /></label>
        <input id="image" style={{ color: "transparent", opacity: 0, position: "absolute" }} type="file" 
        {...register("image", { required: true })} accept="image/*" onChange={changeUploadImage} />

        {Url_Imagen && (
        <div>
        <img src={Url_Imagen}  alt="Imagen de mi bonsai" style={{maxWidth:"200px"}}/>
        </div>)
      }

        <label htmlFor='especie'>Especie:</label>
        <input type='text' className="label-form" id='especie' {...register('especie', { required: 'La especie es requerida' })} /><br />
        {errors.especie && <span className='span-error'>{errors.especie.message}</span>}

        <label htmlFor='trasplantado'>Trasplantado:</label>
        <input type='date' className="label-form" id='trasplantado' {...register('trasplantado', { required: true })} /><br />
        {errors.trasplantado && <span className='span-error'> La fecha de trasplantado es requerida </span>}

        <label htmlFor='abonado'>Abonado:</label>
        <input type='date' className="label-form" id='abonado' {...register('abonado', { required: true })} /><br />
        {errors.abonado && <span className='span-error'> La fecha de abonado es requerida </span>}

        <label htmlFor='notas'>Notas</label>
        <input className='label-form-notas' id='notas' {...register('notas', { required: true })} type='text' name='notas' placeholder='' />
        { errors.notas && <span className='span-error'> La casilla de notas es requerida </span>}
        {/* Botón de envío */}
        <button className='boton-form' type='submit'>Enviar</button>
      </form>
    </>
  );
};

export default Update;