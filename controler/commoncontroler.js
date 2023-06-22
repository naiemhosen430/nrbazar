const bcrypt = require('bcrypt');
const itemmodel = require('../models/createitem');
const registerModel = require('../models/register');
const jwt = require('jsonwebtoken');
const fs = require('fs')
const adduser = require('../models/user');
const ordermodel = require('../models/ordermodel');
const confirmrdorde9rmodel = require('../models/confirmedorder');
const requiestordermodel = require('../models/requestordermodel');
const historymodel = require('../models/confirmedorder');


require("mongoose");
require("dotenv").config();

const home = async (req, res) => {
    const post = await itemmodel.find();
    res.render("home", {post})
}


const loginhome = async (req, res) => {
    const postt = await itemmodel.find();
    res.render("loginhomepage", {postt})
}


const aboutuscontroler = async (req, res) => {
    try {
        res.render('aboutus')
    } catch (error) {
        
    }
}


const productdetail = async (req, res) => {
    try {
        const productid = req.params.pid;
        const product = await itemmodel.findOne({_id: productid})
        res.render("productdetail", {product})
    } catch (error) {
        console.log(error.message)
    }

}

const ordercontroler = async (req, res) => {
    try {
        const selectid = req.params.oid;
        const selectitem = await itemmodel.findOne({_id: selectid})
        res.render("order", {selectitem})
    } catch (error) {
        console.log(error.message)
    }

}

const all = (req, res) => {
    res.send("portals/header*")
}

const order = (req, res) => {
    res.render("order")
}
const adminuserviewcontroler = async (req, res) => {
    try {
        const seletedadminforview = await adduser.findOne({_id: req.params.adminuserviewid})
        res.render("adminuserview", {seletedadminforview})
    } catch (error) {
        
    }
}
const sendordercontroler = (req, res) => {
    res.render("sendorder")
}
const viewreciveordercontroler = async (req, res) => {
    try {
        const viewreciveorderid = req.params.viewreciveorderid;
        const viewforitemrecive = await ordermodel.findOne({_id: viewreciveorderid})
        const rewuesteditemview = await itemmodel.findOne({_id: viewforitemrecive.itemid})
        
        res.render("viewreciveorder", {viewforitemrecive, rewuesteditemview})
    } catch (error) {
        console.log(error.message)
    }
}
const createdorderdeails = async (req, res) => {
    const orderitemid = req.params.orderitemid;
    try {        
        const ordereditemdetails = await ordermodel.findOne({_id: orderitemid})
        const orderedproductid = ordereditemdetails.itemid;
        const orderedproduct = await itemmodel.findOne({_id: orderedproductid})
        res.render("createdorderdetails", {ordereditemdetails, orderedproduct})
    } catch (error) {
        
    }
}

const seemyorderihavecontroler = async (req,res) => {
    try {
        res.render('myordershow')
    } catch (error) {
        
    }
}
const showmyordercontroler = async (req,res) => {
    try {
        const showmyorderid = req.body.showmyorderid
        const showmyorderhadfinded = await ordermodel.find({phonenumber: showmyorderid})
        res.locals.searchedinfo= showmyorderid
        res.render('myordershoww', {showmyorderhadfinded})
    } catch (error) {
        
    }
}


const profile =  async (req, res) => {
    const userprofileid = req.params.selectuserid;
    try {
        const selecte3duser = await adduser.findOne({_id: userprofileid})
        res.render("profile", {selecte3duser})
    } catch (error) {
        console.log(error)
    }


   
}
const completeorder = async (req, res) => {
    res.render("completeorder")

}
const admindasboad = async (req, res) => {
    try {
        const deliverymans = await adduser.find({roll: "deliveryman" })

        res.render("admindasboad", {deliverymans})
    } catch (error) {
        console.log(error.message)
    }
}

