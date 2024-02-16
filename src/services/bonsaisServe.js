import axios from "axios";

//GET

export const getData = async () => {
    const response = await fetch('http://localhost:3000/bonsais');
    const data = await response.json();
    return data;
  };

  //POST
  export const postData = async () =>{
    axios({
      method:"POST",
      url:"http://localhost:3000/bonsais",
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error)=>console.log(error))
  }

  export const postData = async (data) =>{
  const bonsais = await axios.post('http://localhost:3000/bonsais',data)
  alert("Bonsai creado exitosamente")
  window.location.reload(); 
  return bonsais
}

  //PUT
  export const updateData = async (id, newData) => {
    try {
      const response = await fetch(`http://localhost:3000/bonsais/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData) // Convertir los datos a formato JSON
      });
  
      if (response.ok) {
        console.log("Bonsái actualizado correctamente");
      } else {
        console.error("Error al actualizar el bonsái:", response.statusText);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
     }
  };


  //DELETE
  export const deleteData = async (id) =>{
    if(confirm("¿Estás seguro que quieres eliminar este bonsai?") === true)
    await fetch(`http://localhost:3000/bonsais/${id}`,{method:"DELETE"})
    
    location.reload();
  }