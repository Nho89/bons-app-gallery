import axios from "axios";

//GET

export const getData = async () => {
    const response = await fetch('http://localhost:3000/bonsais');
    const data = await response.json();
    return data;
  };

  //POST

  export const postData = async (data) =>{
  axios.post('http://localhost:3000/bonsais',data)
  
  return(data)
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


  // //POST IMAGE CLOUDINARY
  // export const uploadImage = async () =>{
  //   const response = await axios.post(
  //     "https://api.cloudinary.com/v1_1/dputvv9bi/image/upload", 
  //     data)
  // }
  
  // const response = await axios.post(
  //   "https://api.cloudinary.com/v1_1/dputvv9bi/image/upload", 
  //   data
  // );
