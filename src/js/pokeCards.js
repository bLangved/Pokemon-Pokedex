import {
  getBackgroundColorForType,
  updatePokeCardColor,
} from './utils/pokeColors.js';

const cardContainer = document.querySelector('#cardContainer');

function createPokeCards(pokemon) {
  const pokeCard = document.createElement('article');
  pokeCard.classList.add('pokeCard');
  pokeCard.id = `pokemon${pokemon.id}`;

  const typeColors = [];
  pokemon.types.forEach((type) => {
    const typeColor = getBackgroundColorForType(type.type.name);
    typeColors.push(typeColor);
  });
  updatePokeCardColor(typeColors, pokeCard);

  const background = document.createElement('div');
  background.classList.add('pokeCard-bg');
  pokeCard.append(background);

  const image = document.createElement('img');
  image.classList.add('pokeCard-img');
  image.src = pokemon.sprites.front_default;
  pokeCard.append(image);

  const textContainer = document.createElement('div');
  textContainer.classList.add('pokeCard-text');

  const id = document.createElement('span');
  id.classList.add('pokeCard-id');
  id.textContent = `#${pokemon.id.toString().padStart(3, '0')}`;
  textContainer.append(id);

  const name = document.createElement('span');
  name.classList.add('pokeCard-name');
  name.innerText = pokemon.name;
  textContainer.append(name);

  pokeCard.append(textContainer);

  const link = document.createElement('a');
  link.href = `./pokemon?id=${pokemon.id}`;
  link.setAttribute('aria-label', `View details about ${pokemon.name}`);

  link.append(pokeCard);

  cardContainer.append(link);
}

export function iteratePokemons(pokemons) {
  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    createPokeCards(pokemon);
  }
}
