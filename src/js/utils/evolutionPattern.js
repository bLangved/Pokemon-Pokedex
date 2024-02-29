export function findPreviousPokemonInChain(pokemon, evolutionChain) {
  if (
    evolutionChain.chain.evolves_to.length > 0 &&
    evolutionChain.chain.evolves_to[0].species.name === pokemon.name
  ) {
    return evolutionChain.chain.species.name;
  } else if (
    evolutionChain.chain.evolves_to.length > 0 &&
    evolutionChain.chain.evolves_to[0].evolves_to.length > 0 &&
    evolutionChain.chain.evolves_to[0].evolves_to[0].species.name ===
      pokemon.name
  ) {
    return evolutionChain.chain.evolves_to[0].species.name;
  } else if (
    evolutionChain.chain.evolves_to.length > 0 &&
    evolutionChain.chain.evolves_to[0].evolves_to.length > 0 &&
    evolutionChain.chain.evolves_to[0].evolves_to[0].evolves_to.length > 0 &&
    evolutionChain.chain.evolves_to[0].evolves_to[0].evolves_to[0].species
      .name === pokemon.name
  ) {
    return evolutionChain.chain.evolves_to[0].evolves_to[0].species.name;
  }
}

export function findNextPokemonInChain(pokemon, evolutionChain) {
  if (evolutionChain.chain.species.name === pokemon.name) {
    // console.log('1.Pokemon in chain');
    if (evolutionChain.chain.evolves_to.length > 0) {
      return evolutionChain.chain.evolves_to[0].species.name;
    }
  } else if (
    evolutionChain.chain.evolves_to.length > 0 &&
    evolutionChain.chain.evolves_to[0].species.name === pokemon.name
  ) {
    // console.log('2.Pokemon in chain');
    if (evolutionChain.chain.evolves_to[0].evolves_to.length > 0) {
      return evolutionChain.chain.evolves_to[0].evolves_to[0].species.name;
    }
  } else if (
    evolutionChain.chain.evolves_to.length > 0 &&
    evolutionChain.chain.evolves_to[0].evolves_to.length > 0 &&
    evolutionChain.chain.evolves_to[0].evolves_to[0].species.name ===
      pokemon.name
  ) {
    // console.log('3. Pokemon in chain');
    return 'none';
  }
}
