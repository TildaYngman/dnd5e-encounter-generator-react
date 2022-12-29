import React from "react";
import { generateEncounterList, IEncounter } from "../../scripts/rendering";


export default function Encounter(props: {encounter: IEncounter[]; handleRemoveFromEncounter: (arg0: number) => void; }) {
    let rows = generateEncounterList(props);

    return (
        <section id="encounter">
            {rows}
        </section>
    );
}
