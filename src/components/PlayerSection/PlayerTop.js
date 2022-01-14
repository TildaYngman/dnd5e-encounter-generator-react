import PlayerSelect from "./PlayerSelect";
import PartyList from "./PartyList";
import MonsterToggle from "./MonsterToggle";

export default function PlayerTop() {
    return (
        <div id="player-top">
            <PlayerSelect />
            <PartyList />
            <MonsterToggle />
        </div>
    );
}
