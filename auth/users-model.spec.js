const request = require('supertest');
const db = require('../database/dbConfig');
const Users = require('./users-model');
const server = require('../api/server')

describe('users model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });
    it('should set environment to be testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });
    // expect(user.username).toBe('userOne');
    // user = await Users.insert({ username: 'usertwo', password: 'user2' });
    // expect(user.username).toBe('userTwo');
    // });
    // it('compares users', () => {
    //     const expected = { username: 'NewTestUser' }
    //     const actual = (findBy('NewTestUser'))
    //     expect(findBy({})) = ({ username: {} });
    // })
    it('returns JSON', done => {
            request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toBe('text/html');
                    done();
                });
    });
});

