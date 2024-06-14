
const express = require("express");
const {
    registerSuperAdminCtrl,
    loginSuperAdmin,
    getSuperAdmin
} = require('../../controller/staff/superAdminCtrl');
const { getSchoolAdminsCtrl,registerSchoolAdminCtrl } = require("../../controller/staff/schoolAdminCtrl");
const isSuperAdmin = require("../../middlewares/isSuperAdmin");
const isLogin = require("../../middlewares/isLogin");
const isSuperAdminLogin = require("../../middlewares/isSuperAdminLogin");


const superAdminRouter = express.Router();
//super Admin Registration
superAdminRouter.post("/register", registerSuperAdminCtrl);
//Super Admin Login
superAdminRouter.post("/login", loginSuperAdmin);
// get all school Admin 
superAdminRouter.get("/schoolAdmins",isSuperAdminLogin , isSuperAdmin, getSchoolAdminsCtrl);
//School Admin Registration by super admin login
superAdminRouter.post('/superAdmin/register',isSuperAdminLogin, isSuperAdmin, registerSchoolAdminCtrl);
// get SuperAdmin Details
superAdminRouter.get('/:SuperAdmin',isSuperAdminLogin, isSuperAdmin, getSuperAdmin);

module.exports = superAdminRouter;