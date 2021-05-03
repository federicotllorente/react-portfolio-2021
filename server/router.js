require('dotenv').config();
const path = require('path');
const express = require('express');
const multer = require('multer');
const response = require('./handleErrors');
const controllers = require('./controllers');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `dist/${process.env.FILES_ROUTE}/`);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

router.get('/projects', (req, res) => {
    const filterTechnology = req.query.technology || ''; // '/projects?technology=ID,ID,ID'
    const filterTechnologyArray = filterTechnology ? filterTechnology.split(',') : '';
    const filterPathname = req.query.pathname || ''; // '/projects?pathname=path'
    const page = req.query._page; // '/projects?_page=X'
    const limit = req.query._limit; // '/projects?_limit=X'
    controllers.getProjects(filterTechnologyArray, filterPathname, page, limit)
        .then(data => response.success(req, res, data, 200))
        .catch(error => response.error(req, res, error, 500, '[router] Error in controller trying to get the projects'));
});

router.post('/projects', upload.array('images', 10), (req, res) => {
    if (req.body.password !== process.env.API_PASSWORD) {
        response.error(req, res, 'You are not authotized to send this request', 401, 'Someone not authorized is trying to make a POST HTTP request to the API');
    } else {
        const { pathname, name, typeENG, typeSPA, year, technologies, ux, url, gitHub, descriptionENG, descriptionSPA, inDevelopment, available } = req.body;
        const images = req.files;
        controllers.addProject(pathname, name, typeENG, typeSPA, year, technologies, ux, url, gitHub, images, descriptionENG, descriptionSPA, inDevelopment, available)
            .then(data => response.success(req, res, data, 201))
            .catch(error => response.error(req, res, error, 500, '[router] Error in controller trying to add a project'));
    }
});

router.delete('/projects', (req, res) => {
    res.status(200).send('Removing a project');
});

router.get('/technologies', (req, res) => {
    controllers.getTechnologies()
        .then(data => response.success(req, res, data, 200))
        .catch(error => response.error(req, res, error, 500, '[router] Error in controller trying to get the technologies'));
});

router.post('/technologies', (req, res) => {
    if (req.body.password !== process.env.API_PASSWORD) {
        response.error(req, res, 'You are not authotized to send this request', 401, 'Someone not authorized is trying to make a POST HTTP request to the API');
    } else {
        controllers.addTechnology(req.body.name)
            .then(data => response.success(req, res, data, 201))
            .catch(error => response.error(req, res, error, 500, '[router] Error in controller trying to add a technology'));
    }
});

router.delete('/technologies', (req, res) => {
    res.status(200).send('Removing a technology');
});

router.get('/users', (req, res) => {
    res.status(401).send('You do not have the required permissions');
    // controllers.getUsers()
    //     .then(data => response.success(req, res, data, 200))
    //     .catch(error => response.error(req, res, error, 500, '[router] Error in controller trying to get the users'));
});

router.post('/users', (req, res) => {
    res.status(401).send('You do not have the required permissions');
    // controllers.addUser(req.body.username, req.body.password, req.body.admin || false)
    //     .then(data => response.success(req, res, data, 201))
    //     .catch(error => response.error(req, res, error, 500, '[router] Error in controller trying to add a user'));
});

module.exports = router;