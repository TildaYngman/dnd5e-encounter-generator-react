import PlayerSelect from "./PlayerSelect";
import PartyList from "./PartyList";
import React, { ChangeEventHandler } from "react";

export default function PlayerTop(props: {
  xpThresholds:number[];
  numPlayers:number;
  handlePlayerChange:ChangeEventHandler<HTMLSelectElement> | undefined;
  handleLevelChange:ChangeEventHandler<HTMLSelectElement> | undefined;
}) {
  return (
    <div id="player-top">
      <PlayerSelect {...props} />
      <PartyList {...props} />
    </div>
  );
}
