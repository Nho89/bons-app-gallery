import { useLoaderData} from 'react-router-dom';
import React from 'react';
import Card from '../../components/card/Card';
import "./Home.css"

const Home = () => {
    const bonsais = useLoaderData();

  return (
    <>
    <h1 className='title-bonsai'>Mis  Bonsáis </h1>
    <div >
      <Card bonsais={bonsais}/>
      </div>
    </>
    
  )
}

export default Home