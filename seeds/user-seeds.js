const { User, Post } = require('../models');

const userData = [{
        username: 'Beth',
        email: 'btheofield@aol.com'
        password: 'theofield'

    },
    {
        username: 'Steve',
        email: 'sdaccordo@aol.com'
        password: 'daccordo'
    },
    {
        username: 'Justin',
        email: 'jhaeberle@gmail.com'
        password: 'haeberle'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;