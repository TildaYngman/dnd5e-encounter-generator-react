import React, { useState, useEffect, useReducer } from "react";
import { Header, Loading } from "./components";
import Content from "./Content"
import { fetchAllMonsters } from "./api";
import { addEventListenersToCollapsibles } from "./scripts/rendering"

function App() {
  const[loading, setLoading] = useState(true);
  const[monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetchAllMonsters()
    .then((response) => setMonsters(response))
    .then(() => setLoading(false))
  }, []);

  return (
    <>
        {loading ? (
          <Loading />
        ) : (
          <Content monsters={monsters} />
        )}
    </>
  );
}

export default App;

