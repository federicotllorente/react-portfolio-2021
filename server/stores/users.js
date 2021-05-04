const { User } = require('../models');

const getUsers = async username => {
    const users = username
        ? await User.find({ username })
        : await User.find();
    return users;
};

const checkUserExistency = async username => {
    const search = await User.find({ username });
    const result = search ? true : false;
    return result;
};

const addUser = user => {
    const myUser = new User(user);
    myUser.save();
};

module.exports = {
    getUsers,
    checkUserExistency,
    addUser
};