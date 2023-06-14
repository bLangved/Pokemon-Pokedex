import { iteratePokemons } from "../pokeCards.js";
import { showLoadingAnimation, hideLoadingAnimation } from "../components/loadingAnimation.js";

const errorMessageContainer = document.querySelector(".errorMessageContainer");
const errorMessage = document.querySelector(".errorMessage");

// API call for the pokiAPI containing info on pokemons. This API-call is for showing all 151 (1.gen) pokemons on index.html.  
async function fetchAllPokemon() {

    showLoadingAnimation();
    try{        
        const pokemonPromises = [];
        
        // Looping through the API-call with the selected Pokémon generation. 
        if(currentPage === "1Gen"){
            for(let i = 1; i <= 151; i++){
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                const response = await fetch(url);
                const pokemon = await response.json();    
                pokemonPromises.push(pokemon);
            }
        }
        else if (currentPage === "2Gen"){
            for(let i = 152; i <= 251; i++){
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                const response = await fetch(url);
                const pokemon = await response.json();    
                pokemonPromises.push(pokemon);
            }
        }
        else if (currentPage === "3Gen"){
            for(let i = 252; i <= 386; i++){
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                const response = await fetch(url);
                const pokemon = await response.json();    
                pokemonPromises.push(pokemon);
            }
        }
        else if (currentPage === "4Gen"){
            for(let i = 387; i <= 493; i++){
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                const response = await fetch(url);
                const pokemon = await response.json();    
                pokemonPromises.push(pokemon);
            }
        }
        else if (currentPage === "5Gen"){
            for(let i = 494; i <= 649; i++){
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                const response = await fetch(url);
                const pokemon = await response.json();    
                pokemonPromises.push(pokemon);
            }
        }
        else if (currentPage === "6Gen"){
            for(let i = 650; i <= 721; i++){
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                const response = await fetch(url);
                const pokemon = await response.json();    
                pokemonPromises.push(pokemon);
            }
        }
        else if (currentPage === "7Gen"){
            for(let i = 722; i <= 809; i++){
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                const response = await fetch(url);
                const pokemon = await response.json();    
                pokemonPromises.push(pokemon);
            }
        }
        else if (currentPage === "8Gen"){
            for(let i = 810; i <= 905; i++){
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                const response = await fetch(url);
                const pokemon = await response.json();    
                pokemonPromises.push(pokemon);
            }
        }
        else if (currentPage === "9Gen"){
            for(let i = 906; i <= 1016; i++){
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                const response = await fetch(url);
                const pokemon = await response.json();    
                pokemonPromises.push(pokemon);
            }
        }

        // Wait for all the promises to resolve 
        const pokemons = await Promise.all(pokemonPromises);

        iteratePokemons(pokemons);
        hideLoadingAnimation();
    }
    catch(error){
        hideLoadingAnimation();
        errorMessageContainer.style.display = "block";
        console.log(error);
        errorMessage.innerText = error;
    }
};
fetchAllPokemon();
