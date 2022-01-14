import { convertNumPlayersToString } from "../../scripts/tools"

export default function PartyList(props) {
  let rows = [];

  for (let i = 0; i < props.numPlayers; i++) {
    const numPlayersString = convertNumPlayersToString(i + 1);

    rows.push(
    <div className="player-level-selector" key={"selector-" + i}>
      <label htmlFor={"player-" + numPlayersString}>Player Level:</label>
      <select name="players" className="player-lvl" id={"player-" + numPlayersString} onChange={props.handleLevelChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
      </select>
    </div>
    );
  }
  return (
      <div id="party-list">
          {rows}
      </div>
  );
}
