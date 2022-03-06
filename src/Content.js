import React from "react";
import { PlayerSection, EncounterSection, MonsterSection, Header, MonsterToggle } from "./components";
import { calculateXpValues, convertCrToXp } from "./scripts/tools";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPlayers: 1,
      xpThresholds: [25, 50, 75, 100],
      encounter: [],
      xpTotal: 0,
      monsterCount: 0
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
  }

  handleAddToEncounter(name, monsters) {
    for (let monster of monsters) {
      if (name == monster.name) {
        const xp = convertCrToXp(monster.challenge_rating);
        
        this.setState({
          xpTotal: this.state.xpTotal + xp,
          monsterCount: this.state.monsterCount + 1
        });

        if (this.state.encounter.length == 0) {
          this.setState({ encounter: [...this.state.encounter, {
              name: name,
              xp: xp,
              count: 1
            }]
          });
          break;
        }
  
        for (let i = 0; i < this.state.encounter.length; i++) {
          if (name == this.state.encounter[i].name) {
            let tempArray = this.state.encounter;
            tempArray[i].count++
            this.setState({ 
              encounter: tempArray
            });
          } else {
            this.setState({ encounter: [...this.state.encounter, {
              name: name,
              xp: xp,
              count: 1
              }]
            });
          } 
        }
      }
      //   updateEncounterList(); - should happen automatically when state is updated
    }
  }

  handleRemoveFromEncounter(i) {
    let tempArray = this.state.encounter;
    this.setState({ 
      xpTotal: this.state.xpTotal - tempArray[i].xp,
      monsterCount: this.state.monsterCount - 1
    });

    tempArray[i].count--;
    if (tempArray[i].count == 0) {
      tempArray.splice(i, 1);
    }

    this.setState({
      encounter: tempArray,
    });
  }

  render() {
    return (
      <>
        <Header 
          xpThresholds={this.state.xpThresholds}
          encounter={this.state.encounter}
          monsterCount={this.state.monsterCount}
          xpTotal={this.state.xpTotal}
        />
        <MonsterToggle />
        <main>
          <PlayerSection 
            handlePlayerChange={this.handlePlayerChange}
            handleLevelChange={this.handleLevelChange}
            numPlayers={this.state.numPlayers}
            xpThresholds={this.state.xpThresholds}
          />
          <EncounterSection
            encounter={this.state.encounter}
            monsterCount={this.state.monsterCount}
            xpTotal={this.state.xpTotal}
            handleRemoveFromEncounter={this.handleRemoveFromEncounter}
          />
          <MonsterSection 
            monsters={this.props.monsters}
            handleAddToEncounter={this.handleAddToEncounter}
            encounter={this.state.encounter}
          />
        </main>
      </>
    );
  }
}