import {
  getBackgroundColorForType,
  updateBodyColor,
} from './utils/pokeColors.js';
import {
  findPreviousPokemonInChain,
  findNextPokemonInChain,
} from './utils/evolutionPattern.js';

const pokemonContainer = document.querySelector('#pokemonContainer');
const title = document.querySelector('#pokemonHeader');
const pokemonId = document.querySelector('#pokemonId');

const urlId = new URLSearchParams(window.location.search).get('id');

export function createSelectedPokemon(pokemon, evolutionChain) {
  title.innerText = pokemon.name;
  const idString = pokemon.id.toString().padStart(3, '0');
  pokemonId.innerText = '#' + idString;

  const image = document.createElement('img');
  image.classList.add('pokemon-img');
  image.src = pokemon.sprites.other['official-artwork'].front_default;
  pokemonContainer.append(image);

  const typesContainer = document.createElement('div');
  typesContainer.classList.add('pokemon-types');

  let colorsForGradient = [];

  pokemon.types.forEach((type) => {
    const elementType = document.createElement('span');
    elementType.classList.add('pokemon-type');
    elementType.innerText = type.type.name;

    const typeColor = getBackgroundColorForType(type.type.name);
    elementType.style.backgroundColor = typeColor;

    colorsForGradient.push(typeColor);

    typesContainer.append(elementType);
  });
  pokemonContainer.append(typesContainer);

  updateBodyColor(colorsForGradient);

  const infoContainer = document.createElement('div');
  infoContainer.classList.add('pokemon-info');

  const infoSection1 = document.createElement('div');
  infoSection1.classList.add('pokemon-info-section', 'pokemon-info-section1');

  const weight = document.createElement('span');
  weight.innerText = 'Weight: ' + pokemon.weight / 10 + ' kg';
  infoSection1.append(weight);

  const height = document.createElement('span');
  height.innerText = 'Height: ' + pokemon.height / 10 + ' m';
  infoSection1.append(height);

  const previousStage = document.createElement('span');
  let previousEvolutionName = findPreviousPokemonInChain(
    pokemon,
    evolutionChain,
  );
  previousStage.innerText =
    'Previous Evolution: ' + (previousEvolutionName || 'None');
  infoSection1.append(previousStage);

  const nextStage = document.createElement('span');
  let nextEvolutionName = findNextPokemonInChain(pokemon, evolutionChain);
  nextStage.innerText = 'Next Evolution: ' + (nextEvolutionName || 'None');
  infoSection1.append(nextStage);

  infoContainer.append(infoSection1);

  const infoSection2 = document.createElement('div');
  infoSection2.classList.add('pokemon-info-section', 'pokemon-info-section2');

  const baseStatsContainer = document.createElement('div');
  baseStatsContainer.classList.add('pokemon-base-stats');

  for (let stat of pokemon.stats) {
    const statName = document.createElement('span');
    statName.classList.add('stat-name');
    statName.innerText = stat.stat.name;
    baseStatsContainer.append(statName);

    const statValueContainer = document.createElement('div');
    statValueContainer.classList.add('stat-values');

    const statValueProgress = document.createElement('div');
    statValueProgress.classList.add('stat-value-progress');
    statValueProgress.style.width = (stat.base_stat / 255) * 100 + '%';

    const statValueText = document.createElement('span');
    statValueText.classList.add('stat-value-text');
    statValueText.innerText = stat.base_stat;
    statValueProgress.appendChild(statValueText);

    statValueContainer.append(statValueProgress);
    baseStatsContainer.append(statValueContainer);

    baseStatsContainer.append(statValueContainer);
  }

  infoSection2.append(baseStatsContainer);
  infoContainer.append(infoSection2);

  pokemonContainer.append(infoContainer);

  const nav = document.createElement('nav');
  nav.classList.add('pokemon-nav');

  const prevPokemonBtn = document.createElement('button');
  prevPokemonBtn.textContent = 'Previous Pokemon';
  prevPokemonBtn.addEventListener('click', () => {
    let prevId = Math.max(1, parseInt(urlId, 10) - 1);
    window.location.search = `id=${prevId}`;
  });
  nav.append(prevPokemonBtn);

  const nextPokemonBtn = document.createElement('button');
  nextPokemonBtn.textContent = 'Next Pokemon';
  nextPokemonBtn.addEventListener('click', () => {
    let nextId = Math.max(1, parseInt(urlId, 10) + 1);
    window.location.search = `id=${nextId}`;
  });
  nav.append(nextPokemonBtn);

  pokemonContainer.append(nav);
}
