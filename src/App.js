import React, { useState, useEffect, useReducer } from "react";
import { Header, PlayerSelect, PartyList, MonsterToggle, PlayerSummary } from "./components";



function App() {
  return (
    <>
      <Header />
      <main>
        <section id="players-section">
          <div id="players-top">
            <PlayerSelect />
            <PartyList />
            <MonsterToggle />
          </div>
          <div id="players-bottom">
            <PlayerSummary />
          </div>
        </section>
      </main>
    </>
          

 

   

 

    //         </div>

    //       </section>


    //       <section id="encounter-section">
    //         <div id="encounter-top">

    //         </div>
    //         <div id="encounter-bottom">
    //             <div id="encounter-summary-left">
    //               <p>Sum: </p>
    //               <p>Multiplier: </p>
    //               <p>XP: </p>
    //             </div>
    //             <div id="encounter-summary-right">
    //               <p>-</p>
    //               <p>-</p>
    //               <p>-</p>
    //             </div>
    //         </div>
    //         </div>
    //       </section>
    //       <section id="monsters-section">
    //       </section>
    //       </section>
    //   </main>
    //   <footer>
    //   </footer>
    //     <script type="module" src="./scripts/main.js"></script>  
    // </body>
    // </html>
  );
}

export default App;





// const [loading, setLoading] = useState([true]);

// useEffect(() => {
//   fetchAllMonsters()
//   .then((res) => setLoading(false));
// }, []);

// useEffect(() => {
//   if (!setLoading){

//   }
// }, [loading]);


