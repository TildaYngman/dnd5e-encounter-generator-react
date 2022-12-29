import React from "react";
import { toggleMonstersSection } from "../../scripts/rendering";

export default function MonsterToggle() {

    return (
        <menu id="monster-toggle">
            <button id="toggle-monsters-btn" onClick={toggleMonstersSection}>--Show Monsters--</button>
        </menu>
    );
}






