export default function PlayerSummary(props) {
    return (
        <>
            <div id="player-summary-left">
                <p>Easy: </p>
                <p>Medium: </p>
                <p>Hard: </p>
                <p>Deadly: </p>
            </div>
            <div id="player-summary-right">
                <p id="easy-xp">{props.xpThresholds[0] + 'XP'}</p>
                <p id="medium-xp">{props.xpThresholds[1] + 'XP'}</p>
                <p id="hard-xp">{props.xpThresholds[2] + 'XP'}</p>
                <p id="deadly-xp">{props.xpThresholds[3] + 'XP'}</p>
            </div>
        </>
    );
}
