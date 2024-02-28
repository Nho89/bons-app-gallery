import React from 'react'
import './Details.css'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <>
    
    
    <h1 className='title-bonsais'>Detalles</h1>
    <section  className="details-section">
        
        <form className='form-details'>
          
          <div className='form-image-details'>
            <label  className='label-img-details' htmlFor="image" /* style={{ display: "flex", justifyContent: "center", alignItems: "center" }} */>
                <img  src="https://res.cloudinary.com/dvko0roau/image/upload/v1708026581/add_frame_tbf87i.png" alt="imagen de nuestro mock-up" />
                <input id="image" style={{ color: "transparent", opacity: 0 }} type="file" />
            </label>
          </div>
            
          <div className='form-text-details'>
              <div className= 'card-box-green'> 
                <label htmlFor="notas" className='label-details'>Anotaciones</label>
                <textarea className="label-form-details" type="text" name="notas" id="notas" placeholder=""/>
                <Link to="/"><button className="boton-form-details" type='submit'>Volver a Mis Bonsáis</button></Link>
              </div>
          </div>
        </form>  
        

      
    </section></>
  )
}

export default Details
