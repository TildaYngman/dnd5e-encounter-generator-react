import React from "react";
import { PlayerSection, EncounterSection, MonsterSection } from "./components";
import { calculateXpValues } from "./scripts/tools";

export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {
        numPlayers: 1,
        xpThresholds: [25, 50, 75, 100]
    };
    this.handlePlayerChange = this.handlePlayerChange.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
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

  render() {
    return (
      <>
        <PlayerSection 
            handlePlayerChange={this.handlePlayerChange}
            handleLevelChange={this.handleLevelChange}
            numPlayers={this.state.numPlayers}
            xpThresholds={this.state.xpThresholds}
        />
        <EncounterSection />
        <MonsterSection />
      </>
    );
  }
}