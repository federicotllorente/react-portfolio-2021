const stores = require('../stores/users');

const getUsers = () => {
    return new Promise((resolve, reject) => {
        return resolve(stores.getUsers());
    });
};

const addUser = (username, password, admin) => {
    const encryptPassword = password => {
        const passwordHash = password;
        return passwordHash;
    };
    return new Promise((resolve, reject) => {
        if (!username || !password || !admin) {
            console.error('[usersController] There is missing data in the request');
            return reject('Invalid data');
        }
        const encyptedPassword = encryptPassword(password);
        const newUser = { username, passwordHash: encyptedPassword, admin };
        stores.addUser(newUser);
        return resolve({ username, admin }); // Do not return the password
    });
};

module.exports = {
    getUsers,
    addUser
};