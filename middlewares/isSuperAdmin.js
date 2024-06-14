const SuperAdmin = require("../model/Staff/SuperAdmin");

const isSuperAdmin = async(req,res,next)=>{
    const userId = req?.userAuth?._id;
    const superAdmin = await SuperAdmin.findById(userId);
    console.log(superAdmin);
    if(superAdmin?.role === "SuperAdmin"){
        next();
    }else{
        next(new Error("Access Denied, Super Admin only"));
    }
};

module.exports = isSuperAdmin;