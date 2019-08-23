import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard.js"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState([])
  useEffect(() => {

    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharList(response.data.results);
        console.log("r", response)
      })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      {charList.map(character => (
        <CharacterCard
          key={character.name}
          name={character.name}
          status={character.status}
          species={character.species}
         
          gender={character.gender}
          image={character.image}
        />


      ))}
        
    </section >
  );
}
