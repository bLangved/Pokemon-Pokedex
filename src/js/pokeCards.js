const cardContainer = document.querySelector('#cardContainer');

function createPokeCards(pokemon) {
  const pokeCard = document.createElement('div');
  pokeCard.classList.add('pokeCard');

  const pokeCardBackground = document.createElement('div');
  pokeCardBackground.classList.add('pokeCard-background');
  pokeCard.append(pokeCardBackground);

  const pokeCardImg = document.createElement('img');
  pokeCardImg.classList.add('pokeCard-image');
  pokeCardImg.src = pokemon.sprites.front_default;
  pokeCard.append(pokeCardImg);

  const textContainer = document.createElement('div');
  textContainer.classList.add('pokeCard-text');

  const pokeCardId = document.createElement('span');
  pokeCardId.classList.add('pokeCard-id');
  // This will ensure your id is always 3 characters long, filled with '0' from the start if it's less than 3 characters.
  const idString = pokemon.id.toString().padStart(3, '0');
  pokeCardId.innerText = '#' + idString;
  textContainer.append(pokeCardId);

  const pokeCardName = document.createElement('span');
  pokeCardName.classList.add('pokeCard-name');
  pokeCardName.innerText = pokemon.name;
  textContainer.append(pokeCardName);

  pokeCard.append(textContainer);

  // Create the card href, and move to selectedPokemon.html when clicked
  const pokemonLink = document.createElement('a');
  pokemonLink.href = `./pokemon?id=${pokemon.id}`;

  pokemonLink.append(pokeCard);

  cardContainer.append(pokemonLink);
}

export function iteratePokemons(pokemons) {
  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    // console.log(pokemon);
    // Add pokemon arrays of pokemon object to session / local storage, and find a way to store them uniquely
    // All generations should be stored as seperate arrays
    // If f.ex 1.gen been stored, when trying to fetch again, it should be retrieved from storage instead of fetching from the api
    createPokeCards(pokemon);
  }
}
