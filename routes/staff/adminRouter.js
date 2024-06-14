const express = require("express");
const {
  registerAdmCtrl,
  adminPublishResultsCtrl,
  adminSuspendTeacherCtrl,
  adminUnPublishResultsCtrl,
  adminUnSuspendTeacherCtrl,
  adminUnWithdrawTeacherCtrl,
  adminWithdrawTeacherCtrl,
  deleteAdminCtrl,
  getAdminProfileCtrl,
  getAdminsCtrl,
  loginAdminCtrl,
  updateAdminCtrl,
  getAdminDeatails,
} = require("../../controller/staff/adminCtrl");
const {adminRegisterTeacher} = require("../../controller/staff/teachersCtrl");
const {adminRegisterStudent} = require("../../controller/students/studentsCtrl");
const isAdmin = require("../../middlewares/isAdmin");
const isSchoolAdmin = require("../../middlewares/isSchoolAdmin");
const isLogin = require("../../middlewares/isLogin");

const adminRouter = express.Router();

//teacher registration
adminRouter.post("/admin/register", isLogin, isAdmin, adminRegisterTeacher);
//student Registration
adminRouter.post("/student/register", isLogin, isAdmin, adminRegisterStudent);

//login
adminRouter.post("/login", loginAdminCtrl);

//get all
adminRouter.get("/schoolAdmin", isLogin,isSchoolAdmin, getAdminsCtrl);

//single

adminRouter.get("/profile", isLogin, isAdmin, getAdminProfileCtrl);

//Admin Details
adminRouter.get('/:adminId',isLogin,isAdmin,getAdminDeatails);

//update
adminRouter.put("/", isLogin, isAdmin, updateAdminCtrl);

//delete
adminRouter.delete("/:id", deleteAdminCtrl);

//suspend
adminRouter.put("/suspend/teacher/:id", adminSuspendTeacherCtrl);

//unsuspend
adminRouter.put("/unsuspend/teacher/:id", adminUnSuspendTeacherCtrl);

//withdraw
adminRouter.put("/withdraw/teacher/:id", adminWithdrawTeacherCtrl);

//unwithdraw
adminRouter.put("/unwithdraw/teacher/:id", adminUnWithdrawTeacherCtrl);

//publish exams
adminRouter.put("/publish/exam/:id", adminPublishResultsCtrl);

//unpublish exams results
adminRouter.put("/unpublish/exam/:id", adminUnPublishResultsCtrl);

module.exports = adminRouter;
