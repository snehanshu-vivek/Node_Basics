How to Start with Node:
$ npm init

PS E:\Jonas_Backend\Node Farm\Node_Basics\10_Final_Setup> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (10_final_setup) node_farm
version: (1.0.0)
description: basic_package_to_learn
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to E:\Jonas_Backend\Node Farm\Node_Basics\10_Final_Setup\package.json:

{
  "name": "node_farm",
  "version": "1.0.0",
  "description": "basic_package_to_learn",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

Is this OK? (yes)


How to install packages:
$ npm install <package-name>
$ npm i <package-name>

Dependencies can be used two ways:-
Local Settings:
$ npm install <package-name>
Global Settings:
$ npm install <package-name> --global

Dependencies are of two types:
1) Simple Dependency: Production code is dependent on this module.
$ npm install <package-name> or $ npm install <package-name> --save
2) Dev Dependency: Dependency which is not part of production code but help in development.
$ npm install <package-name> --save-dev

How to uninstall packages:
$ npm uninstall <package-name>


How to use local dependencies as script:-
Use scripts field of package.json file.
{
  "name": "node_farm",
  "version": "1.0.0",
  "description": "basic_package_to_learn",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "author": "",
  "license": "ISC"
}

How to run the script:
$ npm run start
$ npm start

How to use 3rd Party module:
Add inclusion:
const slugify = require('slugify')

Use the functionality from 3rd party modules:
const slugs = dataObj.map(el => slugify(el.productName, {lower: true}));
console.log(slugs);


Package Versioning and Updating:
Package versions are given as a.b.c where:
a : Major Version[Related to major updates in packages.]
b : Minor Version[Related to backward compatible feature update.]
c : Patch Version[Related to bug fixing only.]

How to install specific version of package
$ npm install <package-name>@version
Ex-
$ npm install slugify@1.0.0

How to check for outdated packages:
$ npm outdated

Dependencies versions are given by:
"dependencies": {
    "slugify": "^1.6.6"
}

^ means it accepts till latest minor number release on top of version in package.json
PS E:\Jonas_Backend\Node Farm\Node_Basics\10_Final_Setup> npm outdated
Package  Current  Wanted  Latest  Location              Depended by
slugify    1.0.0   1.6.6   1.6.6  node_modules/slugify  10_Final_Setup

^~ means it accepts till latest patch number release on top of version in package.json
PS E:\Jonas_Backend\Node Farm\Node_Basics\10_Final_Setup> npm outdated
Package  Current  Wanted  Latest  Location              Depended by
slugify    1.0.0   1.0.2   1.6.6  node_modules/slugify  10_Final_Setup

* means it accepts till latest major number release[Most Latest Release] on top of version in package.json

Updating to the Wanted Package can be done by:
$ npm update <package-name>
$ npm update slugify

if package.json is not updated, use:
$ npm update <package-name> --save

If you get some new project to checkout, you can use:
$ npm install
It will install all dependencies of this project.
