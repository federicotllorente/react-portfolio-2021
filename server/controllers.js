const stores = require('./stores');

const getProjects = (filterTechnologies, filterPathname, page, limit) => {
    return new Promise((resolve, reject) => {
        return resolve(stores.getProjects(filterTechnologies, filterPathname, page, limit));
    });
};

const addProject = (pathname, name, typeENG, typeSPA, year, technologies, ux, url, gitHub, images, descriptionENG, descriptionSPA, inDevelopment, available) => {
    return new Promise((resolve, reject) => {
        if (!pathname || !name || !typeENG || !typeSPA || !year || !technologies || !gitHub || !images || !descriptionENG || !descriptionSPA || !inDevelopment) {
            console.error('[projectsController] There is missing data in the request');
            return reject('Invalid data');
        }
        let setUX = ux ? ux : '';
        let setURL = url ? url : '';
        let setAvailability = available ? available : false;
        const newProject = {
            pathname,
            name,
            typeENG,
            typeSPA,
            year,
            technologies, // This is an array of IDs
            ux: setUX,
            url: setURL,
            gitHub,
            images, // This is an array of objects: { url: 'url' }
            descriptionENG,
            descriptionSPA,
            inDevelopment,
            available: setAvailability
        };
        stores.addProject(newProject);
        return resolve(newProject);
    });
};

const getTechnologies = () => {
    return new Promise((resolve, reject) => {
        return resolve(stores.getTechnologies());
    });
};

const addTechnology = technology => {
    return new Promise((resolve, reject) => {
        if (!technology) {
            console.error('[technologiesController] There is missing data in the request');
            return reject('Invalid data');
        }
        const newTechnology = { name: technology };
        stores.addTechnology(newTechnology);
        return resolve(newTechnology);
    });
};

module.exports = {
    getProjects,
    addProject,
    getTechnologies,
    addTechnology
};