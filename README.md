# React Boilerplate with Auto Alias #

This repo is React boilerplate using auto alias specified webpack.config - modulesDirectories.
Hence, Developers do not need specify alias for file paths in webpack config and it does not need specify file path in import or require statement.
It has all node packages which are needed to start React project.

# Usage: #

* Clone this repo

* Create "components" folder in the "app" folder. Put all components into this "component" folder.

* At the root project folder, open command prompt run command: npm install

* At the root project folder, open command prompt run command: run node server.js 

* At the root project folder, open command prompt run webpack -w 

# Quick summary #
React boilerplate which contains all packages that are needed to start React project.

It can be used with regular babel syntax or ES6 - Class syntax.

# Example - Auto Alias #
Developer does not need require like:

* var CustomComp = require('file_path/CustomComp') 
* import CustomComp from 'file_path/CustomComp'

Instead, developer can do:

* var CustomComp = require('CustomComp')

* import CustomComp from 'CustomComp'