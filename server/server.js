require('dotenv').config();
const express = require('express');
const webpack = require('webpack');

const app = express();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

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

app.listen(process.env.PORT, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server running on port ${process.env.PORT}`);
    }
});