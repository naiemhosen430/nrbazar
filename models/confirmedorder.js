const mongoose = require('mongoose');

const confirmedorderschema = new mongoose.Schema({
    completeduserid: {
        required: true,
        type: String
    },
    completeditemid: {
        required: true,
        type: String
    }

})

const historymodel = new mongoose.model("history", confirmedorderschema);
module.exports= historymodel;