// post.js di folder models tempat membuat Schema

import mongoose from 'mongoose'

// Membuat Schema
const postSchema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }

})

// membuat variabel baru yang punya nilai sama dengan postSchema
const postMessage = mongoose.model('post', postSchema)

export default postMessage