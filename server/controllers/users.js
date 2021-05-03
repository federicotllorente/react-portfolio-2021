const stores = require('../stores/users');
const encryptPassword = require('../encryptPassword');

const getUsers = () => {
    return new Promise((resolve, reject) => {
        return resolve(stores.getUsers());
    });
};

const addUser = (username, password, admin) => {
    return new Promise(async (resolve, reject) => {
        if (!username || !password || !admin) {
            console.error('[usersController] There is missing data in the request');
            return reject('Invalid data');
        }
        const passwordHash = await encryptPassword(password);
        const newUser = { username, passwordHash, admin };
        stores.addUser(newUser);
        return resolve({ username, admin }); // Do not return the password
    });
};

module.exports = {
    getUsers,
    addUser
};