const db = require('../database/dbConfig');
const request = require('supertest');
const Jokes = require('../jokes/jokes-router');

describe('jokes', () => {
    describe('GET /jokes', () => {
        it('returns 200 OK', () => {
            return request(Jokes)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
    });
    // describe('GET /jokes', function () {
    //     it('responds with json', function (done) {
    //         request(Jokes)
    //             .get('/jokes')
    //             .set('Accept', 'application/json')
    //             .expect('Content-Type', /json/)
    //             .expect(200, done);
    //     });
    // });
});