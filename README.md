# Git Started with React (Server-side Edition):
Just a quick-start application for small projects, prototyping, and hackathons. Compiled with babel, it assumes development will happen with ES6. React is compiled with babel via Webpack and uses a hot loader. Styles are rendered via sass.

This seed also comes equipped with react-router for routing, and amplify-store for client session management.

This server-side seed is very much a work in progress. Use at your own peril.

##Installation
Clone the repo:

```git clone https://github.com/conmused/git-started-with-react.git```

### Node:
Install Node Dependancies:

```npm install```

Install Testing Dependancies (React.js):

```npm install jest -g```
###Ruby (optional):
I prefer Bundler for gem versioning.

Install Bundler:

```gem install bundler```

Install Bundler Dependancies, [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/):

```bundler install```

##Configuration
All compiled files are kept in the ```/content``` folder.

##App Structure
```
.
│   #Express App Structure
│
├── server                   # Express server files.
│   ├── config               # Express Environment configuration.
│   └ app.js                 # Express Application, renders server-side react.
│
│   #React App Structure
│
├── scripts                  # Client side Javascript files.
│   └── React                # React Application files.
│   │   ├── __tests__        # Jest Tests
│   │   ├── actions          # Actions (Reflux)
│   │   ├── components       # All react components
│   │   ├── constants        # All constants
│   │   ├── stores           # All dispatchers/stores (reflux)
│   │   ├── App.jsx          # Root application file.
│   │   ├── preprocessor.js  # Preproccessor for Jest
│   │   └── RouteTable.jsx   # Routing Table
│   ├── shims                # IE support shims
│   └── vendor               # vendor scripts
│
├── node_modules             # All node modules.
│
│   #SCSS Structure
│
├── sass                     # Sass structure (DOCSSA Formatted)
│   ├── base                 # Project foundation and mixins
│   ├── components           # component styles
│   ├── specifics            # page specific styles
│   ├── vendor               # vendor styles (normalize.css included)
│   └── app.scss             # Root application styles.
│
├── Gemfile                  # Bundler gem dependicies
├── Gemfile.Lock             # Bundler gem lockfile.
├── Gemfile.Lock             # Bundler gem lockfile.
│
│   #Grunt TaskRunner Structure
│
├── tasks                    # All grunt configs, bundled via gruntfile.
│   ├── options              # grunt task configuration files
│   └── build.js             # grunt build/serve options, based on environment.
│
│   #Compiled Content Structure
│
├── content                  # Static site content, and compiled artifacts.
│   ├── css                  # Compiled sass
│   ├── fonts                # Site fonts
│   ├── img                  # Site images
│   └── js                   # browserified react, concatenated vendor scripts.
│
└── dist                     # Compiled content for production.
    ├── content
    ├── server
    ├── Procfile
    ├── package.json
    ├── .htaccess
    ├── .favicon
    └── robots.txt


```

####Scripts
- ```App.jsx``` is rendered out server-side.
- All ```.js``` and ```.jsx``` files are compiled down to a single file.
- react, reflux, amplify, and lodash are converted to commonjs and bundled together in content/js/vendor.js
- More vendors can be added, but given how browserify works, you'll have to add new tasks to manage these. Of course, can always just link to external modules, they're just harder to test.

####CSS
- CSS is compiled via sass, into css/app.css. SASS structure follows a basic [DoCSSa](http://docssa.org)-style format, but relied on bourbon and neat for mixins and scaffolding.

##Usage (Building and Running)
- ```npm run build``` to compiles your dev environment
- ```npm run build-production``` creates a copy of the dev environment for production into the dist folder. Easily create a sub repo for pushing to heroku (or wherever) with no excess files.
- ```npm run serve``` compiles a dev environment, opens your default browser, then runs grunt watch. Browserify and sass recompile on save, and reload on complete.

##Roadmap
- Automate heroku deployment
- Include server side tests. Probably mocha.
- Yeoman automation?

##License
[BSD](http://opensource.org/licenses/bsd-license.php)
Copyright (c) 2015, Matthew Potter
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
