import axios from "axios";
import { useNavigate } from "react-router-dom";

//GET

export const getData = async () => {
    const response = await fetch('http://localhost:3000/bonsais');
    const data = await response.json();
    return data;
  };

  //POST

  export const postData = async (data) =>{
  const bonsais = await axios.post('http://localhost:3000/bonsais',data)
  alert("Bonsai creado exitosamente")
  window.location.reload(); 
  return bonsais
}

  //UPDATE
  export  const updateData = async (id, data) =>{
    const bonsais = await axios.put(`http://localhost:3000/bonsais/${id}`, data)
    return bonsais;
    
  }

  //DELETE
  export const deleteData = async (id) =>{
    if(confirm("¿Estás seguro que quieres eliminar este bonsai?") === true)
    await fetch(`http://localhost:3000/bonsais/${id}`,{method:"DELETE"})
    
    window.location.reload();
  }


  //
   export const handleUpdateData = async (editedBonsai) => {
    if (!editedBonsai || !editedBonsai.id){
      return null;
    }
    
    const res = await updateData(editedBonsai.id, editedBonsai)
    return res;
   }