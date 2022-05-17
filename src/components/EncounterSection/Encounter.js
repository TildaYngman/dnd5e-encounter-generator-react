import { generateEncounterList } from "../../scripts/rendering";

export default function Encounter(props) {
    let rows = generateEncounterList(props);

    return (
        <section id="encounter">
            {rows}
        </section>
    );
}
