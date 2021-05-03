require('dotenv').config();
const router = require('express').Router();

const response = require('../handleErrors');
const controllers = require('../controllers/technologies');

router.get('/', (req, res) => {
    controllers.getTechnologies()
        .then(data => response.success(req, res, data, 200))
        .catch(error => response.error(req, res, error, 500, '[router] Error in controller trying to get the technologies'));
});

router.post('/', (req, res) => {
    if (req.body.password !== process.env.API_PASSWORD) {
        response.error(req, res, 'You are not authotized to send this request', 401, 'Someone not authorized is trying to make a POST HTTP request to the API');
    } else {
        controllers.addTechnology(req.body.name)
            .then(data => response.success(req, res, data, 201))
            .catch(error => response.error(req, res, error, 500, '[router] Error in controller trying to add a technology'));
    }
});

router.delete('/', (req, res) => {
    res.status(200).send('Removing a technology');
});

module.exports = router;