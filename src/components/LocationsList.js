
import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from "./LocationCard.js"

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [epiList, setEpiList] = useState([])
  useEffect(() => {

    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(response => {
        setEpiList(response.data.results);
        console.log("r", response)
      })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      {epiList.map(character => (
        <LocationCard
          key={character.name}
          name={character.name}
          type={character.type}
          dimension={character.dimension}
         residents={character.residents}
         
        />


      ))}
        
    </section >
  );
}
