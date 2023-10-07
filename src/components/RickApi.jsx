import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import '../index.css';

function RickApi() {

    const [datos, setDatos] = useState([])

    const RickApiList = async() => {
        const data = await fetch('https://rickandmortyapi.com/api/character')
        const datos = await data.json()
        setDatos(datos.results)
        console.log(datos.results)
    };

    useEffect(() => {
      RickApiList()
    }, [])

  return (
    <>
      <div>
        <h1>RICK API</h1>
        <h2>PERSONAJES</h2>
        {datos.map(data => (
            <div key={data.id}>
              <img src={data.image} />
              <h4>{data.name}</h4>
              <p>{data.species}</p>
              <p>{data.gender}</p>
            </div>
        ))}
      </div>
    </>
  )
}

export default RickApi