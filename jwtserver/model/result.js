const mongoose = require("mongoose");
const { Schema } = mongoose;

const ResultSchema = new Schema({
    total_votant: {type: Number, default: null},
    maj: [{ image: {tyep:String, default:null}, votes:{type:String, default:null}}],
});

const Result = mongoose.model("Result", ResultSchema);

module.exports={Result};