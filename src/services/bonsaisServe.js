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

  //UPDATE
  export  const updateData = async (id) =>{
    if (onclick===true)
    await fetch (`http://localhost:3000/bonsais/${id}`,{method:"UPDATE"})
  }

  //DELETE
  export const deleteData = async (id) =>{
    if(confirm("¿Estás seguro que quieres eliminar este bonsai?") === true)
    await fetch(`http://localhost:3000/bonsais/${id}`,{method:"DELETE"})
    await getData();
    location.reload();
  }