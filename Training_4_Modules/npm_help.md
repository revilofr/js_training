Handling modules with npm
=========================
The following memory aid has been made by :
[olivier abrard](olivier.abrard@gmail.com) 
It has been made to help, while learning with 
[codeschool node.js courses](http://www.codeschool.com) I wanted to have
something left as a physical support after the course. and here it is.
Basically, it's my notes that I'm sharing. 

Modules that can be found into node_modules directory are packages.
Those packages are managed though npm which is a very good package 
manager (like maven in java). It handles dependencies, search, 
downloads, installs.

## Locally install a npm module 
 * cd into your project directory
 * then:
```bash
npm install <module name>
```

The npm install command will install the module into
<your app path>/node_module/<new module>

## To use the module
To use the newly downloaded module
```javascript
var module_name = require('your_module')
```

## Globaly install a npm module
We already saw how to install a module "locally".
```bash
npm install <module name> -g
```
_**Note:** that module can be installed "globally", a module has to 
provide its own executable. So, it is not possible to require such a 
module by requiring it as we could do for local npm installs._

## Install a module and add it to the package.json
```bash
npm install --save <module name> 
```

## Search a specific package
```bash
npm search <your package name>
```

## Creating a npm package with dependencies
A good practice is to create a <your_app>/package.json file to specify
lots of option like :
 * "name" : <The name of your app>
 * "dependencies" : <your dependencies and versions>
```json
{
  "name": "myApp",
  "version": "1.0",
  "dependencies": {
    "dep1": "2.4.2"
  }
}
```
The install command will check this specific file to ensure every needed
dependency has been downloaded into the application dir.
```bash
npm install
```
If dependencies are missing, they will be downloaded and fetched
into our **node_modules** directory.
_**Note:** if the module you are installing also has its dependencies,
they will be downloaded as well in the sub hierarchy of the dependency._

## Semantic version
As we already know, package.json handles dependencies, but rather than
depending on a specific version of a module, it is possible to depend on
ranges of versions.

### Ranges
As a picture is often better that a discussion here is an example as it
could be found in a package.json file:
```
connect : "1.8.7"
```
with Major.Minor.Patch

| Range  |              Meaning               |
| ------ | ---------------------------------- |
| ~1     | >=1.0.0 <2.0.0  //Dangerous        |
| ~1.8   | >=1.8.0 <1.9.0  //API could change |
| ~1.8.7 | >=1.8.7 <1.9.0  //Considered safe  |