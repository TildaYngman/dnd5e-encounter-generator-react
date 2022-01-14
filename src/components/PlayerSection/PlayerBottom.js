import PlayerSummary from "./PlayerSummary";

export default function PlayerBottom(props) {
    return (
        <div id="player-bottom">
            <PlayerSummary {...props} />
        </div>
    );
}
