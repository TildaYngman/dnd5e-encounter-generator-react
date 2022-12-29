import React from "react";
import ReactDOM from 'react-dom';

import { convertCrToXp, 
  formatCrAsIdString, 
  convertNumPlayersToString,
  calculateMultiplier } from "./tools"
  
export interface IMonster {
  name: string;
  challenge_rating: string
}
////////////////////////////////Monster Section//////////////////////////////

export function renderMonsters(props: { monsters: IMonster[]; handleAddToEncounter: (arg0: string, arg1: IMonster[]) => void; }, id: string | number) {
  let rows = [];
  for (const monster of props.monsters) {
    const cr = formatCrAsIdString(monster.challenge_rating);
    const xp = convertCrToXp(cr);


    if (cr === id.toString()) {      
        rows.push(<div className="monster-item" key={"wrapper-" + monster.name}><div className="monster-summary"><h3>{monster.name}</h3><p>CR: {monster.challenge_rating} - XP: {xp}</p></div><div className="add-monster-section"><button id={monster.name+"-btn"} onClick={() => props.handleAddToEncounter(monster.name, props.monsters)}>Add</button></div></div>);
    }
  }
  return rows;
}

export function addEventListenersToCollapsibles() {
  const coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function (this: HTMLElement) {
      this.classList.toggle("active");
      const content = this.nextElementSibling as HTMLElement;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}

export function toggleMonstersSection() {
  const element = document.getElementById("monsters-section") as HTMLElement;
  element.classList.toggle("visible");
}

////////////////////////////////Player Section//////////////////////////////

export function updatePlayerList(numPlayers:number) {
  let rows = [];

  for (let i = 0; i < numPlayers; i++) {
    const numPlayersString = convertNumPlayersToString(i + 1);

    rows.push(
    <div className="player-level-selector" key={"selector-" + i}>
      <label htmlFor={"player-" + numPlayersString}>Player Level:</label>
      <select name="players" className="player-lvl" id={"player-" + numPlayersString}>
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
    ReactDOM.render(
      <div>
        {rows}
      </div>,
      document.getElementById("party-list")
    );
  }
}


////////////////////////////////Encounter Section//////////////////////////////
export interface IEncounter {
  xp: number;
  name: string;
  count: number;
  
}
  
export function generateEncounterList(props: { encounter: IEncounter[]; handleRemoveFromEncounter: (arg0: number) => void; }) {
  const rows = [];
  for (let i = 0; i < props.encounter.length; i++) {
    const xp:number = props.encounter[i].xp;

    rows.push(
    <div key={"encounter-" + i} className="encounter-list-item">
      <div className="encounter-list-close" id={"close-" + i} onClick={() => props.handleRemoveFromEncounter(i)}>
        &#10005;
      </div>
      <div className="encounter-list-left">
        {props.encounter[i].name}
      </div>
      <div className="encounter-list-center">
        x {props.encounter[i].count}
      </div>
      <div className="encounter-list-right">
        {xp * props.encounter[i].count}xp
      </div>
    </div>
    );
  }
  return rows;
}


////////////////////////////////Difficulty Indicator//////////////////////////////

export function updateDifficultyIndicator(props: { monsterCount: number; xpTotal: number; encounter: IEncounter[]; xpThresholds: number[]; }) {
  const multiplier = calculateMultiplier(props.monsterCount);

  const finalTotal:number = props.xpTotal * multiplier;

  if (props.encounter.length === 0) {
    return <h2>Add some monsters to begin!</h2>;
  }

  if (props.encounter.length > 0) {
    return setDifficultyMessage(props, finalTotal);
  }
}

function setDifficultyMessage(props: { monsterCount?: number; xpTotal: number; encounter: IEncounter[]; xpThresholds: number[]; }, finalTotal:number) {
  const easyXp = props.xpThresholds[0];
  const mediumXp = props.xpThresholds[1];
  const hardXp = props.xpThresholds[2];
  const deadlyXp = props.xpThresholds[3];

  const difficultyThresholds = [
    easyXp,
    mediumXp,
    hardXp,
    deadlyXp
  ];

  difficultyThresholds.sort((a, b) => {
    return Math.abs(finalTotal - a) - Math.abs(finalTotal - b);
  })

  if (difficultyThresholds[0] === easyXp) {
    return <h2>This encounter will be <span style={{ color: 'green' }}>EASY</span> for your players!</h2>;
  } else if (difficultyThresholds[0] === mediumXp) {
    return <h2>This encounter will be of <span style={{ color: 'yellow' }}>MEDIUM</span> difficulty for your players!</h2>;
  } else if (difficultyThresholds[0] === hardXp) {
    return <h2>This encounter will be <span style={{ color: 'orange' }}>HARD</span> for your players!</h2>;
  } else if (difficultyThresholds[0] === deadlyXp) {
    return <h2>This encounter will be <span style={{ color: 'red' }}>DEADLY</span> for your players!</h2>;
  } else {
    return <h2></h2>;
  }
}
