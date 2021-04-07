require('dotenv').config();
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');
const connect = require('./db');

const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development') {
    console.log('[server] Development environment');
    const webpackConfig = require('../webpack.config');
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

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
connect(uri); // Connect to the database

app.use(cors()); // To enable all CORS requests
app.use(bodyParser.json()); // To parse JSON requests
app.use(bodyParser.urlencoded({ extended: false })); // To parse URL Encoded requests
app.use('/api', router); // To manage all the API routes (like '/api/projects' or '/api/technologies')

app.get('*', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Front-end Developer Portfolio by Federico Tejedor Llorente" />
                <title>Front-end Developer – Federico Tejedor Llorente</title>
            </head>
            <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <div id="root"></div>
                <script src="bundle.js" type="text/javascript"></script>
            </body>
        </html>
    `);
});

app.listen(port, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server running on port ${port}`);
    }
});