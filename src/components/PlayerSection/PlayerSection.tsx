import React, { ChangeEventHandler } from "react";
import PlayerBottom from "./PlayerBottom";
import PlayerTop from "./PlayerTop";

export default function PlayerSection(props: {
    xpThresholds:number[];
    numPlayers:number;
    handlePlayerChange:ChangeEventHandler<HTMLSelectElement> | undefined;
    handleLevelChange:ChangeEventHandler<HTMLSelectElement> | undefined;
  }) {
    return (
    <section id="player-section">
        <PlayerTop {...props} />
        <PlayerBottom {...props} />
    </section>
    );
}


