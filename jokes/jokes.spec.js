const db = require('../database/dbConfig');
const request = require('supertest');
const Jokes = require('../jokes/jokes-router');

describe('Jokes', () => {
    describe('GET /', function () {
        it('responds with 200', function (done) {
            return request(Jokes)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
    });
    // describe('GET /jokes', function () {
    //     it('responds with 200', function (done) {
    //         return request(Jokes)
    //             .get('/jokes')
    //             .auth('username', 'password')
    //             .set('Accept', 'application/json')
    //     });
    // });
});
