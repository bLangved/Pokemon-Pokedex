import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent } from '../astro_A2MVN8B3.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                          */
import 'clsx';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$SiteHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SiteHeader;
  return renderTemplate`<!-- <header>
  <div class="bannerContainer">
    <a href="/">
      <h1 class="banner-title">Langveds</h1>
      <div class="banner-logo"></div>
    </a>
  </div>
  <div class="themeToggle-container">
    <span class="theme-text">Light theme</span>
    <button class="toggle-theme"></button>
  </div>
  <nav id="navPokeGen" class="nav_pokeGen">
    <ul>
      <li id="1PokeGen">1.gen</li>
      <li id="2PokeGen">2.gen</li>
      <li id="3PokeGen">3.gen</li>
      <li id="4PokeGen">4.gen</li>
      <li id="5PokeGen">5.gen</li>
      <li id="6PokeGen">6.gen</li>
      <li id="7PokeGen">7.gen</li>
      <li id="8PokeGen">8.gen</li>
      <li id="9PokeGen">9.gen</li>
    </ul>
  </nav>
</header> -->${maybeRenderHead()}<header data-astro-cid-ctg3m53h> <nav class="navbar navbar-dark bg-dark fixed-top" data-astro-cid-ctg3m53h> <div class="container-fluid" data-astro-cid-ctg3m53h> <a class="navbar-brand" href="/" data-astro-cid-ctg3m53h>Pokedex4life</a> <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation" data-astro-cid-ctg3m53h> <span class="navbar-toggler-icon" data-astro-cid-ctg3m53h></span> </button> <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" data-astro-cid-ctg3m53h> <div class="offcanvas-header" data-astro-cid-ctg3m53h> <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel" data-astro-cid-ctg3m53h>
Gotta catch em all!
</h5> <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" data-astro-cid-ctg3m53h></button> </div> <div class="offcanvas-body" data-astro-cid-ctg3m53h> <form class="d-flex mb-3" role="search" data-astro-cid-ctg3m53h> <input class="form-control me-2" type="search" placeholder="Search for Pokémon" aria-label="Search" data-astro-cid-ctg3m53h> <button class="btn btn-success" type="submit" data-astro-cid-ctg3m53h>Search</button> </form> <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" data-astro-cid-ctg3m53h> <li class="nav-item" data-astro-cid-ctg3m53h> <a class="nav-link active" aria-current="page" href="#" data-astro-cid-ctg3m53h>Home</a> </li> <li class="nav-item" data-astro-cid-ctg3m53h> <a class="nav-link" href="#" data-astro-cid-ctg3m53h>Link</a> </li> <li class="nav-item dropdown" data-astro-cid-ctg3m53h> <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-astro-cid-ctg3m53h>
Pokemon generations
</a> <ul class="dropdown-menu dropdown-menu-dark" id="navPokeGen" data-astro-cid-ctg3m53h> <li class="dropdown-item" id="1PokeGen" data-astro-cid-ctg3m53h>1.gen</li> <li class="dropdown-item" id="2PokeGen" data-astro-cid-ctg3m53h>2.gen</li> <li class="dropdown-item" id="3PokeGen" data-astro-cid-ctg3m53h>3.gen</li> <li class="dropdown-item" id="4PokeGen" data-astro-cid-ctg3m53h>4.gen</li> <li class="dropdown-item" id="5PokeGen" data-astro-cid-ctg3m53h>5.gen</li> <li class="dropdown-item" id="6PokeGen" data-astro-cid-ctg3m53h>6.gen</li> <li class="dropdown-item" id="7PokeGen" data-astro-cid-ctg3m53h>7.gen</li> <li class="dropdown-item" id="8PokeGen" data-astro-cid-ctg3m53h>8.gen</li> <li class="dropdown-item" id="9PokeGen" data-astro-cid-ctg3m53h>9.gen</li> </ul> </li> </ul> </div> </div> </div> </nav> </header>  `;
}, "/Users/langved/Documents/GitHub/pokemon-pokedex/src/components/SiteHeader.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`<html lang="en"> <head><title>Pokedex | Selected Pokemon</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" href="data:;base64,iVBORw0KGgo=">${renderHead()}</head> <body id="selectedPokemon"> ${renderComponent($$result, "SiteHeader", $$SiteHeader, {})} <main> <h1 class="title_selectedPokemon">Selected Pokemon</h1> <div class="pokemonId_selectedPokemon"></div> <div class="contentContainer contentContainer_selectedPokemon"> <div class="loadingContainer"> <p class="loadingText">Loading Pokemon...</p> <div id="loadingAnimation"></div> </div> <div class="errorMessageContainer"> <div class="errorMessage"></div> </div> <div class="pokemonContainer"></div> </div> </main>     </body> </html>`;
}, "/Users/langved/Documents/GitHub/pokemon-pokedex/src/pages/pokemon/index.astro", void 0);

const $$file$1 = "/Users/langved/Documents/GitHub/pokemon-pokedex/src/pages/pokemon/index.astro";
const $$url$1 = "/pokemon";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><title>Pokedex</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="generator"', '><link rel="icon" href="data:;base64,iVBORw0KGgo=">', '</head> <body id="index"> ', ' <main> <h2 id="pokeGenTitle" class="generation-title"></h2> <div class="contentContainer"> <div class="loadingContainer"> <p class="loadingText">Loading Pokemon...</p> <div id="loadingAnimation"></div> </div> <div class="errorMessageContainer"> <div class="errorMessage"></div> </div> <div class="pokeCardContainer"></div> </div> </main> <!-- <script src="../js/components/themeToggle.js"><\/script> -->    </body> </html>'])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "SiteHeader", $$SiteHeader, {}));
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
