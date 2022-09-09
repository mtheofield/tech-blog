
const { Post } = require('../models');

const postData = [{
        title: 'Blog 1 ',
        content: 'Enter text here',
        user_id: 1

    },
    {
        title: 'Blog Post 2',
        content: 'Enter text here 2',
        user_id: 2
    },
    {
        title: 'Blog 3',
        content: 'Enter Text here 3',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;