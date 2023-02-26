// I was trying to call the functions from this file (ment to be my "main"-js file for the project), , but I keep getting syntax errors like this one:
// SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data details.js:45:17
// Could not find out how to solve it, so I instead ended up on calling the functions directly in their own js-files. 

// import { pokemonApi } from "./index.js"
// import { fetchSelectedPokemon } from "./details.js"



// // Setting a delay for when the API-calls shows the result on the page. 
// // The issue with this solution is that if any errors occurs, the error is also delayed by the "setTimeout". I'm aware of this. 

// // Calling function for index.html
// setTimeout(pokemonApi, 1500);

// // Calling function for details.html
// setTimeout(fetchSelectedPokemon, 1000);