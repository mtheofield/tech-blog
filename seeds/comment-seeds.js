const { Comment } = require('../models');

const commentData = [{
        comment_text: "Thank you for explaining MVC",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "We just learned this in class!",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "I can see how beneficial SQL is and how widely it is used",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;