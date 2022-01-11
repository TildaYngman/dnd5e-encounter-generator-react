import React, { useState, useEffect, useReducer } from "react";
import { Header, PlayerSelect, PartyList, MonsterToggle, PlayerSummary, EncounterSummary, Loading } from "./components";
import { fetchAllMonsters } from "./api";

function hideLoadingScreen() {
  document.getElementById("loading-screen").style.display = "none";
}


function App() {
  const[loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  let monsters = [];

  useEffect(() => {
    fetchAllMonsters()
    .then((response) => monsters = response)
    .then(() => console.log(monsters))
    .then(() => setLoading(false))
    // .catch(setError)
  }, []);

  useEffect(() => {
    if (!loading) {
      hideLoadingScreen();
    }
  }, [loading]);

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
        <section id="monsters-section">

        </section>
      </main>
    </>
  );
}

export default App;





// const [loading, setLoading] = useState([true]);

// useEffect(() => {
//   fetchAllMonsters()
//   .then((res) => setLoading(false));
// }, []);

// useEffect(() => {
//   if (!setLoading){

//   }
// }, [loading]);


