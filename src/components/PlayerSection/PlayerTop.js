import PlayerSelect from "./PlayerSelect";
import PartyList from "./PartyList";

export default function PlayerTop(props) {
    return (
        <div id="player-top">
            <PlayerSelect {...props} />
            <PartyList {...props} />
        </div>
    );
}
