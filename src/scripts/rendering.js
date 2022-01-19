import React from "react";
import ReactDOM from 'react-dom';

import { convertCrToXp, 
  formatCrAsIdString, 
  convertNumPlayersToString,
  addListener,
  calculateMultiplier,
  calculateXpValues,
  setDifficultyMessage } from "./tools"
  

export function renderMonsters(props, id) {
  let rows = [];

  for (const monster of props.monsters) {
    const cr = formatCrAsIdString(monster.challenge_rating);
    const xp = convertCrToXp(cr);

    if (cr == id) {      
        rows.push(<div className="monster-item" key={"wrapper-" + monster.name}><div className="monster-summary"><h3>{monster.name}</h3><p>CR: {cr} - XP: {xp}</p></div><div className="add-monster-section"><button id={monster.name+"-btn"} onClick={props.handleAddToEncounter(monster.name)}>Add</button></div></div>);
    }
  }
  return rows;
}

export function handleMonsterClick(id) {
  document.getElementById(id).classList.toggle("active");
  const content = document.getElementById(id).nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
  
export function hideLoadingScreen() {
  document.getElementById("loading-screen").style.display = "none";
}

export function addEventListenersToCollapsibles() {
  const coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}
  

// //////////////////////////////Player Section//////////////////////////////

export function updatePlayerList(numPlayers) {
  let rows = [];

  for (let i = 0; i < numPlayers; i++) {
    const numPlayersString = convertNumPlayersToString(i + 1);

    rows.push(
    <div className="player-level-selector" key={"selector-" + i}>
      <label htmlFor={"player-" + numPlayersString}>Player Level:</label>
      <select name="players" className="player-lvl" id="player-${numPlayersString}">
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
  // updateXpThresholds();
}

export function updateXpThresholds() {
  // const playerLevels = document.querySelectorAll(".player-lvl");
  // const xpThresholds = calculateXpValues(playerLevels);
  // document.getElementById("player-summary-right").innerHTML = `
  //   <p id="easy-xp">${xpThresholds.easyXpThreshold}XP</p>
  //   <p id="medium-xp">${xpThresholds.mediumXpThreshold}XP</p>
  //   <p id="hard-xp">${xpThresholds.hardXpThreshold}XP</p>
  //   <p id="deadly-xp">${xpThresholds.deadlyXpThreshold}XP</p>
  // `;
  console.log("Need to do updateXpThresholds")
  // updateDifficultyIndicator();
}




























    //--Global Variables
  
  // let monsterArray = [];
  // let encounterArray = [];
  
  // let keyStats = {
  //   xpTotal: 0,
  //   monsterCount: 0,
  // };
  
  // async function fetchMonsters(Url) {
  //   const response = await fetch(`${Url}monsters/?limit=2000`);
  //   const data = await response.json();
  //   return data.results;
  // }
  
  // async function initApp() {
  //   const monsters = await fetchMonsters(defaultApiUrl);
  //   console.log("initApp ", monsters);
  //   monsterArray = monsters;
  //   renderMonsters(monsters);
  //   hideLoadingScreen();
  // }
  
  //--Event Listeners
  // document.addEventListener("DOMContentLoaded", function () {
    
  //   renderPlayerList();
  //   initApp();
  // });
  
  // addListener("change", "number-of-players", renderPlayerList);
  // addListener("change", "player-one", updateXpThresholds);
  
  // //////////////////////////////Render Page//////////////////////////////
  // function hideMonstersSection(){
  //   document.getElementById("monsters-section").classList.remove('visible');
  //   document.getElementById("toggle-monsters-btn").innerHTML = ">> Show Monsters >>";
  // };
  
  // function showMonstersSection(){
  //   document.getElementById("monsters-section").classList.add('visible');
  //   document.getElementById("toggle-monsters-btn").innerHTML = "<< Hide Monsters <<";
  // };
  
  // document.getElementById("toggle-monsters-btn").addEventListener('click', () => {
  //   if(!document.getElementById("monsters-section").classList.contains('visible')) {
  //     showMonstersSection();
  //   } else {
  //     hideMonstersSection();
  //   }
  // });
  
  // //////////////////////////////Encounter Section//////////////////////////////
  
  // function addToEncounter(name) {
  //   const monsters = monsterArray;
  
  //   for (let monster of monsters) {
  //     if (name == monster.name) {
  //       const xp = convertCrToXp(monster.challenge_rating);
  //       keyStats.xpTotal += xp;
  //       keyStats.monsterCount++;
  
  //       if (encounterArray.length == 0) {
  //         addEntry(name, xp);
  //         break;
  //       }
  
  //       let monsterExists = false;
  
  //       for (let entry of encounterArray) {
  //         if (name == entry.name) {
  //           entry.count++;
  //           monsterExists = true;
  //         }
  //       }
  
  //       if (!monsterExists) {
  //         addEntry(name, xp);
  //       }
  //     }
  //   }
  //   updateEncounterList();
  // }
  
  // function addEntry(name, xp) {
  //   encounterArray.push({
  //     name: name,
  //     xp: xp,
  //     count: 1,
  //   });
  // }
  
  // function removeFromEncounter(i) {
  //   keyStats.xpTotal -= encounterArray[i].xp;
  //   keyStats.monsterCount--;
  //   encounterArray[i].count--;
  //   if (encounterArray[i].count == 0) {
  //     encounterArray.splice(i, 1);
  //   }
  //   updateEncounterList();
  // }
  
  // function updateEncounterList() {
  //   document.getElementById("encounter-top").innerHTML = "";
  
  //   for (let i = 0; i < encounterArray.length; i++) {
  //     const xpToInt = parseInt(encounterArray[i].xp);
  //     renderEncounterList(
  //       i,
  //       encounterArray[i].name,
  //       encounterArray[i].count,
  //       xpToInt
  //     );
  //   }
  //   for (let i = 0; i < encounterArray.length; i++) {
  //     addListener("click", `close-${i}`, removeFromEncounter, `${i}`);
  //   }
  //   updateMonsterSummary();
  // }
  
  // function renderEncounterList(i, name, count, XP) {
  //   document.getElementById("encounter-top").innerHTML += `
  //     <div class="encounter-list-item">
  //       <div id="close-${i}" class="encounter-list-close">
  //       &#10005;
  //       </div>
  //       <div class="encounter-list-left">
  //         ${name} 
  //       </div>
  //       <div class="encounter-list-center">
  //         x ${count}
  //       </div>
  //       <div class="encounter-list-right">
  //         ${XP * count}xp
  //       </div>
  //     </div>
  //   `;
  // }
  
  // function updateMonsterSummary() {
  //   const multiplier = calculateMultiplier(keyStats.monsterCount);
  
  //   if (encounterArray.length == 0) {
  //     document.getElementById("encounter-summary-right").innerHTML = `
  //     <p>-</p>
  //     <p>-</p>
  //     <p>-</p>
  //   `;
  //   } else {
  //     document.getElementById("encounter-summary-right").innerHTML = `
  //     <p>${keyStats.xpTotal}XP</p>
  //     <p>x${multiplier}</p>
  //     <p>${keyStats.xpTotal * multiplier}XP</p>
  //   `;
  //   }
  //   updateDifficultyIndicator();
  // }
  
  // //////////////////////////////Difficulty Indicator//////////////////////////////
  
  // function updateDifficultyIndicator() {
  //   const multiplier = calculateMultiplier(keyStats.monsterCount);
  
  //   const finalTotal = keyStats.xpTotal * multiplier;
  //   if (encounterArray.length == 0) {
  //     document.getElementById("difficulty-meter").innerHTML = `
  //       <h2>Add some monsters to begin!</h2>
  //     `;
  //   }
  //   if (encounterArray.length > 0) {
  //     setDifficultyMessage(finalTotal);
  //   }
  // }
  

  