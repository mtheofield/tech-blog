
const { Post } = require('../models');

const postData = [{
        title: 'MVC',
        content: 'Model-view-controller is the name of a methodology or design pattern for successfully and efficiently relating the user interface to underlying data models.',
        user_id: 1

    },
    {
        title: 'Sequelize',
        content: 'Sequelize is a modern TypeScript and Node.js ORM for Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. Featuring solid transaction support, relations, eager and lazy loading, read replication and more.',
        user_id: 2
    },
    {
        title: 'MySQL',
        content: 'MySQL is a widely used relational database management system',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;