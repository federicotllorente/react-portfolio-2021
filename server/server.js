require('dotenv').config();
const express = require('express');

const app = express();

if (process.env.PORT === 'development') {
    console.log('Development environment');
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