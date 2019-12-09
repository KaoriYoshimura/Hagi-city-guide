const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },

    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'users'
    // },
    // data: {
    //     type: Date,
    //     default: Date.now
    // }
});

const Post = mongoose.model('users', postSchema)

module.exports = Post