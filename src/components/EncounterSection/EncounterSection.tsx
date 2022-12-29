import EncounterTop from "./EncounterTop";
import EncounterBottom from "./EncounterBottom";
import React from "react";
import { IEncounter } from "../../scripts/rendering";

export default function EncounterSection(props: { encounter: IEncounter[]; monsterCount: number; xpTotal: number; handleRemoveFromEncounter: (arg0: number) => void; }) {
    return (
        <div id="encounter-section">
            <EncounterTop {...props}/>
            <EncounterBottom {...props}/>
        </div>
    );
}
