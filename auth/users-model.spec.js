const db = require('../database/dbConfig');

const Users = require('./users-model');

describe('users model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });
    describe('insert()', () => {
        it('should insert users into the db', async () => {
            await Users.insert({ name: 'UserOne', password: 'password1' });
            await Users.insert({ name: 'UserTwo', password: 'password2' });
            await Users.insert({ name: 'UserThree', password: 'password3' });
            let users = await db('users');
            console.log(users);
            expect(users).toHaveLength(3);
        });
        it('should insert users into the db', async () => {
            const [id] = await Users.insert({ name: 'NewUser', password: 'password4' });
            let fluffy = await db('users')
                .where({ id })
                .first();
            expect(fluffy.name).toBe('NewUser');
        });
    });
    describe('remove', () => {
        it('should remove users from the db', async () => {
            await Users.insert({ name: 'Newest User', password: 'password5' });
            const users = await db('users');
            console.log(users);
            expect(users).toHaveLength(1);
            //remove a record
            const id = users[0].id
            await Users.remove(id)
            const delUser = await db('users');
            expect(delUser).not.toHaveLength(1)
            // console.log(users);
        });
    });
});
