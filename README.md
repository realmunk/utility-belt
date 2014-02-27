The utility-belt
============

The utility-belt is a starter-kit for front-end projects. It's a suggested collection of packages to solve some of the issues that front-end projects may suffer from. It's built for modularity, reproducibility and easy collaboration.

It's built upon the NodeJS platform and uses the following packages & frameworks:

1. ExpressJS (http://expressjs.com/)
2. Jade (http://jade-lang.com/)
3. LESS (http://lesscss.org/)
4. RequireJS (http://requirejs.org/)
5. Bower (http://bower.io/)
6. Grunt (http://gruntjs.com/getting-started)

Dependencies
============

To get the environment up and running, follow this 3-step recipe:

  1. NodeJS. Get it at http://www.nodejs.org
  2. After getting node up and running. Open your command line, go to the folder where you have cloned this repository.
  3. Type "npm install". Now you will have everything you need to develop on this project.

Some basics about this package
============
- To get the developer environment up and running, write the following in the command line: "npm start".
  - Access the server through the browser on: http://localhost:1337
- To get liveupdates running, type: "grunt watch".
  DEPENDENCIES:
  - Chrome with LiveReload Chrome Extension: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en
  - Might work for other browsers aswell, just google it.
- To build the app for production, type: "grunt build".
- To test the app after a build, type: "npm run-script prod".
