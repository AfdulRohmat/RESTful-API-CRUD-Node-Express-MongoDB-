import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import { MONGO_URL } from  './configDB.js'

// mengimport router dari folder routes/post.js
import postsRoutes from './routes/posts.js'

const app = express()

const PORT = process.env.PORT || 5000

// connect ke mongoDB . Mengembalikan promise (then, catch)
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}) .then(() => {
    app.listen(PORT, () => {
        console.log(`server run on http://localhost:${PORT}`)
    })
    console.log('MongoDB connected')
}).catch((err) => {
    console.error(err)
});

// body-parser middleware
app.use(express.json())

// Pakai postsRoutes yang sudah di import
app.use('/posts', postsRoutes)




