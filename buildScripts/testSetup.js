//This file is not transpiled, so must use CommonJS and ES5

//Register babel to transpile before our testrs run.
require('babel-register')();

//disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function(){};
