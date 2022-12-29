import React, { useState, useEffect } from "react";
import { Loading } from "./components";
import Content from "./Content"
import { fetchAllMonsters } from "./api";

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

