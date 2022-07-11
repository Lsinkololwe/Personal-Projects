// Register babel to transpile before our tests runs
require('@babel/register')

//Disable webpack features that mocha don't understand
require.extensions['.css'] = function (){}
