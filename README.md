# splatalittle-overlays

Broadcast overlays for [Splatalittle.](https://www.twitch.tv/splatalittlespl) 

## Setup

- Set up `ipl-overlay-controls` using the [installation guide.](https://ipl-overlay-controls.readthedocs.io/en/latest/users-guide/#installation)

### Pre-built version (For production use)

- Clone the `build` branch of this repository to `[nodecg]/bundles/splatalittle-overlays`
- All done!

### Build manually

- Ensure you have access to the private GSAP registry: [Guide](https://greensock.com/docs/v3/Installation#private)
- Insert your GSAP API key into the `.npmrc` file. DO NOT commit this to git!
- Clone this repository to `[nodecg]/bundles/splatalittle-overlays`
- Install dependencies: `npm i`
- Run build: `npm run build`

#### Other npm commands

- `build`: Create a production-ready build.
- `build:dev`: Create a development build with better debugging options.
- `build:clean`: Combines `build` and `clean` tasks.
- `clean`: Removes built files.
- `start`: Starts NodeCG.
- `watch`: Runs a build and rebuilds when changes are found.
- `lint`: Checks for linter errors
- `fix`: Automatically fixes some linter errors
- `schema-types`: Create or update type definitions for replicant schemas found in the `schemas` directory

## CI

This repository includes a GitHub Actions script that automatically lints and builds the overlays.
It requires two secrets to function:

- `GSAP_AUTH`: The GSAP authorization token, used to pull packages from npm.

Please assure that the repository's GITHUB_TOKEN is configured to have write access to the repo.
