import axios from "axios";

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
   export const updateData = async (id, newData) => {
    try {
      const response = await fetch(`http://localhost:3000/bonsais/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData) // Convertir los datos a formato JSON
      });
  
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
     }
  };

  //DELETE
  export const deleteData = async (id) =>{
    if(confirm("¿Estás seguro que quieres eliminar este bonsai?") === true)
    await fetch(`http://localhost:3000/bonsais/${id}`,{method:"DELETE"})
    
    window.location.reload();
  }
// GET one
  export const getBonsaiById = async (id) => {
  const response = await fetch(`http://localhost:3000/bonsais/${id}`);
  const data = await response.json();
  return data;
};