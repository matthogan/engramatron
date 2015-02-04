
##Technology Stack

* html5
* angular
* yeoman
* grunt
* bower

##Features

* localisation (angular-localization)

##Starting from scratch

Follow the instructions on [yeoman.io](http://yeoman.io/codelab/setup.html).

Install [nodejs](http://nodejs.org/)

Then run these commands.

	npm install -g npm-check-updates
	npm install -g yo bower grunt-cli
	npm install -g generator-angular

##Setup existing project

Clone from the repository.

In the project root run:

	npm install grunt-ng-constant --save-dev
	npm install grunt-contrib-imagemin --save-dev
	npm-check-updates -u
	npm install
	bower install

###npm install grunt-ng-constant --save-dev
Ref: (https://www.npmjs.com/package/grunt-ng-constant)
Create configuration files on the fly

###npm-check-updates -u
Ref: (https://github.com/tjunnone/npm-check-updates)
Upgrades the package.json

###npm install
Ref: (https://docs.npmjs.com/cli/install)
Installs project dependences in node_modules

###bower install
Ref: (http://bower.io/docs/api/#install)
Installs various dependencies based on bower.json and installs them based on .bowerrc.

##Generating a site

Ref: (http://yeoman.io/codelab/scaffold-app.html)

For instance, one based on Angular

	yo angular

##Adding Routes

Consists of a controller and a view. 
Generate with yeoman.

	yo angular:route <name of new route>

##Adding Services

Need something to wire the MVC with some logic.

	yo angular:factory <name of service>

Generates scripts in test/.../services and app/.../services.

##Run the project

In the project root:

	grunt serve

On nix/cygwin run in background:

	grunt serve &

