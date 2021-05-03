const stores = require('../stores');

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
    getTechnologies,
    addTechnology
};