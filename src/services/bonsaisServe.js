export const getData = async () => {
    const response = await fetch('http://localhost:3000/bonsais');
    const data = await response.json();
    return data;
  };

  //POST

  export const postData = async () =>{

  }

  //UPDATE
  export  const updateData = async () =>{
    
  }

  //DELETE
  export const deleteData = async () =>{
    await fetch(`http://localhost:3000/bonsais/${id}`,{method:"delete"})
  }