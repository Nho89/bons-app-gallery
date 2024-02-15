import axios from "axios";

//GET

export const getData = async () => {
    const response = await fetch('http://localhost:3000/bonsais');
    const data = await response.json();
    return data;
  };

  //POST

  export const postData = async (newBonsai) => {
      const response = await fetch('http://localhost:3000/bonsais', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBonsai)
      
    });
  }
      
    
  //UPDATE
  export  const updateData = async () =>{
  }

  //DELETE
  export const deleteData = async (id) =>{
    if(confirm("¿Estás seguro que quieres eliminar este bonsai?") === true)
    await fetch(`http://localhost:3000/bonsais/${id}`,{method:"DELETE"})
    await getData();
    location.reload();
  }