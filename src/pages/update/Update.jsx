import React, { useState, useEffect } from 'react';
import './Update.css';
import { useForm } from 'react-hook-form';
import { updateData, getBonsaiById } from '../../services/bonsaisServe';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
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
    try {
      await updateData(id, newData);
      console.log('Datos actualizados correctamente');
      navigate('/');
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
  };
//gestionamos el envío del form con handleSubmit. Se registran los campos en register.

  return (
    <>
      <form className='container-form' onSubmit={handleSubmit(onSubmit)}> 
        <h1 className='title-bonsais'>Modificar mi bonsái</h1>
        {/* Campos del formulario */}
        <label htmlFor='especie'>Especie:</label>
        <input type='text' id='especie' {...register('especie', { required: 'Este campo es obligatorio' })} /><br />
        <label htmlFor='trasplantado'>Trasplantado:</label>
        <input type='date' id='trasplantado' {...register('trasplantado')} /><br />
        <label htmlFor='abonado'>Abonado:</label>
        <input type='date' id='abonado' {...register('abonado')} /><br />
        <label htmlFor='notas'>Notas</label>
        <input className='label-form-notas' id='notas' {...register('notas')} type='text' name='notas' placeholder='' />
        {errors.especie && <p>Introduce una especie{errors.especie.message}</p>}
        {/* Botón de envío */}
        <button className='boton-form' type='submit'>Enviar</button>
      </form>
    </>
  );
};

export default Update;