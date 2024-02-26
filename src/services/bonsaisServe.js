import axios from "axios";

const url = 'http://localhost:3000'

//GET

export const getData = async () => {
    const response = await fetch(`${url}/bonsais`);
    const data = await response.json();
    return data;
  };

  //POST
  export const postData = async (data) =>{
  const bonsais = await axios.post(`${url}/bonsais`,data)
  alert("Bonsai creado exitosamente")
  return bonsais
}
 //DELETE
  export const deleteData = async (id) =>{
    if(confirm("¿Estás seguro que quieres eliminar este bonsai?") === true){
      const bonsais = await axios.delete(`${url}/bonsais/${id}`)
    return bonsais; }
  }
  //UPDATE
   export const updateData = async (id, newData) => {
    console.log("modificando");
      const response = await fetch(`${url}/bonsais/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      });
      const data = await response.json();
    return data;
  };

<<<<<<< HEAD
  //DELETE
  export const deleteData = async (id) =>{
    if(confirm("¿Estás seguro que quieres eliminar este bonsai?") === true)
    await fetch(`http://localhost:3000/bonsais/${id}`,{method:"DELETE"})
    
    window.location.reload();
  }
// GET one
=======
 
//Get by id
>>>>>>> 3b89bd4d013ef6895cc1248b8ed7818a03c4799e
  export const getBonsaiById = async (id) => {
  const response = await fetch(`${url}/bonsais/${id}`);
  const data = await response.json();
  return data;
};