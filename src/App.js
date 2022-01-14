import React, { useState, useEffect, useReducer } from "react";
import { Header, Loading, PlayerSection, EncounterSection, MonsterSection } from "./components";
import { fetchAllMonsters } from "./api";
import { renderMonsters, hideLoadingScreen, addEventListenersToCollapsibles } from "./scripts/rendering"

function App() {
  
  const[loading, setLoading] = useState(true);
  const [numPlayers, setNumPlayers] = useState(1);


  //NEED TO USE EXTEND TO PASS THE STATE BETWEEN APP AND COMPONENETS
  // const [handleChange] = this.useState

  let monsters = [];

  useEffect(() => {
    fetchAllMonsters()
    .then((response) => monsters = response)
    .then(() => console.log(monsters))
    .then(() => renderMonsters(monsters))
    .then(() => setLoading(false))
  }, []);

  useEffect(() => {
    if (!loading) {
      hideLoadingScreen();
    }
  }, [loading]);

  useEffect(() => {
    addEventListenersToCollapsibles();
  }, []);

  return (
    <>
      <Header />
      <Loading />
      <main>
        <PlayerSection />
        <EncounterSection />
        <MonsterSection />
      </main>
    </>
  );
}

export default App;

