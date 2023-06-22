
const { render } = require('ejs');
const express= require('express');
const {
    home,
    order, 
    completeorder, 
    admindasboad,
    createitem,
    addmember,
    memberdasboad,
    register,
    registerpost,
    login,
    owndasboad,
    addadmincontroler,
    adminuserdetail,
    edituser,
    loginpost,
    addmembercontroler,
    productcontroler,
    error,
    logout,
    productdetail,
    all,
    profile,
    ordercontroler,
    editprofile,
    updateproffile,
    ordercompletecontroler,
    createdorderdeails,
    loginhome,
    deleteorder,
    owneritem,
    deleteprofile,
    deleteuserper,
    deleteadminuser,
    edititempage,
    deleteitem,
    updateitem,
    confirmordercontroler,
    submitorderpagecontroler,
    finishordercontroler,
    requestordercontroler,
    sendordercontroler,
    viewreciveordercontroler,
    deletedrequestitem,
    confirmrequestitemrecivecontroler,
    adminuserviewcontroler,
    seeyourdeleiverymenidcontroler,
    ordercontrolerfordel,
    requestorderedcontroler,
    orderinprocesscontroler,
    confirmedorderformecontroler,
    processingorderdetailscontroler,
    finishorderbyadmincontroler,
    finishorderbyadminpagecontroler,
    aboutuscontroler,
    showmyordercontroler,
    seemyorderihavecontroler
} = require('../controler/commoncontroler');
const {cheaklogin, stoplogin} = require('../medlewar/cheaklogin');
const { single } = require('../medlewar/upload');
const upload = require('../medlewar/upload');
const commonrouter = express.Router();


commonrouter.get("/", stoplogin, home)
commonrouter.get("/aboutus", aboutuscontroler)
commonrouter.get("/loginhome", cheaklogin, loginhome)
commonrouter.get("/order", order)
commonrouter.get("/completeorder", cheaklogin, completeorder)
commonrouter.get("/admindasboad", cheaklogin, admindasboad)
commonrouter.get("/createitem", cheaklogin, createitem)
commonrouter.get("/addmember", cheaklogin, addmember)
commonrouter.get("/memberdasboad", cheaklogin, memberdasboad)
commonrouter.get("/owndasboad", cheaklogin, owndasboad)
commonrouter.get("/profile/:selectuserid", cheaklogin, profile)
commonrouter.get("/createdorderdetails/:orderitemid", cheaklogin, createdorderdeails)
commonrouter.get("/submitorderpage/:allinfoid/:useridforcompleteorder", submitorderpagecontroler)
commonrouter.get("/editprofile/:editprofileid", cheaklogin, editprofile)
commonrouter.get("/updateprofile/:updateprofileid", cheaklogin, updateproffile)
commonrouter.get("/deleteprofile/:deleteuserid", cheaklogin, deleteprofile)
commonrouter.get("/viewreciveorder/:viewreciveorderid", cheaklogin, viewreciveordercontroler)
commonrouter.get("/processingorderdetails/:processingorderdetailsid", cheaklogin, processingorderdetailscontroler)
commonrouter.get("/owneritem/:owneritemid", cheaklogin, owneritem)
commonrouter.get("/sendorder", sendordercontroler)
commonrouter.get("/finishorderbyadminpage/:finishorderbyadminid", cheaklogin, finishorderbyadminpagecontroler)
commonrouter.get("/itemedit/:idforeidtitem", cheaklogin, edititempage)
commonrouter.get("/adminuserview/:adminuserviewid", adminuserviewcontroler)
commonrouter.post("/showmyorder", showmyordercontroler)
commonrouter.get("/seemyorderihave", seemyorderihavecontroler)
// commonrouter.use(error)9

commonrouter.get("/register", register)
commonrouter.post("/register", registerpost)

commonrouter.post("/addadmin", addadmincontroler)
commonrouter.post("/addmemberpost", cheaklogin, addmembercontroler)
commonrouter.post("/createpost", cheaklogin, upload.single("file"), productcontroler)

commonrouter.get("/login", stoplogin, login)
commonrouter.post("/login", stoplogin, loginpost)
commonrouter.get("/logout", cheaklogin, logout)



commonrouter.get("/productdetail/:pid", productdetail)
commonrouter.get("/order/:oid", ordercontroler)



9

//other router
commonrouter.get("/adminuserdetai", cheaklogin, adminuserdetail)
commonrouter.post("/createorder", ordercompletecontroler)
commonrouter.get("/confirmrequestitem/:confirmrequestitemid", cheaklogin, confirmrequestitemrecivecontroler)


//update router
commonrouter.put("/editadmin/:id", cheaklogin, edituser)
commonrouter.post("/updateprofile/:id", cheaklogin, updateproffile)
commonrouter.get("/updateitem/:updateitemid", cheaklogin, updateitem)

commonrouter.get("/confirmorder/:orderdeleteid/:usernameof", cheaklogin, confirmordercontroler)
commonrouter.post("/requestorder", requestordercontroler)

//delete router
commonrouter.get("/deleteuser/:deleteuseridfor", cheaklogin, deleteuserper)
commonrouter.get("/deleteadminuser/:deleteuseridforadmin", cheaklogin, deleteadminuser)
commonrouter.get("/deleteitem/:deleteitemid", cheaklogin, deleteitem)
commonrouter.get("/deleterequestitem/:requestdeleteid", cheaklogin, deletedrequestitem)
commonrouter.get("/deleteorder/:deleteorderid", cheaklogin, deleteorder)



commonrouter.post("/finishorder/:finishorderuserid", cheaklogin, finishordercontroler)
commonrouter.post("/finishorderbyadminof/:finishorderbyadminid", cheaklogin, finishorderbyadmincontroler)
commonrouter.get("/seeyourdeleiverymen/:seeyourdeleiverymenid", cheaklogin, seeyourdeleiverymenidcontroler)
commonrouter.get("/seeorder/:seeorderid", cheaklogin, ordercontrolerfordel)
commonrouter.get("/seereqorder/:reqorderid", cheaklogin, requestorderedcontroler)
commonrouter.get("/orderinprocess/:orderinprocessid", cheaklogin, orderinprocesscontroler)
commonrouter.get("/confirmedorderforme/:confirmedorderformeid", cheaklogin, confirmedorderformecontroler)

// commonrouter.get("*", all)
module.exports= commonrouter;