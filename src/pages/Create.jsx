import React from 'react'

const Create = () => {
  return (
    <>
    <form>

        <label htmlFor="image">Foto:  </label>
        <input type="file" style={{color: "transparent"}} id="image" required/><br/>
        <label htmlFor="especie">Especie:  </label>
        <input type="text" name="especie"/><br/>
        <label htmlFor="date-trasp">Trasplantado: </label>
        <input type="date" name="date-transp"/><br />
        <label htmlFor="date-abonado">Abonado: </label>
        <input type="date" />
        
    </form>
    </>
  )
}

export default Create