const requestorderedcontroler = async (req,res) => {
    try {
        const resiveitem = await ordermodel.find({orderStatus: "created", owneridfororder: req.params.reqorderid})
        res.render("requestedorder", {resiveitem})
    } catch (error) {
        
    }
}
const orderinprocesscontroler = async (req,res) => {
    try {
        const orderinprocessitem = await ordermodel.find({orderStatus: "accepted", owneridfororder: req.params.orderinprocessid})
        res.render("orderinprocess", {orderinprocessitem})
    } catch (error) {
        
    }
}

const processingorderdetailscontroler = async (req,res) => {
    try {
        const orderinprocessitemm = await ordermodel.findOne({_id: req.params.processingorderdetailsid})
        const processingorderitem = await itemmodel.findOne({_id: orderinprocessitemm.itemid})
        res.render("processingorderdetails", {orderinprocessitemm, processingorderitem})
    } catch (error) {
        
    }
}


const createitem = (req, res) => {
    res.render("createitem")
}
const editprofile = async (req, res) => {
    const editprofileid = req.params.editprofileid;
    try {
        const edituserfind = await adduser.findOne({_id: editprofileid})
        res.render("editprofile", {edituserfind})
    } catch (error) {
        
    }
    
}
const addmember = (req, res) => {
    res.render("addmember")
}
const memberdasboad = async (req, res) => {
    res.render("memberdasboad")

}

    // try {
    //     const placedoder = await ordermodel.find({orderStatus: "created"});
    //     const confirmedorderofme = await confirmrdordermodel.find()
    //     const myorderin = []
    //     for (let i=0; i<confirmedorderofme.length; i++){
    //         const myorderid = confirmedorderofme[i].orderedid;
    //         const myorder = await ordermodel.find({orderStatus: "confirmed", _id:myorderid});
    //         myorderin.push(myorder)
    //     }
    // } catch (error) {
    //     console.log(error)
    // }



const register = (req, res) => {
    res.render("register")
}
const owneritem = async (req, res, next) => {
    try {
    const ownitem = await itemmodel.find({ownerid: req.params.owneritemid})  
    res.render("ownitem", {ownitem})
    next()
    } catch (error) {
        
    }
}
const ordercontrolerfordel = async (req, res, next) => {
    try {
    const seeorderall = await ordermodel.find({locationarea: req.params.seeorderid, orderStatus: "created"})  
    res.render("seeorder", {seeorderall})
    next()
    } catch (error) {
        
    }
}
const confirmedorderformecontroler = async (req, res, next) => {
    try {
    const confirmedorderfrmedel = await ordermodel.find({confirmeduser: req.params.confirmedorderformeid})  

    res.render("myconfirmedorder", {confirmedorderfrmedel})
    next()
    } catch (error) {
        
    }
}
const login = (req, res) => {
    res.render("login")
}
const error = (req, res) => {
    res.render("error")
}

const deleteprofile = async (req, res) => {
    try {
        const deleteuserid = req.params.deleteuserid;
        const userfordeletedpage = await adduser.findOne({_id: deleteuserid})
        res.render("deleteprofile", {userfordeletedpage})
    } catch (error) {
        
    }
}



const loginpost = async (req,res) => {
    try {
        const email = req.body.email;
        
        const validemail = await adduser.findOne({email})
        if (validemail) {
                const validpassword = validemail.password;
                const logingchjeak = await bcrypt.compare(req.body.password, validpassword)
                if (logingchjeak) {
                    const userobject = {
                        name: validemail.name,
                        roll: validemail.roll,
                        email: validemail.email,
                        phone: validemail.phone,
                        location: validemail.location,
                        useridlog: validemail._id,
                        mailbalance: validemail.mailbalance,
                        todayincome: validemail.todayincome,
                        todayordercomolete: validemail.todayordercomolete,
                        allordercomplete: validemail.allordercomplete
                    }
                    const token = jwt.sign(userobject, process.env.JWT_SECRET, {
                        expiresIn: '10000h'
                    })
                    res.cookie(process.env.COOKI_NAME, token, {
                        maxAge: 8640000000,
                        httpOnly: true,
                        signed: true,
                    })
  
                    
                    if (validemail.roll === "admin") {
                        res.redirect("/admindasboad")
                    } else if (validemail.roll === "deliveryman") {
                        res.redirect("/memberdasboad");
                    } else if (validemail.roll === "owner") {
                        res.redirect("/owndasboad");
                    }
                    
                } else {
                    res.redirect("/login");
                    console.log({message: "not have an22 acount"})
                }
        } else {
            res.redirect("/login")
            console.log("not have an accout")
        }

    } catch (error) {
        console.log(error.message)
    }
}
const owndasboad = async (req, res) => {
    const roll = "admin";
    const adminuser = await adduser.find({roll});
    res.render("owndasboad", {adminuser})
}


