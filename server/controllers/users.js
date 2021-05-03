const stores = require('../stores');

const getUsers = () => {
    return new Promise((resolve, reject) => {
        return resolve(stores.getUsers());
    });
};

const addUser = (username, password, admin) => {
    return new Promise((resolve, reject) => {
        if (!user) {
            console.error('[usersController] There is missing data in the request');
            return reject('Invalid data');
        }
        const newUser = { username, password, admin }
        stores.addUser(newUser);
        return resolve(newUser);
    });
};

module.exports = {
    getUsers,
    addUser
};