const SchoolAdmin = require("../model/Staff/SchoolAdmin");

const isSchoolAdmin = async(req,res,next)=>{
    const userId = req?.userAuth?._id;
    const schoolAdmin = await SchoolAdmin.findById(userId);
    if(schoolAdmin?.role === "schoolAdmin"){
        next();
    }else{
        next(new Error("Access Denied, School Admin only"));
    }
};

module.exports = isSchoolAdmin;