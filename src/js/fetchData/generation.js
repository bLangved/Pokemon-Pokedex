import { iteratePokemons } from '../pokeCards.js';
import {
  showLoadingAnimation,
  hideLoadingAnimation,
} from '../components/loadingAnimation.js';

const errorMessageContainer = document.querySelector('#errorMessageContainer');
const errorMessage = document.querySelector('#errorMessage');
const cardContainer = document.querySelector('#cardContainer');
const generationHeader = document.querySelector('#generationHeader');
const loadMorePokeBtn = document.querySelector('#loadMorePokeBtn');

let currentStartId;
let currentGen;
let hasMorePokemons = true;

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

function clearPokeDisplay() {
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
}

const genNavs = document.querySelectorAll('#navPokeGen');
genNavs.forEach((genNav) => {
  genNav.addEventListener('click', handleGenClick);
});

async function handleGenClick(event) {
  const genItem = event.target.closest('li');
  if (genItem) {
    const genNumber = genItem.id.replace('PokeGen', '');
    await fetchAllPokemon(genNumber);
  }
}

async function fetchAllPokemon(gen) {
  showLoadingAnimation();
  clearPokeDisplay();
  generationHeader.innerText = `${gen}. Generation`;
  window.document.title = `Pokédex | ${gen}. Generation`;
  currentGen = gen;
  hasMorePokemons = true;

  try {
    const [start, end] = genRanges[gen] || [];
    if (start && end) {
      currentStartId = start;
      await fetchPokemonInRange(start, Math.min(start + 29, end));
      loadMorePokeBtn.style.display = 'block';
    } else {
      throw new Error('Invalid generation');
    }
    hideLoadingAnimation();
  } catch (error) {
    hideLoadingAnimation();
    errorMessageContainer.style.display = 'block';
    errorMessage.innerText = error.message || error;
  }
}

loadMorePokeBtn.addEventListener('click', async () => {
  if (!hasMorePokemons) return;

  const [, genEnd] = genRanges[currentGen] || [];
  await fetchPokemonInRange(
    currentStartId,
    Math.min(currentStartId + 29, genEnd),
  );
});

async function fetchPokemonInRange(start, end) {
  showLoadingAnimation();
  const pokemonPromises = [];

  for (let i = start; i <= end; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const promise = fetch(url).then((response) => response.json());
    pokemonPromises.push(promise);
  }

  const pokemons = await Promise.all(pokemonPromises);
  iteratePokemons(pokemons);
  hideLoadingAnimation();
  currentStartId = end + 1;

  if (currentStartId > genRanges[currentGen][1]) {
    hasMorePokemons = false;
    loadMorePokeBtn.style.display = 'none';
  } else {
    loadMorePokeBtn.style.display = 'block';
  }
}
