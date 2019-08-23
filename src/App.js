import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js"
import LocationsList from "./components/LocationsList.js"
import EpisodeList from "./components/EpisodeList.js"
import { Route } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage"

export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      {/* <EpisodeList/> */}
      <TabNav />
      <Route exact path="/characters" component={CharacterList}/>
      <Route exact path="/episodes" component={EpisodeList}/>
      <Route exact path="/locations" component={LocationsList}/>
      <Route exact path="/" component={WelcomePage}/>





      
    </main>
  );
}
