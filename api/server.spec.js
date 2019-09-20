const request = require('supertest');

const server = require('./server');
const Jokes = require('../jokes/jokes-router');
const Users = require('../auth/users-model');

describe('server', () => {
    describe('GET /', () => {
        it('returns 200 OK', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
        it('returns HTML', done => {
            request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toMatch(/html/i);
                    done();
                });
        });
    });
});

