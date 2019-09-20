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
    describe('POST /auth', function () {
        it('responds with json', function (done) {
            request(server)
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    done()
                })
        })
    })
});

