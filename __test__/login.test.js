const { api, initialUser, resetUsers, closeConnections } = require('./helpers');

describe('API user login tests', () => {
    beforeEach(() => resetUsers());

    test('Login successfully', async () => {
        const loginUser = {
            username: initialUser.username,
            password: initialUser.password
        }
        await api
            .post('/api/users/login')
            .send(loginUser)
            .expect(200)
            .expect('Content-Type', /application\/json/);
    });

    test('Login with an invalid username', async () => {
        const loginUser = {
            username: 'thisIsAnInvalidUsername',
            password: initialUser.password
        }
        await api
            .post('/api/users/login')
            .send(loginUser)
            .expect(401)
            .expect('Content-Type', /application\/json/);
    });

    test('Login with an invalid password', async () => {
        const loginUser = {
            username: initialUser.username,
            password: 'thisIsAnInvalidPassword'
        }
        await api
            .post('/api/users/login')
            .send(loginUser)
            .expect(401)
            .expect('Content-Type', /application\/json/);
    });

    afterAll(() => closeConnections());
});