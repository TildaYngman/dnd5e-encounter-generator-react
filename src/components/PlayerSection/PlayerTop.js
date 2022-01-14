import PlayerSelect from "./PlayerSelect";
import PartyList from "./PartyList";
import MonsterToggle from "./MonsterToggle";

export default function PlayerTop(props) {
    return (
        <div id="player-top">
            <PlayerSelect {...props} />
            <PartyList {...props} />
            <MonsterToggle />
        </div>
    );
}
