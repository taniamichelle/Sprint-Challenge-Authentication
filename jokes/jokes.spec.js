const db = require('../database/dbConfig');
const request = require('supertest');

const server = require('../api/server');
const Users = require('../auth/users-model');

describe('Jokes', () => {
    describe('GET /', function () {
        it('returns with 200', () => {
            return request(server).get('/')
                .expect(200)
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
    });
    it('should set environment to be testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

});
