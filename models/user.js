const mongoose = require('mongoose');

const userschama = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    bio: {
        required: false,
        type: String
    },
    address: {
        required: false,
        type: String
    },
    education: {
        required: false,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: Number
    },
    password: {
        required: true,
        type: String
    },
    roll: {
        required: true,
        type: String
    },
    productfile: {
        required: false,
        type: String
    },
    location: {
        required: false,
        type: String
    },
    underadmin: {
        required: false,
        default: null,
        type: String
    },
    mailbalance: {
        required: false,
        type: Number,
        default: 0
    },
    todayincome: {
        required: false,
        type: Number,
        default: 0
    },
    todayordercomolete: {
        required: false,
        type: Number,
        default: 0
    },
    allordercomplete: {
        required: false,
        type: Number,
        default: 0
    }
})

const adduser = new mongoose.model("user", userschama);
module.exports= adduser;