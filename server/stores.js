const models = require('./models');

const getProjects = (filterTechnologies, filterPathname, page, limit) => {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterPathname) filter.pathname = filterPathname;
        if (filterTechnologies.length >= 1) filter.technologies = { '$in': filterTechnologies };
        const pageRequested = parseInt(page, 10) || 0;
        const limitRequested = parseInt(limit, 10) || 25;
        return resolve(models.Projects.find(filter)
            .skip(limitRequested * pageRequested)
            .limit(limitRequested)
            .populate('technologies')
            .catch(error => reject(error)));
    });
};

const addProject = project => {
    const myProject = new models.Projects(project);
    myProject.save();
};

const getTechnologies = async () => {
    const technologies = await models.Technologies.find();
    return technologies;
};

const addTechnology = technology => {
    const myTechnology = new models.Technologies(technology);
    myTechnology.save();
};

module.exports = {
    getProjects,
    addProject,
    getTechnologies,
    addTechnology
};