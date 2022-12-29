import React from "react";
import { PlayerSection, EncounterSection, MonsterSection, Header, MonsterToggle } from "./components";
import { calculateXpValues, convertCrToXp } from "./scripts/tools";
import { IMonster, IEncounter } from "./scripts/rendering";

//Create an interface for the state

interface IState {
  numPlayers: number;
  xpThresholds: number[];
  encounter: IEncounter[];
  xpTotal: number;
  monsterCount: number;
}

interface IProps {
  monsters: IMonster[];
}

// class Player extends React.Component<IProps, IState> {

export default class Content extends React.Component<IProps, IState> {
  constructor(props:IProps) {
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
    const element = document.getElementById("number-of-players") as HTMLInputElement;
    const numPlayersInt = parseInt(element.value);
    this.setState({
      numPlayers: numPlayersInt,
    }, () => { 
      this.handleLevelChange();
    });
  }

  handleLevelChange() {
    const playerLevelsNodes = document.querySelectorAll(".player-lvl");
    const playerLevels:HTMLInputElement[] = [];
    playerLevelsNodes.forEach((player) => {
      playerLevels.push(player as HTMLInputElement);
    })

    const xpThresholds = calculateXpValues(playerLevels);
  
    this.setState({
      xpThresholds: xpThresholds,
    });
  }

  handleAddToEncounter(name: string, monsters: IMonster[]) {
    for (let monster of monsters) {
      if (name === monster.name) {
        const xp = convertCrToXp(monster.challenge_rating);
        
        this.setState({
          xpTotal: this.state.xpTotal + xp,
          monsterCount: this.state.monsterCount + 1
        });

        if (this.state.encounter.length === 0) {
          console.log("First monster added")
          this.setState({ encounter: [...this.state.encounter, {
              name: name,
              xp: xp,
              count: 1
            }]
          });
          break;
        }

        let monsterFound = false;
    
        for (let i = 0; i < this.state.encounter.length; i++) {
          if (name === this.state.encounter[i].name) {
            console.log("This monster exists")
            monsterFound = true;
            let tempArray = this.state.encounter;
            tempArray[i].count++
            this.setState({ 
              encounter: tempArray
            });
          } 
        }

        if (monsterFound === false) {
          console.log("Adding new monster")
          this.setState({ encounter: [...this.state.encounter, {
            name: name,
            xp: xp,
            count: 1
            }]
          });
        }
      }
    }
  }

  handleRemoveFromEncounter(i: number) {
    let tempArray = this.state.encounter;
    this.setState({ 
      xpTotal: this.state.xpTotal - tempArray[i].xp,
      monsterCount: this.state.monsterCount - 1
    });

    tempArray[i].count--;
    if (tempArray[i].count === 0) {
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