const logout = (req,res,next) => {
    res.clearCookie(process.env.COOKI_NAME)
    res.render('login')

}

//other controlers
const adminuserdetail = async (req, res) => {
    try {
        const id = req.params.id;
        const selectuserdetail = await adduser.findOne({_id: id});
        res.render("admindetails", {selectuserdetail})
    } catch (error) {
        console.log(error.message)
    }
}

const seeyourdeleiverymenidcontroler = async (req,res) => {
    try {
        const mydeliverymen = await adduser.find({roll: "deliveryman", underadmin: req.params.seeyourdeleiverymenid })
        res.render("deliverymens", {mydeliverymen})
    } catch (error) {
        
    }
}



const submitorderpagecontroler = async (req,res) => {
    try {
        
        const submitorderid = req.params.allinfoid;
        const useridforcompleteorder = req.params.useridforcompleteorder;
        const confirmedorderfordeli = await ordermodel.findOne({_id: submitorderid})
        const itemfordelivery = await itemmodel.findOne({_id: confirmedorderfordeli.itemid})
        console.log(useridforcompleteorder)
        res.render("finishorder", {confirmedorderfordeli, itemfordelivery, useridforcompleteorder})
    } catch (error) {
        console.log(error.message)
    }
}




//post controler
const registerpost = async (req, res) => {
    try {
        const name= req.body.name;
        const phone= req.body.phone;
        const inemail= req.body.email;
        const password= await bcrypt.hash(req.body.password, 10);

        const newUser = await new registerModel({
            name,
            phone,
            inemail,
            password
        })
        const saveData = await newUser.save();
        res.redirect("/");

    } catch (error) {
        console.log(error)
    }
        // const validEmail = await registerModel.findOne({ email : inemail }, (err) => {
        //     console.log(err);
        // });
 
        // if (validEmail) {
        //     res.redirect("/login")
        // }else{

        // }

    }


const ordercompletecontroler = async (req,res) => {
        try {
            const requestitem = await new ordermodel({
                name: req.body.orderername,
                address: req.body.deliveryaddress,
                itemid: req.body.prouctid,
                paymentedprice: +req.body.deliverfees + +req.body.producctprice,
                phonenumber: req.body.phonenumber,
                paymentcode: req.body.paymentcode,
                owneridfororder: req.body.owneridfororder,
                deliverydateon: req.body.deliverydateon
                
            })
            requestitem.save()
            const createorder = {
                name: req.body.orderername,
                address: req.body.deliveryaddress,
                paymentedprice: +req.body.deliverfees + +req.body.producctprice,
                phonenumber: req.body.phonenumber,
                paymentcode: req.body.paymentcode,
                owneridfororder: req.body.owneridfororder,
                deliverydateon: req.body.deliverydateon
            }
            const deliveryitemfordeliver = await itemmodel.findOne({_id: req.body.prouctid,})
            res.render("completeorder", {createorder, deliveryitemfordeliver})
        } catch (error) {
            
        }
    }
    

const finishorderbyadminpagecontroler = async (req,res) => {
    try {
        const finishorderbyadminpageid = req.params.finishorderbyadminid
        res.render("finishorderbyadmin", {finishorderbyadminpageid})
    } catch (error) {
        
    }
}



