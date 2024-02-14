import React from 'react'
import Edit from '../../components/Edit'
const Update = () => {
  return (
    <>
    <form action="">

      <label htmlFor="especie">Especie:</label>
      <input type="text" name="especie"/><br/>
      <label htmlFor="trasplantado">Trasplantado:</label>
      <input type="date" name="trasplantado"/><br/>
      <label htmlFor="abonado">Abonado:</label>
      <input type="date" name="abonado"/><br/>
      <Edit/>
    </form>

    </>
    
  )
}
export default Update