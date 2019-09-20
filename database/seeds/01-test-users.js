
exports.seed = function (knex) {
  return knex('users').insert([
    { username: 'TestUser', password: 'password' },
    { username: 'NewTestUser', password: 'password' },
  ]);
};
