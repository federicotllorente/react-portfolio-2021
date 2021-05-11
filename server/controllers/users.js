require('dotenv').config();
const jwt = require('jsonwebtoken');

const stores = require('../stores/users');
const { encryptPassword, comparePasswords } = require('../handlePasswords');

const getUsers = username => {
    return new Promise((resolve, reject) => {
        return resolve(stores.getUsers(username));
    });
};

const loginUser = (username, password) => {
    return new Promise(async (resolve, reject) => {
        const users = await getUsers(username);
        const user = users.length == 0 ? null : users[0];

        const passwordIsCorrect = user === null
            ? false
            : await comparePasswords(password, user.passwordHash);

        if (!(user && passwordIsCorrect)) {
            console.error('[usersController] Invalid user or password');
            return reject('Invalid user or password');
        }

        // const userForToken = {
        //     id: user._id,
        //     username: user.username,
        //     admin: user.admin
        // }

        // const token = jwt.sign(userForToken, process.env.SECRET);

        return resolve({
            username: user.username,
            admin: user.admin,
            // token
        });
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
    loginUser,
    addUser
};