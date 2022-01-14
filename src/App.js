import React, { useState, useEffect, useReducer } from "react";
import { Header, Loading } from "./components";
import Content from "./Content"
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
        <Content monsters={monsters} />
      </main>
    </>
  );
}

export default App;

