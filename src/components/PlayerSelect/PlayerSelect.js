import React, { useState, useEffect } from "react";

function PlayerSelect() {
  const [numPlayers, setNumPlayers] = useState(1);

  const [handleChange] = useState(() => {
    return () => {
      setNumPlayers(document.getElementById('number-of-players').value);
    };
  });

  useEffect(() => {
    console.log(numPlayers);
  }, [numPlayers])
  

  return (
    <div id="player-select">
        <label htmlFor="number-of-players">Party Size:</label>
        <select name="players" id="number-of-players" onChange={handleChange}>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
          <option value="6">Six</option>
          <option value="7">Seven</option>
          <option value="8">Eight</option>
        </select>
    </div>
  );
}

export default PlayerSelect;