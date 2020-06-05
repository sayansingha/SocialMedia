const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model("Post");
const requiredLogin = require('../middleware/requiredLogin')


router.get('/allpost', (req,res)=>{
    Post.find()
    .populate("postedBy","_id name")
        .then(posts=>{
            res.json({posts});
        })
        .catch(error=>{
            console.log(error);
        })
})



router.post('/createpost', requiredLogin,(req,res)=>{
    console.log(req.body);
    const {title, body,pic} = req.body;
    console.log("title,body,pic");
    if(!title || !body || !pic) {
        return res.status(422).json({error: "Please add all the fields."});
    }

    req.user.password = undefined;
    const post = new Post({
        title,
        body,
        photo: pic,
        postedBy: req.user
    })


    post.save().then(result=>{
        res.json({post:result});
    })
    .catch(error=>{
        console.log(error);
    })
})

router.get('/mypost', requiredLogin,(req,res)=>{
    Post.find({postedBy: req.user._id})
    .populate("PostedBy", "_id name")
    .then(mypost=>{
        res.json({mypost});
    })
    .catch(err=>{
        console.log(err);
    })
})

module.exports = router;