const finishorderbyadmincontroler = async (req,res) => {
    try {
        const endedcode = req.body.codeoforder
        const endeditem = await ordermodel.findOne({deliverycompletecode : endedcode})
        if (endeditem.deliverycompletecode === endedcode) {
            const endedproductid = await itemmodel.findOne({_id: endeditem.itemid})
            const endeuserrr = await adduser.findOne({_id: req.params.finishorderbyadminid})
            await itemmodel.updateOne({_id: endeditem.itemid},{
                $set : {
                    totalsell: +1 + endedproductid.totalsell
                }
            }),
            {new: true}
            await adduser.updateOne({_id: req.params.finishorderbyadminid}, {
                $set : {
                    mailbalance: +endedproductid.productprice + +endeuserrr.mailbalance
                }
            }),
            {new: true}
            const endeduser = await adduser.findOne({_id: req.params.finishorderbyadminid})
            const historymake = await new historymodel({
                completeduserid: endeduser._id,
                completeditemid: endedproductid._id
            })
            await historymake.save()
    
            await ordermodel.deleteOne({deliverycompletecode : endedcode})
            res.redirect("/admindasboad")
        } else {
            res.redirect("/admindasboad")
            console.log("not working")
        }

    } catch (error) {
        res.redirect("/admindasboad")
    }
}




const requestordercontroler = async (req,res) => {
    const finalorderdetails = await requiestordermodel.findOne({vcode: req.body.confirmcode})
    if (finalorderdetails) {
        try {
        if (req.body.confirmcode === finalorderdetails.vcode) {
                const createorder = await new ordermodel({

                    code: req.body.confirmcode,
                    itemid: finalorderdetails.prouctid
                })
                await createorder.save();


                
            }else{
                console.log("write right vcode")
            }
        } catch (error) {
            console.log(error)
        }

    } else {
        console.log("your vcode is wrond")
    }

}






const finishordercontroler = async (req,res) => {
    try {
        const finishorderid = req.body.deliverycodeend;
        const finishorderuserid = req.params.finishorderuserid;
        const finishorderforsubmitinfo = await ordermodel.findOne({deliverycompletecode: finishorderid})
        
        if (finishorderforsubmitinfo) {
            
            const finishedorderitemsubmit = await itemmodel.findOne({_id: finishorderforsubmitinfo.itemid})
            const deliverymanofthisorder = await adduser.findOne({_id: finishorderuserid})
            

            await adduser.updateOne({_id: finishorderuserid}, {
                $set: {
                    todayincome: deliverymanofthisorder.todayincome + +finishedorderitemsubmit.productprice / 100 * 10,
                    mailbalance: deliverymanofthisorder.mailbalance + deliverymanofthisorder.todayincome,
                    todayordercomolete: deliverymanofthisorder.todayordercomolete + 1,
                    allordercomplete: +deliverymanofthisorder.allordercomplete + +deliverymanofthisorder.todayordercomolete ,
                    
                }
            }),
            await itemmodel.updateOne({_id: finishorderforsubmitinfo.itemid}, {
                $set: {
                    totalsell: finishedorderitemsubmit.totalsell + 1
                } 
            }),
            {new: true}
            const enddata = {
                name: "MD Naiem Hosengrg",
                earned: +finishedorderitemsubmit.productprice / 100 * 10

            }
            await ordermodel.deleteOne({_id: finishorderforsubmitinfo._id})
            await confirmrdordermodel.deleteOne({orderedid: finishorderforsubmitinfo._id})
            res.render("congratulation", {enddata})
        } else {
            console.log("invalid code")
        }
    } catch (error) {
        console.log("there uis something wrong")
    }
}



