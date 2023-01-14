const express = require('express');
const {List} = require("../model/list");

const listRouter = express.Router();

//POST the choice of a user
listRouter.post('/list/maj', async (req, res) => {
    try {
        const {user_id, majoritaire} = req.body
        const maj = await List.create({
            user_id,
            majoritaire,
        });
        res.status(200).json(maj)
    } catch (error) {
        // console.log(error);
        res.status(500).send({
            upload_error: 'Error while uploading file'
        })
    }
});

//GET all choices of everyone 
listRouter.get('/lists', async (req, res) => {
    try {
        const data = await List.find();
        res.json(data);
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

//GET a choice 
listRouter.get('/list/:id', async(req, res) => {
    try {
        const list = await List.findById({ _id: req.params.id })
		res.send(list)
	} catch {
		res.status(404)
		res.send({ error: "List doesn't exist!" })
	}
});

//GET the choice of a user
listRouter.get('/list/user/:id', async (req, res) => {
    try {
		const list = await List.findOne({ user_id: req.params.id })
		res.send(list)
	} catch {
		res.status(404)
		res.send({ error: "List doesn't exist!" })
	}
});

listRouter.put('/list/ordre/user/:id', async (req, res) => {
    try {        
        const list = await List.findOneAndUpdate({user_id: req.params.id }, 
           {ordre:req.body.ordre})
        res.send(list)
    } catch (error) {
        console.log(error);
        res.status(500).send({
            upload_error: 'Error while uploading file'
        })
    }
})

listRouter.put('/list/poids/user/:id', async (req, res) => {
    try {        
        const list = await List.findOneAndUpdate({user_id: req.params.id }, 
           {poids:req.body.poids})
        res.send(list)
    } catch (error) {
        console.log(error);
        res.status(500).send({
            upload_error: 'Error while uploading file'
        })
    }
})

module.exports = listRouter;