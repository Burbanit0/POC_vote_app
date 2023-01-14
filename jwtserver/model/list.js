const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("../routes/user");

const ListSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User', unique:true},
    majoritaire: {type : String, default:null},
    ordre: { type: [String], default: null},
    poids: { image: {type: String, default:null}, poids: {type: Number, default: null}},
  });

const List = mongoose.model("List", ListSchema);

module.exports={List};