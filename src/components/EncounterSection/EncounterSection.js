import EncounterTop from "./EncounterTop";
import EncounterBottom from "./EncounterBottom";

export default function EncounterSection(props) {
    return (
        <div id="encounter-section">
            <EncounterTop {...props}/>
            <EncounterBottom {...props}/>
        </div>
    );
}
