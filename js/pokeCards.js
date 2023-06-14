const pokeCardContainer = document.querySelector(".pokeCardContainer");

function createPokeCards (pokemon){
    const pokeCard = document.createElement("div");
    pokeCard.classList.add("pokeCard");
    
    const pokeCardBackground = document.createElement("div");
    pokeCardBackground.classList.add("pokeCard-background");
    pokeCard.append(pokeCardBackground);

    const pokeCardImg = document.createElement("img");
    pokeCardImg.classList.add("pokeCard-image");
    pokeCardImg.src = pokemon.sprites.front_default;
    pokeCard.append(pokeCardImg);

    const textContainer = document.createElement("div");
    textContainer.classList.add("pokeCard-text");


    const pokeCardId = document.createElement("span");
    pokeCardId.classList.add("pokeCard-id");
    // This will ensure your id is always 3 characters long, filled with '0' from the start if it's less than 3 characters.
    const idString = pokemon.id.toString().padStart(3, "0"); 
    pokeCardId.innerText = "#" + idString;
    textContainer.append(pokeCardId);
    
    const pokeCardName = document.createElement("span");
    pokeCardName.classList.add("pokeCard-name");
    pokeCardName.innerText = pokemon.name;
    textContainer.append(pokeCardName);
    
    pokeCard.append(textContainer);
    
    pokeCardContainer.append(pokeCard);
}









export function iteratePokemons(pokemons){
    for(let i = 0; i < pokemons.length; i++){
        const pokemon = pokemons[i];
        createPokeCards(pokemon);
    }
    }