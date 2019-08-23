
import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from "./EpisodeCard.js"

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [epiList, setEpiList] = useState([])
  useEffect(() => {

    axios
      .get('https://rickandmortyapi.com/api/episode/')
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
        <EpisodeCard
          key={character.name}
          name={character.name}
          air_date={character.air_date}
         episode={character.episode}

          
         
        />


      ))}
        
    </section >
  );
}
