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
    date: {
        type: Date,
        default: Date.now
    },

    updated: {
        type: Date,
        default: null
    }
});

const Post = mongoose.model('posts', postSchema)

module.exports = Post