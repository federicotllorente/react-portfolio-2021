const path = require('path');
const express = require('express');
const multer = require('multer');
const controllers = require('./controllers');
const router = express.Router();

const response = {
    success: (req, res, data, status) => {
        res.status(status || 200).send({
            error: '',
            body: data
        });
    },
    error: (req, res, error, status, message) => {
        console.error(message);
        res.status(status || 500).send({
            error: error,
            body: ''
        });
    }
};

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
    const { pathname, name, typeENG, typeSPA, year, technologies, ux, url, gitHub, descriptionENG, descriptionSPA, inDevelopment, available } = req.body;
    const images = req.files;
    controllers.addProject(pathname, name, typeENG, typeSPA, year, technologies, ux, url, gitHub, images, descriptionENG, descriptionSPA, inDevelopment, available)
        .then(data => response.success(req, res, data, 201))
        .catch(error => response.error(req, res, error, 500, '[router] Error in controller trying to add a project'));
});

router.get('/technologies', (req, res) => {
    controllers.getTechnologies()
        .then(data => response.success(req, res, data, 200))
        .catch(error => response.error(req, res, error, 500, '[router] Error in controller trying to get the technologies'));
});

router.post('/technologies', (req, res) => {
    controllers.addTechnology(req.body.name)
        .then(data => response.success(req, res, data, 201))
        .catch(error => response.error(req, res, error, 500, '[router] Error in controller trying to add a technology'));
});

module.exports = router;