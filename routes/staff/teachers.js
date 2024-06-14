const express = require("express");
const {
  adminRegisterTeacher,
  loginTeacher,
  getAllTeachersAdmin,
  getTeacherByAdmin,
  getTeacherProfile,
  teacherUpdateProfile,
  adminUpdateTeacher,
  getTeachersData,
  getStudentResults,
  getExamResults
} = require("../../controller/staff/teachersCtrl");
const isAdmin = require("../../middlewares/isAdmin");
const isLogin = require("../../middlewares/isLogin");
const isTeacher = require("../../middlewares/isTeacher");
const isTeacherLogin = require("../../middlewares/isTeacherLogin");
const teachersRouter = express.Router();

teachersRouter.post("/login", loginTeacher);
teachersRouter.get("/teachers", isLogin, isAdmin, getAllTeachersAdmin);
teachersRouter.get("/profile", isTeacherLogin, isTeacher, getTeacherProfile);
teachersRouter.get("/admin/:teacherID", isLogin, isAdmin, getTeacherByAdmin);
teachersRouter.get("/:teacherID", isTeacherLogin, isTeacher, getTeacherByAdmin);
teachersRouter.post("/studentResults", isTeacherLogin, isTeacher, getStudentResults);
teachersRouter.get("/results/:examId", isTeacherLogin, isTeacher, getExamResults);
// teachersRouter.get("/teachers", isLogin, isAdmin, getTeachersData);
teachersRouter.put(
  "/:teacherID/update",
  isTeacherLogin,
  isTeacher,
  teacherUpdateProfile
);
teachersRouter.put(
  "/:teacherID/update/admin",
  isLogin,
  isAdmin,
  adminUpdateTeacher
);
module.exports = teachersRouter;
