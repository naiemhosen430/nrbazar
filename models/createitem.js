const mongoose = require('mongoose');

const createitemchema = new mongoose.Schema({
    productname: {
        required: true,
        type: String
    },
    productprice: {
        required: true,
        type: String
    },
    productdescription: {
        required: true,
        type: String
    },
    productfile: {
        required: true,
        type: String
    },
    totalsell: {
        required: false,
        type: Number,
        default: 0
    },
    weath: {
        required: false,
        type: Number,
    },
    bakashnumber: {
        required: true,
        type: String,
    },
    nagadnumber: {
        required: true,
        type: String,
    },
    rocketnumber: {
        required: true,
        type: String,
    },
    ownerid: {
        required: false,
        type: String,
    },
    locationarea: {
        required: true,
        type: String
    },
    pricetable: {
        required: true,
        type: Array
    },
    deliverydate: {
        required: true,
        type: Array
    }
})

const itemmodel = new mongoose.model("product", createitemchema);
module.exports= itemmodel;