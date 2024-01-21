import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead } from '../astro_Am5jilBH.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`<html lang="en"> <head><title>Pokedex | Selected Pokemon</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" href="data:;base64,iVBORw0KGgo=">${renderHead()}</head> <body id="selectedPokemon"> <header> <div class="bannerContainer"> <a href="/"> <h1 class="banner-title">Langveds</h1> <div class="banner-logo"></div> </a> </div> <div class="themeToggle-container"> <span class="theme-text">Light theme</span> <button class="toggle-theme"></button> </div> </header> <main> <h1 class="title_selectedPokemon">Selected Pokemon</h1> <div class="pokemonId_selectedPokemon"></div> <div class="contentContainer contentContainer_selectedPokemon"> <div class="loadingContainer"> <p class="loadingText">Loading Pokemon...</p> <div id="loadingAnimation"></div> </div> <div class="errorMessageContainer"> <div class="errorMessage"></div> </div> <div class="pokemonContainer"></div> </div> </main>     </body> </html>`;
}, "/Users/langved/Documents/GitHub/pokemon-pokedex/src/pages/pokemon/index.astro", void 0);

const $$file$1 = "/Users/langved/Documents/GitHub/pokemon-pokedex/src/pages/pokemon/index.astro";
const $$url$1 = "/pokemon";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><title>Pokedex</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" href="data:;base64,iVBORw0KGgo=">${renderHead()}</head> <body id="index"> <header> <div class="bannerContainer"> <a href="/"> <h1 class="banner-title">Langveds</h1> <div class="banner-logo"></div> </a> </div> <div class="themeToggle-container"> <span class="theme-text">Light theme</span> <button class="toggle-theme"></button> </div> </header> <main> <nav id="navPokeGen" class="nav_pokeGen"> <ul> <li id="1PokeGen">1.gen</li> <li id="2PokeGen">2.gen</li> <li id="3PokeGen">3.gen</li> <li id="4PokeGen">4.gen</li> <li id="5PokeGen">5.gen</li> <li id="6PokeGen">6.gen</li> <li id="7PokeGen">7.gen</li> <li id="8PokeGen">8.gen</li> <li id="9PokeGen">9.gen</li> </ul> </nav> <h2 id="pokeGenTitle" class="generation-title"></h2> <div class="contentContainer"> <div class="loadingContainer"> <p class="loadingText">Loading Pokemon...</p> <div id="loadingAnimation"></div> </div> <div class="errorMessageContainer"> <div class="errorMessage"></div> </div> <div class="pokeCardContainer"></div> </div> </main>     </body> </html>`;
}, "/Users/langved/Documents/GitHub/pokemon-pokedex/src/pages/index.astro", void 0);

const $$file = "/Users/langved/Documents/GitHub/pokemon-pokedex/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
