const { Project, Technology, User } = require('./models');

const getProjects = (filterTechnologies, filterPathname, page, limit) => {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterPathname) filter.pathname = filterPathname;
        if (filterTechnologies.length >= 1) filter.technologies = { '$in': filterTechnologies };
        const pageRequested = parseInt(page, 10) || 0;
        const limitRequested = parseInt(limit, 10) || 25;
        return resolve(Project.find(filter)
            .skip(limitRequested * pageRequested)
            .limit(limitRequested)
            .populate('technologies')
            .catch(error => reject(error)));
    });
};

const addProject = project => {
    const myProject = new Project(project);
    myProject.save();
};

const getTechnologies = async () => {
    const technologies = await Technology.find();
    return technologies;
};

const addTechnology = technology => {
    const myTechnology = new Technology(technology);
    myTechnology.save();
};

const getUsers = async () => {
    const users = await User.find();
    return users;
};

const addUser = user => {
    const myUser = new User(user);
    myUser.save();
};

module.exports = {
    getProjects,
    addProject,
    getTechnologies,
    addTechnology,
    getUsers,
    addUser
};