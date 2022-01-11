const defaultApiUrl = "https://api.open5e.com/";

export async function fetchAllMonsters() {
  const response = await fetch(`${defaultApiUrl}monsters/?limit=2000`);
  const data = await response.json();
  return data.results;
}

// async function initApp() {
//   const monsters = await fetchMonsters(defaultApiUrl);
//   console.log("initApp ", monsters);
//   monsterArray = monsters;
//   renderMonsters(monsters);
//   hideLoadingScreen();
// }


//   //Fetch data from an API ()
// //Use loading, and error states to handle the async loading process
// const [data, setData] = useState(null);
// const[loading, setLoading] = useState(false);
// const [error, setError] = useState(null);

// useEffect(() => {
//   setLoading(true);
//   fetch(`https://api.github.com/users/${login}`)
//   .then((response) => response.json())
//   .then(setData)
//   .then(() => setLoading(false))
//   .catch(setError);
// }, [login]);

// if(loading) return <h1>Loading...</h1>;
// if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
// if (!data) return null;

// return (
//   <div className="App">
//     <header className="App-header">

//     </header>
//   </div>
// );
// }