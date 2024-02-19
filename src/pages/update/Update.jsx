import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { updateData, getBonsaiData } from '../../services/bonsaisServe'; // Cambia el nombre de la función
import { useParams } from 'react-router-dom';
import { getItemById } from '../../services/bonsaisServe';

const Update = () => {
  const { id } = useParams();
  const { register, formState: { errors }, handleSubmit, reset, setValue } = useForm();
  const [loading, setLoading] = useState(false);
  const [bonsaiData, setBonsaiData] = useState(null); // Inicializa con un objeto vacío

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bonsaiData = await getItemById (id); // Obtener los datos del bonsái con el id proporcionado
        setBonsaiData(bonsaiData); // Establecer los datos del bonsái en el estado
        // Establecer los valores de los campos del formulario usando setValue
        setValue('especie', bonsaiData.especie);
        setValue('trasplantado', bonsaiData.trasplantado);
        setValue('abonado', bonsaiData.abonado);
        setValue('notas', bonsaiData.notas);
      } catch (error) {
        console.error('Error al obtener los datos del bonsái:', error);
      } 
    };
  
    fetchData();
  }, [id, setValue]);
  
// Definición de la función onSubmit para manejar el envío del formulario
const onSubmit = async (formData) => {
  try {
    setLoading(true);
    // Lógica para enviar los datos actualizados del formulario al servidor
    await updateData(id, formData);
    alert('Datos actualizados correctamente');
    reset(); // Limpiar el formulario después de enviar los datos
  } catch (error) {
    console.error('Error al actualizar los datos:', error);
    alert('Error al actualizar los datos. Por favor, intenta de nuevo.');
  } finally {
    setLoading(false);
  }
};
  return (
    <>
      {loading && <p>Cargando...</p>}
      {Object.keys(bonsaiData).length > 0 && (
        <form className='container-form' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='title-bonsais'>Modificar Bonsai</h1>

          <div>
            <input type="file" style={{ color: "transparent" }} id="image" required /><br />
          </div>

          <label htmlFor="especie">Especie:</label>
          <input type="text" id="especie" {...register('especie', { required: 'Este campo es obligatorio' })} /><br />
          <label htmlFor="trasplantado">Trasplantado:</label>
          <input type="date" id="trasplantado" {...register('trasplantado')} /><br />
          <label htmlFor="abonado">Abonado:</label>
          <input type="date" id="abonado" {...register('abonado')} /><br />
          <label htmlFor="notas">Notas</label>
          <input className="label-form-notas" id="notas" {...register('notas')} type="text" name="notas" placeholder="" />
          {errors.especie && <p>Introduce una especie{errors.especie.message}</p>}
          <button className="boton-form" type='submit'>Enviar</button>
        </form>
      )}
    </>
  );
};

export default Update;