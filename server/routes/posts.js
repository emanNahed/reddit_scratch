const {getPosts, addPost, deletePost, updatePost} = require('../controllers/posts');
const router= require('express').Router();


router.get('/', getPosts)
.post('/', addPost)
.delete('/', deletePost)
.put('/', updatePost);


module.exports= router;