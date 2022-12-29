import React from "react";
import Encounter from "./Encounter";
import { IEncounter } from '../../scripts/rendering'

export default function EncounterTop(props: {encounter: IEncounter[]; monsterCount: number; xpTotal: number; handleRemoveFromEncounter: (arg0: number) => void; }) {
    return (
        <div id="encounter-top">
            <Encounter {...props}/>
        </div>
    );
  }