const express = require('express');
const { Result } = require("../model/result");

const resultRouter = express.Router();

// GET results 

resultRouter.get('/results', async(req, res) => {
    try {
        const data = await Result.find();
        res.json(data);
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

// 