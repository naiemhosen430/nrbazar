const mongoose = require('mongoose');

const orderreqcshma = new mongoose.Schema({
    prouctid: {
        required: true,
        type: String
    },
    paymentedprice: {
        required: true,
        type: String
    },
    phonenumber: {
        required: true,
        type: String
    },
    paymentcode: {
        required: true,
        type: String
    },
    status: {
        type: String,
        required: true,
        default: "requested"
    },
    vcode: {
        required: true,
        type: String,
        default: Math.floor(100000 + Math.random() * 900000)
    },
    location: {
        required: true,
        type: String
    }
})

const requiestordermodel = new mongoose.model("requestorder", orderreqcshma);
module.exports= requiestordermodel;