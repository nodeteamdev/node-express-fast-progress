# Node.js REST API with Express Mongoose

![CircleCI branch](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser/master.svg?style=flat-square)
![npm](https://img.shields.io/npm/dm/localeval.svg?style=flat-square)
![Plugin on redmine.org](https://img.shields.io/redmine/plugin/stars/redmine_xlsx_format_issue_exporter.svg?style=flat-square)
![onix](https://img.shields.io/badge/onix-systems-blue.svg)

> Node.js Express API with vanilla JS. Supports MongoDB(mongoose)

> See [node-express-typescript-api](https://www.npmjs.com/package/generator-node-express-typescript-api) if you need TypeScript

## Description
This generator will help you to build your own Node.js REST API with Express Mongoose.

### Project Introduction
- suppot ES6/ES7 features
- using tslint followed [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## Requirements

- node >= 12
- npm >= 6
- mongodb >= 4.0

## Installation

First, install [Yeoman](http://yeoman.io) and generator-node-express-fast-progress using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-node-express-fast-progress
```

Then generate your new project:

```bash
yo node-express-fast-progress
```

## App skeleton
```
.
├── LICENSE
├── README.MD
├── nodemon.json
├── package-lock.json
├── package.json
└── src
    ├── components
    │   ├── User
    │   │   ├── index.js
    │   │   ├── model.js
    │   │   ├── router.js
    │   │   ├── service.js
    │   │   └── validation.js
    │   └── validation.js
    ├── config
    │   ├── connection.js
    │   ├── middleware.js
    │   └── router.js
    ├── error
    │   └── ValidationError.js
    └── server
        ├── events.js
        ├── index.js
        └── server.js
```
## Running the API
### Development
To start the application in development mode, run:

```bash
npm install -g nodemon
npm install
```

Start the application in dev env:
```
nodemon
```
Start the application in production env:

Install forever PM2:
```
npm install -g pm2
```

example start with scale on 2 core:
```
pm2 start ./src/index.js -i 2 --no-daemon
```

Express server listening on http://localhost:3000/, in development mode
The developer mode will watch your changes and re-run the node application automatically.

### Find User
```
   curl --location --request GET 'localhost:3000/v1/users'
```

### Create User
```
   curl --location --request POST 'localhost:3000/v1/users' \
   --header 'Content-Type: application/json' \
   --data-raw '{
      "email": "test@gmail.com",
      "fullName": "Wow Yay"
   }'
```

### Update User
```
   curl --location --request PUT 'localhost:3000/v1/users' \
   --header 'Content-Type: application/json' \
   --data-raw '{
      "id": "5e50265429fbb59255fb8428",
      "fullName": "Yay Foo"
   }'
```

### Delete User
```
   curl --location --request DELETE 'localhost:3000/v1/users' \
   --header 'Content-Type: application/json' \
   --data-raw '{
      "id": "5e502541bb617386c48f6a8c"
   }'
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

[travis-image]: https://travis-ci.org/caiobsouza/generator-ts-node-api.svg?branch=master
[travis-url]: https://travis-ci.org/caiobsouza/generator-ts-node-api














