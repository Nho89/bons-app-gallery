import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
import './Modal.css'

const Modal = ({isOpen, closeModal, notas}) => {
  if (!isOpen) return null;
  return (
      <div className='modal'><AiOutlineClose
        size={30}
        color="#000"
        onClick={closeModal}
        cursor={"pointer"}
        />
        <div className="container">
          <h3 className='subtitle-notas-bonsai'>Descripción de la planta</h3><br />
          <p className='notas-bonsai'>{notas}</p>
          
        </div>
      </div>
  )}
  

export default Modal