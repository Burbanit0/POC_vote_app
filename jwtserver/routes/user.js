const express = require('express');
const {User} = require("../model/user");

const userRouter = express.Router();


// GET All users
userRouter.get('/users', async (req, res) => {
    try {
        const data = await User.find();
        res.json(data);
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

//GET a user
userRouter.get('/user/:id', async (req, res) => {
    try {
		const post = await User.findOne({ _id: req.params.id })
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "User doesn't exist!" })
	}
});




module.exports = userRouter;