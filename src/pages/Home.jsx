import { useLoaderData} from 'react-router-dom';
import React from 'react';
import Card from '../components/Card';

const Home = () => {
    const bonsais = useLoaderData();

  return (
    <>
    <div style={{textAlign:"center", height:"80vh", marginBottom:"15%"}}>
      <Card bonsais={bonsais}/>
      </div>
    </>
    
  )
}

export default Home