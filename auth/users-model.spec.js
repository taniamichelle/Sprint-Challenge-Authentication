const db = require('../database/dbConfig');
const request = require('supertest');
const Users = require('./users-model');
const Jokes = require('../jokes/jokes-router');

// describe('users model', () => {
//     beforeEach(async () => {
//         await db('users').truncate();
//     });
//     describe('insert()', () => {
//         it('should insert users into the db', async () => {
//             await Users.insert({ username: 'UserOne', password: 'password' });
//             let users = await db('users');
//             console.log(users);
//             expect(users).toHaveLength(3);
//         });
//         it('should insert users into the db', async () => {
//             const [id] = await Users.insert({ username: 'NewUser', password: 'password' });
//             let user = await db('users')
//                 .where({ id })
//                 .first();
//             expect(users.username).toBe('NewUser');
//         });
//     });
//     // describe('remove', () => {
//     //     it('should remove users from the db', async () => {
//     //         await Users.insert({ username: 'Newest User', password: 'password' });
//     //         const users = await db('users');
//     //         console.log(users);
//     //         expect(users).toHaveLength(1);
//     //         //remove a record
//     //         const id = users[0].id
//     //         await Users.remove(id)
//     //         const delUser = await db('users');
//     //         expect(delUser).not.toHaveLength(1)
//     //         // console.log(users);
//     //     });
//     // });
// });
describe('users model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    it('should insert the provided user into the db', async () => {
        await Users.insert({ username: 'userone', password: 'user1' })
        const user = await db('users')
        expect('user').toHaveLength(3)
        // expect(user.username).toBe('userOne');
        // user = await Users.insert({ username: 'usertwo', password: 'user2' });
        // expect(user.username).toBe('userTwo');
    });
    // async function insert(user) {
    //     // the second parameter here is of other databases, SQLite returns the id by default
    //     const [id] = await db('users').insert(user, 'id');

    //     return db('users')
    //         .where({ id })
    //         .first();
    // }
    // describe('insert()', () => {
    //     it('should insert the provided user into the db', async () => {
    //         await Users.insert({ username: 'gaffer', password: 'sam' });
    //         // read data from the table
    //         const users = await db('users');
    //         // verify that there are now two records inserted
    //         expect(users).toHaveLength(3);
    //     });
    // });
});

des