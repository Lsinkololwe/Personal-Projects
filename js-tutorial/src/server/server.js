const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const app = express();
const config = require('../../webpack.config.js');
const compiler = webpack(config);

// Register routes
const home = require('./home/server.home')


// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);


app.use('/home', home);

// Serve the files on port 3000.
app.listen(3000, function () {});

