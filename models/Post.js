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

    date: {
        type: Date,
        default: Date.now
    },

    updated: {
        type: Date,
        default: null
    }
});

const Post = mongoose.model('users', postSchema)

module.exports = Post