const stores = require('../stores/users');
const encryptPassword = require('../encryptPassword');

const getUsers = username => {
    return new Promise((resolve, reject) => {
        return resolve(stores.getUsers(username));
    });
};

const addUser = (username, password, admin) => {
    return new Promise(async (resolve, reject) => {
        if (!username || !password || !admin) {
            console.error('[usersController] There is missing data in the request');
            return reject('Invalid data');
        }
        const userAlreadyExists = stores.checkUserExistency(username);
        if (userAlreadyExists) {
            console.error('[usersController] Username not valid or available');
            return reject('Invalid username');
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