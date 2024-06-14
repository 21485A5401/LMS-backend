const express = require("express");
const {
    registerSchoolAdminCtrl,
    loginSchoolAdmin,
    getSchoolAdminsCtrl,
    getSchoolAdmin
} = require("../../controller/staff/schoolAdminCtrl");
const {registerAdmCtrl,getAdminsCtrl} = require('../../controller/staff/adminCtrl');
const isSchoolAdmin = require("../../middlewares/isSchoolAdmin");
const isSchoolAdminLogin = require("../../middlewares/isSchoolAdminLogin");
// const isSuperAdmin = require("../../middlewares/isSuperAdmin");
// const isSuperAdminLogin = require("../../middlewares/isSuperAdminLogin");



const schoolAdminRouter = express.Router();

schoolAdminRouter.post('/schoolAdmin/register',isSchoolAdminLogin, isSchoolAdmin, registerAdmCtrl);

schoolAdminRouter.post('/login', loginSchoolAdmin);

schoolAdminRouter.get('/admins',isSchoolAdminLogin,isSchoolAdmin,getAdminsCtrl);

schoolAdminRouter.get('/:SchoolAdmin',isSchoolAdminLogin,isSchoolAdmin,getSchoolAdmin)


module.exports = schoolAdminRouter;