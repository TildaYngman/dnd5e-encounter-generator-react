import React from "react";

export default function PlayerSelect(props) {
  return (
    <>
      <div id="player-select">
          <label htmlFor="number-of-players">Party Size: </label>
          <select name="players" id="number-of-players" onChange={props.handlePlayerChange}>
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
    </>
  );
}