const confirmordercontroler = async (req,res) => {
    try {
        const orderedid = req.params.orderdeleteid;
        const usernameof = req.params.usernameof;

        await ordermodel.updateOne({_id: orderedid}, {
            $set: {
                orderStatus: "confirmed",
                confirmeduser: usernameof
            }
        })
        res.redirect("/memberdasboad")
    } catch (error) {
        console.log(error.message)
    }
}



//adduser controller
const addadmincontroler = async (req,res) => {
    try {
        const axicteduser = await adduser.findOne({email: req.body.email})
        const roll = "admin";
        const haspassadmin = await bcrypt.hash(req.body.password, 10)
        if (axicteduser) {
            res.redirect("/owndasboad");
        } else {
            const adminuser = await new adduser({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            location: req.body.location,
            password: haspassadmin,
            roll
        })
        await adminuser.save();
        res.redirect("/owndasboad");
    }

    } catch (error) {
        console.log(error.message)
    }
}



const addmembercontroler = async (req,res) => {
    const axictedusermem = await adduser.findOne({email: req.body.email})
    const roll = "deliveryman"
    const haspassmember = await bcrypt.hash(req.body.password, 10)
    try {
        if (axictedusermem) {
            console.log("user already axict")
            const message = "The email adress you have entered is already used" 
            res.redirect("/admindasboad");
            console.log({message})
        } else {
            const memberuser = await new adduser({
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                location: req.body.location,
                underadmin: req.body.underadmin,
                password: haspassmember,
                roll
            })
            await memberuser.save();
            res.redirect("/admindasboad")
        }
    } catch (error) {0
        console.log(error.message)
    }
}


//Update controler

const updateproffile = async (req, res, next) => {
    try {
        const updateprofileid = req.params.updateprofileid;
        console.log(updateprofileid)
        await adduser.updateOne({_id: updateprofileid}, {
            $set : {
                name : req.body.name,
                bio : req.body.bio,
                address : req.body.address,
                education : req.body.education,
                email : req.body.email,
                phone : req.body.phone,
                password : req.body.password,
                productfile : req.body.productfile,
            }
        })
        res.redirect("profile")
        next()

    } catch (error) {
        console.log(error.message)
    }
}


const updateitem = async (req, res, next) => {
    try {
        const updateitemid = req.params.updateitemid;
        console.log(updateitemid)
        await itemmodel.updateOne({_id: updateitemid}, {
            $set : {
                productname : req.body.name,
                productprice : req.body.price,
                productdescription : req.body.description,
                productfile : req.body.file
            }
        })
        res.redirect("/admindasboad")
        next()

    } catch (error) {
        console.log(error.message)
    }
}




const productcontroler = async (req,res) => {
    const pricetable = {
        shakaprice : req.body.dhakaprice,
        chattogramprice : req.body.mymprice,
        khulnaprice : req.body.kulprice,
        rajshahiprice : req.body.rajkaprice,
        rangpurprice : req.body.rankaprice,
        mymensinghprice : req.body.myprice,
        sylhetprice : req.body.syprice,
        barishalprice : req.body.bhaprice

    }

    const deliverydate = {
        shakadate : req.body.dhakadate,
        chattogramdate : req.body.mymdate,
        khulnadate : req.body.kuldate,
        rajshahidate : req.body.rajkadate,
        rangpurdate : req.body.rankadate,
        mymensinghdate : req.body.mydate,
        sylhetdate : req.body.sydate,
        barishaldate : req.body.bhadate

    }

    try {
        const newproduct = await new itemmodel({
             productname: req.body.name,
             productprice: req.body.price,
             productdescription: req.body.description,
             productfile: req.file.filename,
             bakashnumber: req.body.bakashnumber,
             nagadnumber: req.body.nagadnumber,
             rocketnumber: req.body.rocketnumber,
             weath: req.body.weath,
             ownerid: req.body.ownerid,
             locationarea: req.body.location,
             pricetable,
             deliverydate
             
        })
        console.log(newproduct)
        await newproduct.save();
        res.redirect("admindasboad");
        process.emit();
    } catch (error) {
        
    }
}




