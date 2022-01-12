
function MonsterCollapsibles(props) {
    const highestCr = 30;
    const lowestCr = 0;
    const emptyCat1 = 28;
    const emptyCat2 = 29;

    let rows = [];

    for (let i = 0; i <= highestCr; i++) {
        if (i == lowestCr) {
            rows.push(<button type="button" key={"cr-" + i} idref={i} className="collapsible">Challenge Rating {i}</button>)  
            rows.push(<div id={"cr-" + i} key={"collapsibleDiv" + i} className="monster-content"></div>)

            rows.push(<button type="button" key={"cr-" + "eighth"} idref="eighth" className="collapsible">Challenge Rating 1/8</button>)
            rows.push(<div id="cr-eighth" key={"collapsibleDiv" + "Eighth"} className="monster-content"></div>)
            
            rows.push(<button type="button" key={"cr-" + "quarter"} idref="quarter" className="collapsible">Challenge Rating 1/4</button>)
            rows.push(<div id="cr-quarter" key={"collapsibleDiv" + "Quarter"} className="monster-content"></div>)
            
            rows.push(<button type="button" key={"cr-" + "half"} idref="half" className="collapsible">Challenge Rating 1/2</button>)
            rows.push(<div id="cr-half" key={"collapsibleDiv" + "Half"} className="monster-content"></div>)
        } 
        if (i != lowestCr && i != emptyCat1 && i != emptyCat2) {
            rows.push(<button type="button" key={"cr-" + i} idref={i} className="collapsible">Challenge Rating {i}</button>)
            rows.push(<div id={"cr-" + i} key={"collapsibleDiv" + i} className="monster-content"></div>)
        }  
    }
    return (
        <section id="monsters-section">
            {rows}
        </section>
    );
}

export default MonsterCollapsibles;





