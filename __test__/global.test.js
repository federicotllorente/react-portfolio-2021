const mongoose = require('mongoose');
const supertest = require('supertest');
const { app, server } = require('../server');
const { User } = require('../server/models');

const api = supertest(app); // For testing the API and its endpoints

const initialUser = {
    username: 'federicotllorente',
    password: '12345',
    admin: true
};

describe('API Tests', () => {
    beforeEach(async () => {
        await User.deleteMany({}); // Delete all the users in the DB
        const newUser = new User(initialUser);
        await newUser.save(); // Save the 'initial user' in the DB
    });

    test('Exists the new user', async () => {
        const results = await api.get('/api/users');
        expect(results.body.body).toHaveLength(1);
        expect(results.body.body[0].username).toBe(initialUser.username);
        expect(results.body.body[0].admin).toBe(initialUser.admin);
    });

    test('Projects returned as JSON', async () => {
        await api
            .get('/api/projects')
            .expect(200)
            .expect('Content-Type', /application\/json/);
    });

    afterAll(() => {
        mongoose.connection.close(); // Close database connection
        server.close(); // Close server
    });
});