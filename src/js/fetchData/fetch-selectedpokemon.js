import {
  showLoadingAnimation,
  hideLoadingAnimation,
} from '../components/loadingAnimation.js';
import { createSelectedPokemon } from '../selectedPokemon.js';

const errorMessageContainer = document.querySelector('.errorMessageContainer');
const errorMessage = document.querySelector('.errorMessage');

// This API-call is for showing info on the Pokemon being selected on index.html, and opens up that Pokemon on details.html.
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
const url1 = 'https://pokeapi.co/api/v2/pokemon/' + id; // Pokemon base data

showLoadingAnimation();
async function fetchSelectedPokemon() {
  try {
    const response1 = await fetch(url1);
    const results1 = await response1.json();
    const pokemon = results1;

    // Fetch the Pokemon species data to get the evolution chain URL
    const speciesResponse = await fetch(pokemon.species.url);
    const speciesData = await speciesResponse.json();

    // Extract the ID of the evolution chain from the URL
    const evolutionChainUrl = speciesData.evolution_chain.url;

    const response2 = await fetch(evolutionChainUrl);
    const results2 = await response2.json();
    const evolutionChain = results2;

    createSelectedPokemon(pokemon, evolutionChain);
    hideLoadingAnimation();
  } catch (error) {
    hideLoadingAnimation();
    errorMessageContainer.style.display = 'block';
    console.log(error);
    errorMessage.innerText = error;
  }
}
fetchSelectedPokemon();
