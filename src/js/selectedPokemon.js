import {
  getBackgroundColorForType,
  updateBodyColor,
} from './utils/pokemonUtils.js';
import {
  findPreviousPokemonInChain,
  findNextPokemonInChain,
} from './utils/evolutionPattern.js';

const pokemonContainer = document.querySelector('.pokemonContainer');
const title = document.querySelector('.title_selectedPokemon');
const pokemonId = document.querySelector('.pokemonId_selectedPokemon');

const urlId = new URLSearchParams(window.location.search).get('id');

export function createSelectedPokemon(pokemon, evolutionChain) {
  // POKEMON NAME AND ID
  title.innerText = pokemon.name;
  // This will ensure your id is always 3 characters long, filled with '0' from the start if it's less than 3 characters.
  const idString = pokemon.id.toString().padStart(3, '0');
  pokemonId.innerText = '#' + idString;

  // POKEMON IMAGE
  const pokemonImage = document.createElement('img');
  pokemonImage.classList.add('selectedPokemon-image');
  pokemonImage.src = pokemon.sprites.other['official-artwork'].front_default;
  pokemonContainer.append(pokemonImage);

  // POKEMON TYPES
  const pokemonTypesContainer = document.createElement('div');
  pokemonTypesContainer.classList.add('selectedPokemon-typesContainer');

  // Stores type value(s) here for use in updateBodyColor()
  let colorsForGradient = [];

  pokemon.types.forEach((type) => {
    const pokemonType = document.createElement('span');
    pokemonType.classList.add('selectedPokemon-type');
    pokemonType.innerText = type.type.name;

    const typeColor = getBackgroundColorForType(type.type.name);
    pokemonType.style.backgroundColor = typeColor;

    // Store the color for later use in body-gradient
    colorsForGradient.push(typeColor);

    pokemonTypesContainer.append(pokemonType);
  });
  pokemonContainer.append(pokemonTypesContainer);

  // Update body background
  updateBodyColor(colorsForGradient);

  // POKEMON INFO-CONTAINER
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('selectedPokemon-infoContainer');

  // INFO-SECTION 1
  const infoSection1 = document.createElement('div');
  infoSection1.classList.add(
    'selectedPokemon-infoSection',
    'selectedPokemon-infoSection1',
  );

  // POKEMON WEIGHT / HEIGHT
  const pokemonWeight = document.createElement('span');
  pokemonWeight.innerText = 'Weight: ' + pokemon.weight / 10 + ' kg';
  infoSection1.append(pokemonWeight);

  const pokemonHeight = document.createElement('span');
  pokemonHeight.innerText = 'Height: ' + pokemon.height / 10 + ' m';
  infoSection1.append(pokemonHeight);

  const pokemonPreviousStage = document.createElement('span');
  let previousEvolutionName = findPreviousPokemonInChain(
    pokemon,
    evolutionChain,
  );
  pokemonPreviousStage.innerText =
    'Previous Evolution: ' + (previousEvolutionName || 'None');
  infoSection1.append(pokemonPreviousStage);

  const pokemonNextStage = document.createElement('span');
  let nextEvolutionName = findNextPokemonInChain(pokemon, evolutionChain);
  pokemonNextStage.innerText =
    'Next Evolution: ' + (nextEvolutionName || 'None');
  infoSection1.append(pokemonNextStage);

  infoContainer.append(infoSection1);

  // INFO-SECTION 2
  const infoSection2 = document.createElement('div');
  infoSection2.classList.add(
    'selectedPokemon-infoSection',
    'selectedPokemon-infoSection2',
  );

  // POKEMON BASE STATS
  const baseStatsContainer = document.createElement('div');
  baseStatsContainer.classList.add('selectedPokemon-baseStats');

  // const

  for (let stat of pokemon.stats) {
    // Create stat name
    const statName = document.createElement('span');
    statName.classList.add('stat-name');
    statName.innerText = stat.stat.name;
    baseStatsContainer.append(statName);

    // Create stat value container
    const statValueContainer = document.createElement('div');
    statValueContainer.classList.add('stat-value-container');

    // Create stat value progress
    const statValueProgress = document.createElement('div');
    statValueProgress.classList.add('stat-value-progress');
    statValueProgress.style.width = (stat.base_stat / 255) * 100 + '%'; // this will convert the stat value into a percentage of the maximum

    // Create stat value text
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

  // POKEMON NAV BTNS
  const navContainer = document.createElement('div');
  navContainer.classList.add('navContainerBottom');

  // PREVIOUS
  const btnPreviousPokemon = document.createElement('button');
  btnPreviousPokemon.textContent = 'Previous Pokemon';
  btnPreviousPokemon.addEventListener('click', () => {
    let prevId = Math.max(1, parseInt(urlId, 10) - 1); // decrease the id by 1 but not less than 1
    window.location.search = `id=${prevId}`; // update the URL
  });
  navContainer.append(btnPreviousPokemon);

  // NEXT
  const btnNextPokemon = document.createElement('button');
  btnNextPokemon.textContent = 'Next Pokemon';
  btnNextPokemon.addEventListener('click', () => {
    let nextId = Math.max(1, parseInt(urlId, 10) + 1); // decrease the id by 1 but not less than 1
    window.location.search = `id=${nextId}`; // update the URL
  });
  navContainer.append(btnNextPokemon);

  pokemonContainer.append(navContainer);
}
