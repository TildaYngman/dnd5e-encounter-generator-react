import React, { useState, useEffect, useReducer } from "react";
import { Header, PlayerSelect, PartyList, MonsterToggle, PlayerSummary, EncounterSummary, Loading, MonsterCollapsibles } from "./components";
import { fetchAllMonsters } from "./api";
import { renderMonsters, hideLoadingScreen, addEventListenersToCollapsibles } from "./scripts/rendering"
import { render } from "@testing-library/react";



//MOVE TO EXTERNAL JS FILE

function App() {
  const[loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  let monsters = [];

  useEffect(() => {
    fetchAllMonsters()
    .then((response) => monsters = response)
    .then(() => console.log(monsters))
    .then(() => renderMonsters(monsters))
    .then(() => setLoading(false))
    // .catch(setError)
  }, []);

  useEffect(() => {
    if (!loading) {
      hideLoadingScreen();
    }
  }, [loading]);

  useEffect(() => {
    addEventListenersToCollapsibles();
  }, []);

  //USEEFFECT FOR RENDER PLAYER LIST

  // if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return (
    <>
      <Header />
      <Loading />
      <main>
        <section id="players-section">
          <div id="players-top">
            <PlayerSelect />
            <PartyList />
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

