import React, { useState, useEffect, useReducer } from "react";
// import './styles/css/App.css';
import { Header } from "./components";



function App() {
  return (
    <Header />



    //     <main>
    //       <section id="players-section">
    //         <div id="players-top">
    //             <div id="player-select">
    //               <label for="number-of-players">Party Size:</label>
    //               <select name="players" id="number-of-players">
    //                   <option value="1">One</option>
    //                   <option value="2">Two</option>
    //                   <option value="3">Three</option>
    //                   <option value="4">Four</option>
    //                   <option value="5">Five</option>
    //                   <option value="6">Six</option>
    //                   <option value="7">Seven</option>
    //                   <option value="8">Eight</option>
    //               </select>
    //             </div>
    //             <div id="player-display">
    //               <div class="player-level-selector">
    //                   <label for="player-one">Player Level:</label>
    //                   <select name="players" class="player-lvl" id="player-one">
    //                     <option value="1">1</option>
    //                     <option value="2">2</option>
    //                     <option value="3">3</option>
    //                     <option value="4">4</option>
    //                     <option value="5">5</option>
    //                     <option value="6">6</option>
    //                     <option value="7">7</option>
    //                     <option value="8">8</option>
    //                     <option value="9">9</option>
    //                     <option value="10">10</option>
    //                     <option value="11">11</option>
    //                     <option value="12">12</option>
    //                     <option value="13">13</option>
    //                     <option value="14">14</option>
    //                     <option value="15">15</option>
    //                     <option value="16">16</option>
    //                     <option value="17">17</option>
    //                     <option value="18">18</option>
    //                     <option value="19">19</option>
    //                     <option value="20">20</option>
    //                   </select>
    //               </div>
    //             </div>
    //             <div id="mobile-monster-controls">
    //               <button id="toggle-monsters-btn">>> Show Monsters >></button>
    //             </div>
    //         </div>
    //         <div id="players-bottom">
    //             <div id="player-summary-left">
    //               <p>Easy: </p>
    //               <p>Medium: </p>
    //               <p>Hard: </p>
    //               <p>Deadly: </p>
    //             </div>
    //             <div id="player-summary-right">
    //               <p id="easy-xp">25XP</p>
    //               <p id="medium-xp">50XP</p>
    //               <p id="hard-xp">75XP</p>
    //               <p id="deadly-xp">100XP</p>
    //             </div>
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


