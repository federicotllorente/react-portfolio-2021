// require('dotenv').config();
const supertest = require('supertest');
const mongoose = require('mongoose');
const { app, server } = require('../server');
const { User } = require('../server/models');
const { encryptPassword } = require('../server/handlePasswords');

const api = supertest(app); // For testing the API and its endpoints

const initialUser = {
    username: 'federicotllorente', // username: process.env.ADMIN_USER,
    password: '12345', // password: process.env.ADMIN_PASSWORD,
    admin: true
};

const resetUsers = async () => {
    const { username, password, admin } = initialUser;
    const passwordHash = await encryptPassword(password);
    await User.deleteMany({}); // Delete all the users in the DB
    const newUser = new User({ username, passwordHash, admin });
    await newUser.save(); // Save the 'initial user' in the DB
};

const closeConnections = () => {
    mongoose.connection.close(); // Close database connection
    server.close(); // Close server
};

module.exports = {
    api,
    initialUser,
    resetUsers,
    closeConnections
};