import showError from '../errorHandling/errorMessage.js';
import {
  showLoadingAnimation,
  hideLoadingAnimation,
} from '../components/loadingAnimation.js';
import { createSelectedPokemon } from '../selectedPokemon.js';

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
const url1 = 'https://pokeapi.co/api/v2/pokemon/' + id;

showLoadingAnimation();
async function fetchSelectedPokemon() {
  try {
    const response1 = await fetch(url1);
    const results1 = await response1.json();
    const pokemon = results1;

    const pokemonName =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    window.document.title = `Pokédex | ${pokemonName}`;

    const speciesResponse = await fetch(pokemon.species.url);
    const speciesData = await speciesResponse.json();

    const evolutionChainUrl = speciesData.evolution_chain.url;

    const response2 = await fetch(evolutionChainUrl);
    const results2 = await response2.json();
    const evolutionChain = results2;

    createSelectedPokemon(pokemon, evolutionChain);
    hideLoadingAnimation();
  } catch (error) {
    hideLoadingAnimation();
    showError(error);
  }
}
fetchSelectedPokemon();
