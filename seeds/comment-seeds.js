
const { Comment } = require('../models');

const commentData = [{
        comment_text: "We love to code",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "to test if this works ",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "we will see",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;