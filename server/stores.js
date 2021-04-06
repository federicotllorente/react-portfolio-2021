const models = require('./models');

const getProjects = filterProject => {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterProject) {
            filter = { technologies: { _id: filterProject } };
        }
        return resolve(models.Projects.find(filter)
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