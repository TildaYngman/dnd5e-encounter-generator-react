import { toggleMonstersSection } from "../../scripts/rendering";

export default function MonsterToggle() {

    return (
        <div id="monster-toggle">
            <button id="toggle-monsters-btn" onClick={toggleMonstersSection}>--Show Monsters--</button>
        </div>
    );
}






