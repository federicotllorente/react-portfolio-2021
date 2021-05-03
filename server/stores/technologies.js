const { Technology } = require('../models');

const getTechnologies = async () => {
    const technologies = await Technology.find();
    return technologies;
};

const addTechnology = technology => {
    const myTechnology = new Technology(technology);
    myTechnology.save();
};

module.exports = {
    getTechnologies,
    addTechnology
};