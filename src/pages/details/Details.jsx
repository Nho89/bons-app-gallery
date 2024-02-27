import React from 'react'
import './Details.css'

const Details = () => {
  return (
    <section>
        <h1 className='title-bonsais'>Detalles</h1>
        <form>
            <label htmlFor="image" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src="https://res.cloudinary.com/dvko0roau/image/upload/v1708026581/add_frame_tbf87i.png" alt="imagen de nuestro mock-up" />
            </label>
            <input id="image" style={{ color: "transparent", opacity: 0, position: "absolute", zIndex: -1 }} type="file" />
            <div className= 'card-box-turquoise'> 
            <label htmlFor="notas">Descripción</label>
            <input className="label-form-notas" type="text" name="notas" id="notas" placeholder=""/>
            </div>
        </form>  
        <button style={{width: "25vw", backgroundColor:"#F69E92", color: "#000000", padding:"6px", borderRadius:"10px", fontFamily: 'Poppins', fontSize: "1rem", border: "none", boxShadow: "0 2px 4px rgba(0,0,0,0.2)", width: "90%", marginBottom: "10%",}} className="boton-form" type='submit'>Volver a Mis Bonsáis</button>

      
    </section>
  )
}

export default Details
