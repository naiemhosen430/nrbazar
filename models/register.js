const mongoose = require('mongoose');

const registerScema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    phone:{
        required: true,
        type: Number
    },
    password:{
        required: true,
        type: String
    }
}
)

const registerModel = new mongoose.model("registers", registerScema);
module.exports= registerModel;