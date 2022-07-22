# Express Starter Kit

<a href="http://www.typescriptlang.org/"><img src="https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg?style=flat-square" height="20"></a>

The web's most popular back-end framework template for building web api with
[Express](https://expressjs.com/).

## Features

- Module based directory structure.
- Example Postman collection.
- Pre-configured with Postgres using Prisma ORM
- Pre-configured with code quality tool: TypeScript.
- Pre-configured with Alias Import `import { ... } from '@module/...'`

---

## Directory Structure

```
📜.env                          # Set Environment Variables here
📜.gitignore                    # Git ignore file
📂src                           # Main Project folder / Source folder
 ┣ 📂api                        # API folder container all versions of API
 ┃ ┗ 📂v1                       # API version 1
 ┃ ┃ ┣ 📂config                 # Config folder configuration files
 ┃ ┃ ┃ ┣ 📜index.ts             # Export all child config files
 ┃ ┃ ┃ ┗ 📜prisma.config.ts     # Prisma Client configuration file
 ┃ ┃ ┣ 📂controller             # Controller folder contain model based controllers.
 ┃ ┃ ┃ ┗ 📜user.controller.ts   # model based controller
 ┃ ┃ ┣ 📂interfaces             # Interfaces folder contain model based interfaces and types.
 ┃ ┃ ┃ ┣ 📜index.ts             # `index.ts` contain global interfaces
 ┃ ┃ ┃ ┗ 📜user.interface.ts    # model based interface
 ┃ ┃ ┣ 📂middleware             # Middleware folder contain model based middleware
 ┃ ┃ ┣ 📂prisma                 # Prisma entry point
 ┃ ┃ ┃ ┗ 📜schema.prisma        # Prisma schema declaration file
 ┃ ┃ ┣ 📂routes                 # Routes contain model based routes
 ┃ ┃ ┃ ┣ 📜index.ts             # Export root router containing all child routes.
 ┃ ┃ ┃ ┗ 📜user.route.ts        # model based route
 ┃ ┃ ┗ 📂services               # Services contain model based services
 ┃ ┃ ┃ ┗ 📜user.service.ts      # model based service
 ┃ ┃ ┣ 📂utils                  # Utils contain utility functions.
 ┃ ┃ ┗ 📂validators             # Validators contain model based validators
 ┗ 📜app.ts                     # Entry point of server
📜tsconfig.ts                   # Typescript configuration file
📜package.json                  # NPM dependencies listing file
```

## Tech Stack

<img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/typescript.svg" title="TypeScript" width=50 height=50 style='margin-right: 15px'/> 
<img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/nodejs.svg" title="Node Js" width=50 height=50 style='margin-right: 15px'/> 
<img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/express.svg" title="Express Js" width=50 height=50 style='margin-right: 15px'/> 
<img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/prisma.svg" title="Prisma" width=50 height=50 style='margin-right: 15px'/> 
<img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/postgresql.svg" title="PostgreSql" width=50 height=50 style='margin-right: 15px'/>

## Requirements

- [Node.js](https://nodejs.org/) v16 or newer, [Yarn](https://yarnpkg.com/) package manager
- [VS Code](https://code.visualstudio.com/) editor with [recommended extensions](.vscode/extensions.json)

## Getting Started

- Clone it, Install project dependencies
  - ```sh
    git clone https://github.com/OmarFaruk-0x01/express-typescript-starter
    cd ./express-typescript-starter
    npm install
    ```
- Update the environment variables found in [`.env`](./.env),
  - ```sh
    PORT=4000
    DATABASE_URL=...            # Your Database Provider Connection URL
    ```
- Generate Prisma Client and Create a migration.
  - ```sh
    npm run prisma:gen
    npm run prisma:migrate
    ```
- Start hacking...
  - ```sh
    npm run dev
    ```

The app will become available at [http://localhost:4000](http://localhost:4000/).

## Scripts

- ```sh
  # Launches the server in development mode on http://localhost:4000/
  npm run dev
  ```
- ```sh
  # Compiles and bundles the app for deployment
  npm run build
  ```
- ```sh
  # Clear compiled files from `build` folder
  npm run build:clean
  ```
- ```sh
  # Clear full `build` folder
  npm run build:cleanAll
  ```
- ```sh
  # Generate Model for Prisma Client
  npm run prisma:gen
  ```
- ```sh
  # Migrate model with database
  npm run prisma:migrate
  ```
- ```sh
  # Open Prisma studio
  npm run prisma:studio
  ```

<!-- ## How to Deploy

Ensure that all the environment variables for the target deployment environment
(`test`, `prod`) found in [`/core/*.env`](./core/) files are up-to-date.

If you haven't done it already, push any secret values you may need to CF Workers
environment by running `yarn cf secret put <NAME> [--env #0]`.

Finally build and deploy the app by running:

```
$ yarn build
$ yarn deploy [--env #0] [--version #0]
```

Where `--env` argument is the target deployment area, e.g. `yarn deploy --env=prod`. -->

<!-- ## How to Update

- `yarn set version latest` — Bump Yarn to the latest version
- `yarn upgrade-interactive` — Update Node.js modules (dependencies)
- `yarn dlx @yarnpkg/sdks vscode` — Update TypeScript, ESLint, and Prettier settings in VSCode -->

<!-- ## Related Projects

- [GraphQL API and Relay Starter Kit](https://github.com/kriasoft/graphql-starter) — monorepo template, pre-configured with GraphQL API, React, and Relay
- [Cloudflare Workers Starter Kit](https://github.com/kriasoft/cloudflare-starter-kit) — TypeScript project template for Cloudflare Workers
- [Node.js API Starter Kit](https://github.com/kriasoft/node-starter-kit) — project template, pre-configured with Node.js, GraphQL, and PostgreSQL -->

<!-- ## How to Contribute

Anyone and everyone is welcome to [contribute](.github/CONTRIBUTING.md). Start
by checking out the list of [open issues](https://github.com/kriasoft/react-starter-kit/issues)
marked [help wanted](https://github.com/kriasoft/react-starter-kit/issues?q=label:"help+wanted").
However, if you decide to get involved, please take a moment to review the
[guidelines](.github/CONTRIBUTING.md). -->

<!-- ## License

Copyright © 2014-present Kriasoft. This source code is licensed under the MIT license found in the
[LICENSE](https://github.com/kriasoft/react-starter-kit/blob/main/LICENSE) file. -->