const confirmrequestitemrecivecontroler = async (req,res) => {
    try {
        const confirmrequestitemid = req.params.confirmrequestitemid;
        await ordermodel.updateOne({_id: confirmrequestitemid}, {
            $set: {
                orderStatus: "accepted"
            }
        })
        res.redirect("/admindasboad")
    } catch (error) {
        
    }
}






//edit controler
const edituser = async (req,res) => {
    try {
        const name = req.body.name;
        const phone = req.body.phone;
        const email = req.body.email;
        const upid = req.params.id;
        console.log(upid)
        await adduser.findByIdAndUpdate({_id: upid}, {

        })
    } catch (error) {
        
    }
}


const edititempage = async (req,res) => {
    try {
        const idforeidtitem = req.params.idforeidtitem;
        const selectitemforedit = await itemmodel.findOne({_id: idforeidtitem})
        res.render("itemedit", {selectitemforedit})
    } catch (error) {
        
    }
}




//delete controler
const deleteorder = async (req, res) => {
    try {
        const deleteorderid = req.params.deleteorderid;
        await ordermodel.deleteOne({_id: deleteorderid});
        res.redirect("/memberdasboad")
        console.log("Order has been deleted")
        console.log(ordersele)
    } catch (error) {
        
    }
}


const deletedrequestitem = async (req,res) => {
    try {
        const requestdeleteid = req.params.requestdeleteid;
        await requiestordermodel.deleteOne({_id: requestdeleteid})
        res.redirect("/admindasboad")
    } catch (error) {
        
    }
}



const deleteuserper = async (req, res, next) => {
    try {
        const deleteuseridfor = req.params.deleteuseridfor;
        await adduser.deleteOne({_id: deleteuseridfor})
        res.redirect("/admindasboad")
    } catch (error) {
        console.log(error.message)
    }
}
const deleteadminuser = async (req, res, next) => {
    try {
        const deleteuseridforadmin = req.params.deleteuseridforadmin;
        await adduser.deleteOne({_id: deleteuseridforadmin})
        res.redirect("/owndasboad")
    } catch (error) {
        console.log(error.message)
    }
}

const deleteitem = async (req, res, next) => {
    try {
        const deleteitemid = req.params.deleteitemid
        const deletedforitem = await itemmodel.findOne({_id: deleteitemid})
        await itemmodel.deleteOne({_id: deleteitemid})

        // fs.unlink('/assets/images/post/deletedforitem.productfile', (error) => {
        //     if (error) {
        //         console.log(error)
        //     }
        // })
        res.redirect("/admindasboad")
    } catch (error) {
        console.log(error.message)
    }
}


module.exports= {
    confirmrequestitemrecivecontroler,
    processingorderdetailscontroler,
    finishorderbyadminpagecontroler,
    seeyourdeleiverymenidcontroler,
    confirmedorderformecontroler,
    finishorderbyadmincontroler,
    seemyorderihavecontroler,
    viewreciveordercontroler,
    submitorderpagecontroler,
    requestorderedcontroler,
    orderinprocesscontroler,
    adminuserviewcontroler,
    ordercompletecontroler,
    requestordercontroler,
    confirmordercontroler,
    ordercontrolerfordel,
    showmyordercontroler,
    finishordercontroler,
    createdorderdeails,
    deletedrequestitem,
    sendordercontroler,
    addmembercontroler,
    addadmincontroler,
    productcontroler,
    aboutuscontroler,
    deleteadminuser,
    adminuserdetail,
    updateproffile,
    ordercontroler,
    productdetail,
    memberdasboad,
    deleteprofile,
    deleteuserper,
    completeorder,
    admindasboad,
    edititempage,
    registerpost,
    editprofile,
    deleteorder,
    deleteitem,
    owndasboad,
    updateitem,
    createitem,
    loginhome,
    addmember,
    loginpost,
    owneritem,
    edituser,
    register,
    profile,
    logout,
    login,
    error,
    order,
    home,
    all
};

