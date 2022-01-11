function PlayerSummary() {
    return (
        <>
            <div id="player-summary-left">
                <p>Easy: </p>
                <p>Medium: </p>
                <p>Hard: </p>
                <p>Deadly: </p>
            </div>
            <div id="player-summary-right">
                <p id="easy-xp">25XP</p>
                <p id="medium-xp">50XP</p>
                <p id="hard-xp">75XP</p>
                <p id="deadly-xp">100XP</p>
            </div>
      </>
    );
  }
  
  export default PlayerSummary;