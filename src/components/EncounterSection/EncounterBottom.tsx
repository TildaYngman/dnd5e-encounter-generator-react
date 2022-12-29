import React from "react";
import EncounterSummary from "./EncounterSummary";
import { IEncounter } from '../../scripts/rendering'

export default function EncounterBottom(props: {encounter: IEncounter[]; monsterCount: number; xpTotal: number; handleRemoveFromEncounter: (arg0: number) => void; }) {
    return (
        <div id="encounter-bottom">
            <EncounterSummary {...props}/>
        </div>
    );
}

      
      
      
