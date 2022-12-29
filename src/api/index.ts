const defaultApiUrl = "https://api.open5e.com/";

export async function fetchAllMonsters() {
  const response = await fetch(`${defaultApiUrl}monsters/?limit=2000`);
  const data = await response.json();
  return data.results;
}