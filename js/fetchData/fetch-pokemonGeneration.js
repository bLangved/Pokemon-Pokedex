import { iteratePokemons } from "../pokeCards.js";
import { showLoadingAnimation, hideLoadingAnimation } from "../components/loadingAnimation.js";

const errorMessageContainer = document.querySelector(".errorMessageContainer");
const errorMessage = document.querySelector(".errorMessage");


// const morePokemonBtn = document.querySelector(".showMorePokemon-btn");
// morePokemonBtn.addEventListener("click", function(){
//     start += 50;
//     fetchAllPokemon(start, end);
// })
async function fetchAllPokemon() {
    

    showLoadingAnimation();
    try{        

        if(currentPage === "1Gen"){
            await fetchPokemonInRange(1, 151);
        }
        else if(currentPage === "2Gen"){
            await fetchPokemonInRange(152, 251);
        }
        else if(currentPage === "3Gen"){
            await fetchPokemonInRange(252, 386);
        }
        else if(currentPage === "4Gen"){
            await fetchPokemonInRange(387, 493);
        }
        else if(currentPage === "5Gen"){
            await fetchPokemonInRange(494, 649);
        }
        else if(currentPage === "6Gen"){
            await fetchPokemonInRange(650, 721);
        }
        else if(currentPage === "7Gen"){
            await fetchPokemonInRange(722, 809);
        }
        else if(currentPage === "8Gen"){
            await fetchPokemonInRange(810, 905);
        }
        else if(currentPage === "9Gen"){
            await fetchPokemonInRange(906, 1010);
        }

        async function fetchPokemonInRange(start, end) {
            const pokemonPromises = [];
          
            for (let i = start; i <= end; i++) {
              const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
              const promise = fetch(url).then(response => response.json());
              pokemonPromises.push(promise);
            }
          
            const pokemons = await Promise.all(pokemonPromises);
            iteratePokemons(pokemons);
          }

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
