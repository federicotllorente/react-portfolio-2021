require('dotenv').config();
const router = require('express').Router();
const jwt = require('jsonwebtoken');

const response = require('../handleErrors');
const { comparePasswords } = require('../handlePasswords');
const controllers = require('../controllers/users');

router.get('/', (req, res) => {
    // res.status(401).send('You do not have the required permissions');
    controllers.getUsers(req.query.username)
        .then(data => response.success(req, res, data, 200))
        .catch(error => response.error(req, res, error, 500, '[router] Error in controller trying to get the users'));
});

// Login
router.post('/login', (req, res) => {
    controllers.loginUser(req.body.username, req.body.password)
        .then(data => response.success(req, res, data, 200))
        .catch(error => response.error(req, res, error, 401, '[router] Error in controller trying to login'));
})

// Register (create user)
router.post('/', (req, res) => {
    // res.status(401).send('You do not have the required permissions');
    const isAdmin = typeof req.body.admin === 'boolean' ? req.body.admin : req.body.admin !== 'true' ? false : true;

    const authorization = req.get('authorization');
    let token = null;

    if (authorization?.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7);
    }

    // const decodedToken = jwt.verify();

    controllers.addUser(req.body.username, req.body.password, isAdmin)
        .then(data => response.success(req, res, data, 201))
        .catch(error => {
            if (error === 'Invalid username') {
                response.error(req, res, error, 400, '[router] Error in controller trying to add a user: Invalid username');
            } else {
                response.error(req, res, error, 500, '[router] Error in controller trying to add a user');
            }
        });
});

module.exports = router;