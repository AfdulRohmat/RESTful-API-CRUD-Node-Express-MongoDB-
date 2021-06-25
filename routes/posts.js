import express from 'express'

import { getPost, createPost, deletePost, updatePost, getPostbyId } from '../controllers/posts.js'

// new router object
const router = express.Router()

// membuat METHOD(get/post/patch/delete) dengan router.METHOD
router.get('/', getPost)
router.get('/:id', getPostbyId)
router.post('/', createPost)
router.delete('/:id', deletePost)
router.patch('/:id', updatePost)




export default router