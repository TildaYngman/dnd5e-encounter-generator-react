import React, { useState, useEffect, useReducer } from "react";
import { Header, PlayerSelect, PartyList, MonsterToggle, PlayerSummary, EncounterSummary, Loading, MonsterCollapsibles } from "./components";
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
        <section id="players-section">
          <div id="players-top">
            <PlayerSelect />
            <PartyList numPlayers={numPlayers}/>
            <MonsterToggle />
          </div>
          <div id="players-bottom">
            <PlayerSummary />
          </div>
        </section>
        <section id="encounter-section">
          <div id="encounter-top">
            
          </div>
          <div id="encounter-bottom">
            <EncounterSummary />
          </div>
        </section>
        <MonsterCollapsibles />
      </main>
    </>
  );
}

export default App;

