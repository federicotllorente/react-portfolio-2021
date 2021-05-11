const { api, resetUsers, closeConnections } = require('./helpers');

describe('API projects tests', () => {
    beforeEach(() => resetUsers());

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