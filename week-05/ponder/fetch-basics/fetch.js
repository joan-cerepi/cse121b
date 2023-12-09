const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doThis(data);
  }
}

function doStuff(data) {
  const outputElement = document.querySelector("#output");
  let results = data;
  const html = `<h2>${results.name}</h2>
              <img src="${results.sprites.front_default}" alt="Images of ${results.name}">`;
  outputElement.innerHTML = html;
}

function doStuffList(data) {
  const outputListElement = document.querySelector("#outputList");
  const pokeList = data.results;
  pokeList.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));

  pokeList.forEach((pokemon) => {
    const pokemonElement = document.createElement("li");
    pokemonElement.textContent = pokemon.name;

    outputListElement.appendChild(pokemonElement);
  });
}

getPokemon(url, doStuff);
getPokemon(urlList, doStuffList);
