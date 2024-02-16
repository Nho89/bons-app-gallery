import React from 'react'

const Update = () => {
  return (
    <>
    <h1 className='title-bonsais'>Modificar Bonsai</h1>

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
      <button className="boton-form" type='submit'>Enviar</button>
    </form>
   
    </>
    
  )
}
export default Update