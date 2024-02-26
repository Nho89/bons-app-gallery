import { useLoaderData} from 'react-router-dom';
import React from 'react';
import Card from '../../components/card/Card';
import "./Home.css"

const Home = () => {
    const bonsais = useLoaderData();

  return (
    <>
    <h1 className='title-bonsais'>Mis  Bonsáis </h1>
<<<<<<< HEAD
    <div style={{textAlign:"center", minHeight:"100vh"}}>
    <Card bonsais={bonsais}/>
=======
    <div >
      <Card bonsais={bonsais}/>
>>>>>>> 3b89bd4d013ef6895cc1248b8ed7818a03c4799e
      </div>
    </>
    
  )
}

export default Home