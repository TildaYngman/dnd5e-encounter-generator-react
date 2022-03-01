import { calculateMultiplier } from "../../scripts/tools";

export default function EncounterSummary(props) {
    const multiplier = calculateMultiplier(props.monsterCount);
    return (
        <>
            <div id="encounter-summary-left">
                <p>Sum: </p>
                <p>Multiplier: </p>
                <p>XP: </p>
            </div>
            <div id="encounter-summary-right">
                <p>{props.xpTotal + "XP"}</p>
                <p>{"x" + multiplier}</p>
                <p>{props.xpTotal * multiplier + "XP"}</p>
            </div>
        </>
    );
}