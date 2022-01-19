import React, { useEffect } from "react";
import { PlayerSection, EncounterSection, MonsterSection } from "./components";
import { calculateXpValues } from "./scripts/tools";

export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      numPlayers: 1,
      xpThresholds: [25, 50, 75, 100],
      encounter: []
    };
    this.handlePlayerChange = this.handlePlayerChange.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleAddToEncounter = this.handleAddToEncounter.bind(this);
    this.handleRemoveFromEncounter = this.handleRemoveFromEncounter.bind(this);
  }

  handlePlayerChange() {
    this.setState({
      numPlayers: document.getElementById("number-of-players").value,
    }, () => { 
      this.handleLevelChange();
    });
  }

  handleLevelChange() {
    const playerLevels = document.querySelectorAll(".player-lvl");
    const xpThresholds = calculateXpValues(playerLevels);
  
    this.setState({
      xpThresholds: xpThresholds,
    });

    // updateDifficultyIndicator();
  }

  handleAddToEncounter(name) {
  //   function addToEncounter(name) {
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

    // const playerLevels = document.querySelectorAll(".player-lvl");
    // const xpThresholds = calculateXpValues(playerLevels);
  
    // this.setState({
    //   xpThresholds: xpThresholds,
    // });

    // updateDifficultyIndicator();
  }

  handleRemoveFromEncounter() {
    // const playerLevels = document.querySelectorAll(".player-lvl");
    // const xpThresholds = calculateXpValues(playerLevels);
  
    // this.setState({
    //   xpThresholds: xpThresholds,
    // });

    // updateDifficultyIndicator();
  }

  render() {
    return (
      <>
        <PlayerSection 
          handlePlayerChange={this.handlePlayerChange}
          handleLevelChange={this.handleLevelChange}
          numPlayers={this.state.numPlayers}
          xpThresholds={this.state.xpThresholds}
        />
        <EncounterSection 
          handleRemoveFromEncounter={this.handleRemoveFromEncounter}
          encounter={this.state.encounter}
        />
        <MonsterSection 
          monsters={this.props.monsters}
          handleAddToEncounter={this.handleAddToEncounter}
          encounter={this.state.encounter}
        />
      </>
    );
  }
}