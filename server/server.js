require('dotenv').config();
const express = require('express');
const webpack = require('webpack');

const app = express();

if (process.env.NODE_ENV === 'development') {
    console.log('Development environment');
    const webpackConfig = require('../webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    const serverConfig = { port: process.env.PORT, hot: true };
    app.use(webpackDevMiddleware(compiler, serverConfig));
    app.use(webpackHotMiddleware(compiler));
} else {
    console.log('Production environment');
}

app.get('*', (req, res) => {
    res.send({ hello: 'express' });
});

app.listen(process.env.PORT, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server running on port ${process.env.PORT}`);
    }
});