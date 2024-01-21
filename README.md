### Pokedex project

A frontend web application for checking out pokemons throughout all generations. Deployed site: https://pokedex4life.netlify.app/

This app gets its data from the pokèAPI: https://pokeapi.co/

## Technologies on this project

- HTML
- SCSS
- JS
- Bootstrap
- Astro
- SASS
- Prettier
- Concurrently
- Vite

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/en) installed on your system.

### Installation

Clone the repo:

```bash
gh repo clone bLangved/Pokemon-Pokedex
```

Install dependencies:

```bash
npm i
```

### Running the Project

**Do not use live-server.**
The project is configured to run with [Vite](https://vitejs.dev/). When running Vite, SCSS watcher gets started automaticly.

Run the project with the following command.

```bash
npm run dev
```

To build the project, run the following command:

```bash
npm run build
```

This will create a `dist` folder in the root of the project, which contains the compiled project.

You can preview the build by running the following command:

```bash
npm run preview
```

This is useful to see how the project will look when deployed and to test the build. This is recommended before pushing to the repository, as the build will be tested when creating a PR.

### Astro development

This project is setup with Astro. Mainly for the use of Astro-components. Therefore, see to the .astro files inside src/pages/ instead of regular .html pages.
