export function getBackgroundColorForType(type) {
  const colorMap = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

  return colorMap[type] || '#777';
}

/**
 * @param {array} colors
 * @description Recieves an array of Pokemon types, and return corresponding color matching that type
 * @description Used for setting background color on selected pokemon
 * @returns Single or multiple color(s) based on amount of types
 */
export function updateBodyColor(colors) {
  const body = document.querySelector('body');

  if (colors.length === 1) {
    body.style.backgroundColor = colors;
  } else {
    const gradient = `linear-gradient(to right, ${colors.join(', ')})`;
    body.style.backgroundImage = gradient;
  }
}

/**
 * @param {array} colors
 * @description Recieves an array of Pokemon types, and return corresponding color matching that type
 * @description Used for setting background color on Pokecards
 * @returns Single or multiple color(s) based on amount of types
 */
export function updatePokeCardColor(colors, card) {
  if (colors.length === 1) {
    card.style.backgroundColor = colors;
  } else {
    const gradient = `linear-gradient(to right, ${colors.join(', ')})`;
    card.style.backgroundImage = gradient;
  }
}
