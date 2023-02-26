const displayPokemon = document.querySelector(".pokemonContainer"); //index.html
const webpageTitle = document.querySelector(".title-webpage_details"); // details.html
const detailTitle = document.querySelector(".title_details"); // details.html
const displayDetails = document.querySelector(".pokemonDetails"); // details.html


// The additional code on "pokeName" (regarding pokeDetails.name) is for capitalizing the first letter of the name.

// Creating html for index.html
export function indexHtml(pokeDetails){
const pokeIndexHtml = `
                    <a href="details.html?id=${pokeDetails.id}">
                        <div class="pokemonCard">
                        <img class="pokeImg" src="${pokeDetails.image}" alt="Picture of ${pokeDetails.name}">
                        <div class="pokeName">${pokeDetails.name.charAt(0).toUpperCase() + pokeDetails.name.slice(1)}</div> 
                        <div class="pokeId">ID: ${pokeDetails.id}</div>
                        <div class="pokeType">Type: ${pokeDetails.type}</div>
                        </div>
                    </a>`;
displayPokemon.innerHTML += pokeIndexHtml;
};

// Creating html for details.html
export function detailsHtml(pokeDetails){
const pokeDetailsHtml = `
                        <div class="pokeDetails">
                            <div class="pokeImg_details">
                                <img class="pokeImgFront" src="${pokeDetails.imageFront}" alt="Picture of ${pokeDetails.name} front view">
                                <img class="pokeImgBack" src="${pokeDetails.imageBack}" alt="Picture of ${pokeDetails.name} back view">
                            </div>

                            <div class="pokeInformation">

                                <div class="pokeId_details">Pokemon ID: ${pokeDetails.id}</div>
                                <div class="pokeType_details">Type: ${pokeDetails.type}</div>

                                <div class="variousPokeInfo">
                                    <div class="pokeWeight">Weight: ${pokeDetails.weight / 10}kg</div>
                                    <div class="pokeHeight">Height: ${pokeDetails.height / 10}m</div>
                                </div>

                                <div class="pokemonStats">
                                    <div class="statsBar statsHp">HP: ${pokeDetails.stats.hp}</div>
                                    <div class="statsBar statsAttack">Attack: ${pokeDetails.stats.attack}</div>
                                    <div class="statsBar statsDefence">Defense: ${pokeDetails.stats.defense}</div>
                                    <div class="statsBar statsSpeed">Speed: ${pokeDetails.stats.speed}</div>
                                </div>
                            </div>

                        <a href="https://bulbapedia.bulbagarden.net/wiki/${pokeDetails.name}_(Pok%C3%A9mon)" 
                        class="bulbapediaLink"> For more information on ${pokeDetails.name}, visit Bulbapedia.net here.</a>

                        </div>`;
                        
webpageTitle.innerHTML = `Pokèmon: ${pokeDetails.name}`;                        
detailTitle.innerHTML = `<h1 class="title_details">${pokeDetails.name.charAt(0).toUpperCase() + pokeDetails.name.slice(1)}</h1>`;
displayDetails.innerHTML += pokeDetailsHtml;
};

