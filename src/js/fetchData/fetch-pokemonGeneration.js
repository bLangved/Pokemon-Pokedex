import { iteratePokemons } from '../pokeCards.js';
import {
  showLoadingAnimation,
  hideLoadingAnimation,
} from '../components/loadingAnimation.js';

const errorMessageContainer = document.querySelector('.errorMessageContainer');
const errorMessage = document.querySelector('.errorMessage');
const pokeCardContainer = document.querySelector('.pokeCardContainer');
const pokeGenTitle = document.querySelector('#pokeGenTitle');

function clearPokeDisplay() {
  while (pokeCardContainer.firstChild) {
    pokeCardContainer.removeChild(pokeCardContainer.firstChild);
  }
}

const pokeGenNav = document.querySelector('#navPokeGen');
pokeGenNav.addEventListener('click', handleGenClick);

async function handleGenClick(event) {
  const genItem = event.target.closest('li');
  if (genItem && pokeGenNav.contains(genItem)) {
    const genNumber = genItem.id.replace('PokeGen', '');
    await fetchAllPokemon(genNumber);
  }
}

async function fetchAllPokemon(gen) {
  showLoadingAnimation();
  clearPokeDisplay();
  pokeGenTitle.innerText = `${gen}. Generation`;

  // Sets the title of the page to the selected generation
  window.document.title = `Pokedex | ${gen}. Generation`;

  try {
    const genRanges = {
      1: [1, 151],
      2: [152, 251],
      3: [252, 386],
      4: [387, 493],
      5: [494, 649],
      6: [650, 721],
      7: [722, 809],
      8: [810, 905],
      9: [906, 1010],
    };

    const [start, end] = genRanges[gen] || [];
    if (start && end) {
      await fetchPokemonInRange(start, end);
    } else {
      throw new Error('Invalid generation');
    }

    hideLoadingAnimation();
  } catch (error) {
    hideLoadingAnimation();
    errorMessageContainer.style.display = 'block';
    console.log(error);
    errorMessage.innerText = error.message || error;
  }
}

async function fetchPokemonInRange(start, end) {
  const pokemonPromises = [];

  for (let i = start; i <= end; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const promise = fetch(url).then((response) => response.json());
    pokemonPromises.push(promise);
  }

  const pokemons = await Promise.all(pokemonPromises);
  iteratePokemons(pokemons);
}
