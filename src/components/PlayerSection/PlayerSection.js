import PlayerBottom from "./PlayerBottom";
import PlayerTop from "./PlayerTop";

export default function PlayerSection(props) {
    return (
    <section id="player-section">
        <PlayerTop {...props} />
        <PlayerBottom {...props} />
    </section>
    );
}


