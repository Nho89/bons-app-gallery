export const getData = async () => {
    const response = await fetch('http://localhost:3000/bonsais');
    const data = await response.json();
    return data;
  };

  //POST
  export const postData = async () =>{

  }

  //UPDATE
  export  const updateData = async (id) =>{
    if (onclick===true)
    await fetch (`http://localhost:3000/bonsais/${id}`,{method:"UPDATE"})
  }

  //DELETE
  export const deleteData = async (id) =>{
    if(confirm("¿Estás seguro que quieres eliminar este bonsai?") === true)
    await fetch(`http://localhost:3000/bonsais/${id}`,{method:"delete"})
    await getData();
    location.reload();
  }