import { renderMonsters, addEventListenersToCollapsibles, IMonster, IEncounter } from "../../scripts/rendering";
import React, { useState, useEffect } from "react";

function MonsterSection(props: { encounter: IEncounter[]; monsters: IMonster[]; handleAddToEncounter: (arg0: string, arg1: IMonster[]) => void; }) {
    const[listenersCreated, setListenersCreated] = useState(false);

    useEffect(() => { // eslint-disable-line react-hooks/exhaustive-deps
        if (!listenersCreated){ // eslint-disable-line react-hooks/exhaustive-deps
            addEventListenersToCollapsibles(); // eslint-disable-line react-hooks/exhaustive-deps
            setListenersCreated(true); // eslint-disable-line react-hooks/exhaustive-deps
        } // eslint-disable-line react-hooks/exhaustive-deps
     }); // eslint-disable-line react-hooks/exhaustive-deps
    
    const highestCr = 30;
    const lowestCr = 0;
    const emptyCat1 = 28;
    const emptyCat2 = 29;


    let rows = [];

    for (let i = 0; i <= highestCr; i++) {
        if (i === lowestCr) {
            rows.push(<button type="button" key={"cr-" + i} id={"cr-" + i + "-btn"} className="collapsible">Challenge Rating {i}</button>)  
            rows.push(<div id={"cr-" + i} key={"collapsibleDiv" + i} className="monster-content">{renderMonsters(props, i)}</div>)

            rows.push(<button type="button" key={"cr-eighth"} className="collapsible">Challenge Rating 1/8</button>)
            rows.push(<div id="cr-eighth" key={"collapsibleDivEighth"} className="monster-content">{renderMonsters(props, "eighth")}</div>)

            rows.push(<button type="button" key={"cr-quarter"} className="collapsible">Challenge Rating 1/4</button>)
            rows.push(<div id="cr-quarter" key={"collapsibleDivQuarter"} className="monster-content">{renderMonsters(props, "quarter")}</div>)

            rows.push(<button type="button" key={"cr-half"} className="collapsible">Challenge Rating 1/2</button>)
            rows.push(<div id="cr-half" key={"collapsibleDivHalf"} className="monster-content">{renderMonsters(props, "half")}</div>)
        } 
        if (i !== lowestCr && i !== emptyCat1 && i !== emptyCat2) {
            rows.push(<button type="button" key={"cr-" + i} className="collapsible">Challenge Rating {i}</button>)
            rows.push(<div id={"cr-" + i} key={"collapsibleDiv" + i} className="monster-content">{renderMonsters(props, i)}</div>)
        }  
    }
    return (
        <section id="monsters-section">
            {rows}
        </section>
    );
}

export default MonsterSection;


