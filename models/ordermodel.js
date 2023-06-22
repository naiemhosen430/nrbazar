const mongoose = require('mongoose');

const orderScema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    address:{
        required: true,
        type: String
    },
    deliverycompletecode:{ 
        required: true,
        type: String,
        default: Math.floor(100000 + Math.random() * 900000)
    },
    itemid:{
        required: true,
        type: String
    },
    deliverydateon:{
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
    owneridfororder: {
        required: true,
        type: String
    },
    orderStatus:{ 
        type: String,
        default: "created"
    },
    confirmeduser:{ 
        type: String,
        required: false,
        default: null
    },
    date:{ 
        type: String,
        default: new Date()
    }
}
)

const ordermodel = new mongoose.model("order", orderScema);
module.exports= ordermodel;
