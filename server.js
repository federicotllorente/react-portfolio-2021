require('dotenv').config();
const path = require('path');
const fs = require('fs');
const express = require('express');
const webpack = require('webpack');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./server/router');
const connect = require('./server/db');
const sendMessage = require('./server/nodemailerConfig');

if (!fs.existsSync(path.join(__dirname, 'dist', process.env.FILES_ROUTE))) {
    fs.mkdirSync(path.join(__dirname, 'dist', process.env.FILES_ROUTE));
}

const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development') {
    console.log('[server] Development environment');
    const webpackConfig = require('./webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    const serverConfig = { port: port, hot: true };
    app.use(webpackDevMiddleware(compiler, serverConfig));
    app.use(webpackHotMiddleware(compiler));
} else {
    console.log('[server] Production environment');
    app.use(express.static(path.join(__dirname, 'dist')));
    app.use(helmet());
    app.use(helmet.permittedCrossDomainPolicies()); // To prevent loading content with Adobe Flash and Acrobat
    app.disable('x-powered-by'); // To prevent possible attacks to certain dependencies we're using
}

const uri = process.env.NODE_ENV === 'test' || 'development'
    ? `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME_TEST}?retryWrites=true&w=majority`
    : `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
connect(uri); // Connect to the database

app.use(cors()); // To enable all CORS requests
app.disable('etag');
app.use(bodyParser.json()); // To parse JSON requests
app.use(bodyParser.urlencoded({ extended: false })); // To parse URL Encoded requests
app.use('/api', router); // To manage all the API routes (like '/api/projects' or '/api/technologies')

// To manage the files routes in order to be able to see them
app.get('/files/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', req.originalUrl));
});

// To serve the statics after Webpack compiles the React App
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// To manage the contact form and its POST HTTP requests
app.post('/contact', (req, res) => {
    sendMessage(req.body, res);
});

const server = app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = { app, server };