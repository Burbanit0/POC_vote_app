const express = require("express");
const { Image } = require('../model/image');

const imageRouter = express.Router();

// GET All images

imageRouter.get('/images', async(req, res) => {
    try {
        const data = await Image.find();
        res.json(data);
    } catch(error) {
        res.status(500).json({message: message.error})
    }
})

// GET an image 

imageRouter.get('/image/:id', async(req, res) => {
    try {
        const image = await Image.findById({_id: req.params.id})
        res.send(image)
    } catch {
        res.status(404)
        res.send({ error: "Image doesn't exist!" })
    }
});

// POST an image 

imageRouter.post('/addImage', async(req, res) => {
    try {
        const {_id, name, image, weight} = req.body
        const newImage = await Image.create({
            _id,
            name, 
            image,
            weight
        });
        res.status(200).send(newImage) 
    } catch(error) {
        res.status(500).send({
            upload_error: 'Error while uploading file'
        })
    }
});