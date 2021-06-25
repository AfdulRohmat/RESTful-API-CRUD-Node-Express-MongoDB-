import mongoose from 'mongoose';


// Import schema postMessage dari folder models
import postMessage from '../models/postMessage.js';


//------------------- Membuat handler


// Handler untuk createPost alias POST ===> pakai method .save()
export const createPost = async (req, res) => {
//    const post = req.body

   const newpost = new postMessage(req.body)

   try {
       const post = await newpost.save()
       if(!post) throw Error('error when saving')

       res.status(200).json(newpost)
       
   } catch (error) {
       res.status(404).status({message: error.message})
   }
    
}


// Handler untuk getPost alias GET ===> pakai method .find()
export const getPost = async (req, res) => {
    try {
     const postMessages = await postMessage.find()
     if(!postMessages) throw Error('error when saving')
 
     res.status(200).json(postMessages);
        
    } catch (error) {
        res.status(409).json({message: error.message})
    }
     
}
 

// Handler untuk getPostbyId alias GET untuk setiap Id ===> pakai method .find()
export const getPostbyId = async (req, res) => {
    try {
        const postMessages = await postMessage.findById(req.params.id)

        if(!postMessages) throw Error('error when saving')

        res.status(200).json(postMessages);

    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

 

//  Handler untuk deletePost alias DELETE POST ===> pakai method 
// .findByIdAndDelete()
export const deletePost = async (req, res) => {
    const {id : _id} = req.params

    if(mongoose.Types.ObjectId(_id))

    await postMessage.findByIdAndDelete(_id)
    

    res.json({message: "post was deleted"})

}


// Handler untuk updatePost alias UPDATE ===> pakai method .findByIdAndUpdate()
export const updatePost = async (req, res) => {
    try {
        const updatedPost = await postMessage.findByIdAndUpdate(req.params.id, req.body, {new : true})

        if(!updatedPost) throw Error('error when saving')

        res.status(200).json(updatedPost);

    } catch (error) {
        res.status(409).json({message: error.message})
    }

}