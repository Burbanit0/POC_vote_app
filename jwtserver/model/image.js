const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImageSchema = new Schema({
    _id: {type: String},
    name: {type: String},
    image: {type:String}, 
    weight:{type: Number}
})

const Image = mongoose.model("Image", ImageSchema);

module.exports={Image};