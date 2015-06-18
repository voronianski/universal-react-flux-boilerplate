# react-flux-iso-boilerplate

> More or less stabilized starting point used in several of my projects.

## What's inside?

- [React](http://facebook.github.io/react) (0.13.x) + Flux ([Flummox](http://acdlite.github.io/flummox)) + [ReactRouter](http://rackt.github.io/react-router/tags/v0.13.3.html) (0.13.x) + Server Rendering
- build [webpack](http://webpack.github.io/) config with [hot reloading](http://gaearon.github.io/react-hot-loader)
- ES6/ES7 code transpiled by [Babel](http://babeljs.io)
- app configuration with [c0nfig](https://github.com/voronianski/c0nfig)
- [npm scripts](https://github.com/voronianski/react-flux-iso-boilerplate/blob/master/package.json#L6) for task automation

## How to use

Just `git clone git@github.com:voronianski/react-flux-iso-boilerplate.git` this repository and run `npm install` inside it. 

Then you can choose whether to:

- `npm run start-dev` app in development mode with hot reloading
- or `npm start` to make build with necessary environment (e.g. `NODE_ENV=production npm start` will make production build and run app in production mode) and start application server

## Styles

There's no CSS preprocessors, frameworks and builds inside. It's up to you to choose and setup them, though I'd recommend to use [cssnext](http://cssnext.io) + [basscss](http://www.basscss.com/).

---

**MIT Licensed**
