const { api, initialUser, resetUsers, closeConnections } = require('./helpers');

describe('API Tests', () => {
    beforeEach(() => resetUsers());

    test('New user exists', async () => {
        const results = await api
            .get('/api/users')
            .expect(200)
            .expect('Content-Type', /application\/json/);
        expect(results.body.body).toHaveLength(1);
        expect(results.body.body[0].username).toBe(initialUser.username);
        expect(results.body.body[0].admin).toBe(initialUser.admin);
    });

    test('Username already taken when a new user is added', async () => {
        const resultsBefore = await api.get('/api/users');
        await api
            .post('/api/users')
            .send(initialUser)
            .expect(400)
            .expect('Content-Type', /application\/json/);
        const resultsAfter = await api.get('/api/users');
        expect(resultsAfter.body.body).toHaveLength(resultsBefore.body.body.length);
    });

    test('Projects returned as JSON', async () => {
        await api
            .get('/api/projects')
            .expect(200)
            .expect('Content-Type', /application\/json/);
    });

    test('Project without content is not added', async () => {
        await api
            .post('/api/projects')
            .expect(401) // It needs an 'API password' (later it'll be replaced with an admin user session)
            .expect('Content-Type', /application\/json/);
    });

    afterAll(() => closeConnections());
});