const express = require('express');
const router = express.Router();

router.get('/projects', (req, res) => {
    res.send({ hello: '/projects' });
});

router.get('/technologies', (req, res) => {
    res.send({ hello: '/technologies' });
});

module.exports = router;