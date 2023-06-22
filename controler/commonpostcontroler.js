const bcrypt = require('bcrypt');
const registerModel = require('../models/register');



const registerpost = async (req, res) => {
    try {
        const name= req.body.name;
        const phone= req.body.phone;
        const email= req.body.email;
        const password= req.body.password;

            const newUser = await new registerModel({
                name,
                phone,
                email,
                password
            });
            await newUser.save();
            console.log(req.body.name);
            res.send("hello")

    } catch (error) {
        
    }
}

module.exports= registerpost;