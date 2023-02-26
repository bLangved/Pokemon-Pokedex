import { indexHtml } from "./createHtml.js"
import { showLoadingAnimation, hideLoadingAnimation } from "./components/loadingAnimation.js"

const results = document.querySelector(".results")
results.innerHTML = "";

showLoadingAnimation()
// API call for the pokiAPI containing info on pokemons. This API-call is for showing all 151 (1.gen) pokemons on index.html.  
export async function pokemonApi() {

    try{
    // Array for the Promises
    const pokemonPromises = [];
    
    // Looping through the API-call. 
    for(let i = 1; i <= 151; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const response = await fetch(url);
        const pokemon = await response.json();    
        pokemonPromises.push(pokemon);
    }

    // Wait for all the promises to resolve 
    const pokemons = await Promise.all(pokemonPromises);

    // Map over the array of Pokemons and create an array for pokeDetails -> see variable below
    const pokeDetailsList = [];
    for(let i = 0; i < pokemons.length; i++){
        const pokemon = pokemons[i];
        const types = pokemon.types.map(function(type){
            return type.type.name;
        });
        
        const typeString = types.join(", ");
        
        // Properties used in createHtml.js for the pokemons showed on index.html.  
        const pokeDetails = {
            name: pokemon.name,
            id: pokemon.id,
            image: pokemon.sprites.front_default,
            type: typeString
        };
        pokeDetailsList.push(pokeDetails);

       
        hideLoadingAnimation();
        // console.log(pokeDetails);
         // Calling the function that creates html content for index.html containing "cards" with Pokemons (imported from "createHtml.js"). 
        indexHtml(pokeDetails);
        }
    }
    catch(error){
        hideLoadingAnimation();
        console.log("Error while fetching API:", error);
        results.innerHTML = displayError(error);
    }
};
setTimeout(pokemonApi, 1500);






 

