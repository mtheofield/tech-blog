
const { User } = require('../models');

const userData = [{
        username: 'Beth',
        password: 'theofield'

    },
    {
        username: 'Steve',
        password: 'daccordo'
    },
    {
        username: 'Justin',
        password: 'haeberle'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;