const express = require('express');
const commonrouter = require('./router/commonrouter');
const ejs = require('ejs');
const { default: mongoose } = require('mongoose');
const registerModel = require('./models/register');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const passport = require('passport');
const app = express();
require("dotenv").config();


const DB = process.env.MONGOOSE_URL || "mongodb+srv://naiem:naiem123@cluster0.igpmspw.mongodb.net/quickshop?retryWrites=true&w=majority";




mongoose.connect(DB , {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log("mongose is connected")
}).catch((err) => {
    console.log(err)
});

mongoose.set('strictQuery', true);



app.use(cookieParser(process.env.COOKIS_KEY))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true}));
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
app.use(commonrouter)



module.exports= app;