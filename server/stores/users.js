const { User } = require('../models');

const getUsers = async () => {
    const users = await User.find();
    return users;
};

const addUser = user => {
    const myUser = new User(user);
    myUser.save();
};

module.exports = {
    getUsers,
    addUser
};