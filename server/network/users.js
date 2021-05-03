require('dotenv').config();
const router = require('express').Router();

// const response = require('../handleErrors');
// const controllers = require('../controllers/users');

router.get('/', (req, res) => {
    res.status(401).send('You do not have the required permissions');
    // controllers.getUsers()
    //     .then(data => response.success(req, res, data, 200))
    //     .catch(error => response.error(req, res, error, 500, '[router] Error in controller trying to get the users'));
});

router.post('/', (req, res) => {
    res.status(401).send('You do not have the required permissions');
    // controllers.addUser(req.body.username, req.body.password, req.body.admin || false)
    //     .then(data => response.success(req, res, data, 201))
    //     .catch(error => response.error(req, res, error, 500, '[router] Error in controller trying to add a user'));
});

module.exports = router;