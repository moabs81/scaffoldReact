## How to use this scaffold

### Important: Do not clone this repo directly into your new project
#### Also, don't forget to replace this readme.md with a readme for your actual project

#### This node.js based project scaffold and dev toolchain is very much a WIP and to be honest is mostly for me, but feel free to use it! But yours is probably better... It consists of:

* Webpack-Dev-Server (see config/ for webpack configuration)
* ESLint with lightly customized rules configuration (see config/ for rule-set)
* Babel with preset 'env' (based on babel-preset-env)
* LESS (but switching to Sass soon, because wth why am I using the Lesser one? \#PunIntended)
* Mocha + Chai for the assertion library - but, may slim down and only use mocha + node's built in assert library. We'll see... 
    * the tests don't actually test anything.. they will as soon as I figure out what it means to unit test client side DOM focused modules.. 
* jQuery, exposed as project global (i.e. can be used in any module without being required or imported) using Webpack's ProvidePlugin plugin, because I'm stuck in 2013.
* JSON-Server to mock simple APIs (I love this thing, seriously. Also, I'm so easy to impress, seriously. Also, I haven't configured this at all other than to include it in the project and in the scripts list. But after struggling with CORS issues in a local environment for what seemed like decades but was probably hours, this thing is heavenly.)
    * a db.json source file contains a few pieces of data, designed to mock company locations and users
* A few modules, mostly placeholders
    * The component 'workbench container' includes the top menu, the transition code for scrolling and parallax, and returns the name of the target 'root' div for you to start building your application. The stylesheet for it is a bit of a mess, and like cleaning up a junk drawer, it is on my to-do list to clean it up. 

#### Global dependencies
Node and NPM can be installed by installing [Node and NPM](https://nodejs.org/en/).

All global package dependencies can be installed using <code>npm install -g</code>. I have no idea if the versions are really that important to this scaffold, so ya know... 

* node.js (6.11.0)
    * needed to run everything
* npm (5.6.0)
    * also needed for everything in this non-browser world
* webpack (3.6.0)
    * needed to run <code>npm run build</code>
* webpack-dev-server (2.9.1)
    * needed to run <code>npm run start</code>
* mocha (4.0.1)
    * needed to run <code>npm run test</code>

#### How to set up

1. Clone this repo to a separate location in your code directory, eg. 'code\scaffold'
2. Copy the entire root, as-is, into your new project empty project directory
3. After the copy, delete the .git file from the new project directory - this is the main reason not to clone this directly, as doing so may mess with your new project repo
4. Open 'package.json' and update it with your project title, version, description, and author
5. Now run <code>npm i</code> or <code>yarn install</code> to install the scaffold.  Is there a more elegant way to do this? Yes, it's called [Yeoman](http://yeoman.io/learning/) and someday I'll figure that out :) 

#### How to run

This toolset uses npm scripts and a chain of Webpack plug-ins and loaders rather than a task runner like gulp or grunt. See 'package.json' for the NPM scripts used to run the dev environment. As a first troubleshooting step, see the above list of globals if you have problems running the scripts. 

* To run the dev server, use <code>npm run start</code> and navigate to http://localhost:4000
* To run the fake API, use <code>npm run API</code>. The base URL of the API is http://localhost:3000
* To run the test suite, use <code>npm run test</code>. Obviously, make sure you have, like, tests first    
* Before building the project, use <code>npm run clean dist</code> to delete the contents of the dist/ directory prior to bundling into it
* To build this project, use <code>npm run build</code> - I need to fix this config though, so it may not work right now
* If you have built this project, run <code>npm run serve</code> and navigate to http://localhost:5000 to use JSON-Server to serve the build locally

#### My ambitions

- [ ] I am still learning how to organize actual code, so right now this scaffold doesn't include any directories for code past the src/components level. In fact, to call it a scaffold at all is probably pretty generous/incorrect, it's really little more than a directory structure and an install file... At some point I might create more structure
- [ ] My lint --> test --> build task flow could be cleaner or more automated, probably
- [ ] I really only have a hazy view of what I want to do with this, but I want to write a test suite to validate this template upon install. probably validate some env vars, path builds, do a few dependency checks, etc... 
- [ ] Because there are global dependencies, I eventually intend to set this environment up in [containers](https://www.docker.com/) so as to reduce the required host dependencies to only Docker, just as a can-I-do-this exercise
- [ ] I also intend to use a scaffolding tool like [Yeoman](http://yeoman.io/learning/) to do this entire process more gracefully at some point