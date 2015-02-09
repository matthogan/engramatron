
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

##Invoking Services

##CORS

[Cross origin resource check](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Access-Control-Allow-Headers)... aka pain in the ....

![Cors Server Flowchart](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Cors Server Flowchart")

###CORS Check

See [HTTP access control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

	curl -i -X OPTIONS <address>*
	e.g.
	curl -i -X OPTIONS http://localhost:8083/tip/user

* address must be an exposed endpoint

###Create User

	curl -i -X POST -d @<json file> <address> --header "Content-type:application/json" --header "Accept:application/json"
	e.g.
	curl -i -X POST -d @user-post.json http://localhost:8083/tip/user --header "Content-type:application/json" --header "Accept:application/json"

* for XML, just change the mime-type to application/xml and point to an xml request

The file user-post.json may be found in /docs/json

