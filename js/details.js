import { detailsHtml } from "./createHtml.js"
import { showLoadingAnimation, hideLoadingAnimation } from "./components/loadingAnimation.js"

const results = document.querySelector(".results")
results.innerHTML = "";

showLoadingAnimation()

// This API-call is for showing info on the Pokemon being selected on index.html, and opens up that Pokemon on details.html.
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://pokeapi.co/api/v2/pokemon/" + id;

export async function fetchSelectedPokemon(){
    
    try{
    const response = await fetch(url);
    const results = await response.json();    
    const pokemon = results;

    // Properties used in createHtml.js for the selected pokemon showed on details.html.  
    const pokeDetails = {
        name: pokemon.name,
        id: pokemon.id,
        imageFront: pokemon.sprites.front_default,
        imageBack: pokemon.sprites.back_default,
        type: pokemon.types.map((type) => type.type.name).join(", "),
        weight: pokemon.weight,
        height: pokemon.height,
        stats: {
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat
        }
    }

    hideLoadingAnimation();

    detailsHtml(pokeDetails);
    }
    catch(error){
        hideLoadingAnimation();
        console.log("Error while fetching API:", error);
        results.innerHTML = displayError(error);
    }
};
setTimeout(fetchSelectedPokemon, 1000);

 