import React from "react";
import PlayerSummary from "./PlayerSummary";

export default function PlayerBottom(props: { xpThresholds: number[]; }) {
    return (
        <div id="player-bottom">
            <PlayerSummary {...props} />
        </div>
    );
}
