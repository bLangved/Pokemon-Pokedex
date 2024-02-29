import { iteratePokemons } from '../pokeCards.js';
import clearCardContainer from '../components/clearCardContainer.js';
import showError from '../errorHandling/errorMessage.js';
import {
  showLoadingAnimation,
  hideLoadingAnimation,
} from '../components/loadingAnimation.js';

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

export async function fetchGeneration(gen) {
  clearCardContainer();
  showLoadingAnimation();
  window.document.title = `Pokédex | ${gen}. Generation`;
  currentGen = gen;
  hasMorePokemons = true;

  try {
    const [start, end] = genRanges[gen] || [];
    if (start && end) {
      currentStartId = start;
      await fetchPokemonBatch(start, Math.min(start + 29, end));
    } else {
      throw new Error('Invalid generation');
    }
    hideLoadingAnimation();
  } catch (error) {
    hideLoadingAnimation();
    showError(error);
  }

  generationHeader.innerText = `${gen}. Generation`;

  loadMorePokeBtn.style.display = 'block';
  loadMorePokeBtn.addEventListener('click', async () => {
    if (!hasMorePokemons) return;

    const [, genEnd] = genRanges[currentGen] || [];
    await fetchPokemonBatch(
      currentStartId,
      Math.min(currentStartId + 29, genEnd),
    );
  });
}

async function fetchPokemonBatch(start, end) {
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
