const express = require("express");
const {
  adminRegisterStudent,
  loginStudent,
  getStudentProfile,
  getAllStudentsByAdmin,
  getStudentByAdmin,
  studentUpdateProfile,
  adminUpdateStudent,
  writeExam,
  getExamByClassLevel,
  getExamBySubject,
  saveExamAttempt
} = require("../../controller/students/studentsCtrl");

const isAdmin = require("../../middlewares/isAdmin");
const isLogin = require("../../middlewares/isLogin");
const isStdudent = require("../../middlewares/isStudent");
const isStudentLogin = require("../../middlewares/isStudentLogin");
const studentRouter = express.Router();

studentRouter.post("/admin/register", isLogin, isAdmin, adminRegisterStudent);
studentRouter.post("/login", loginStudent);
studentRouter.get("/profile", isStudentLogin, isStdudent, getStudentProfile);
studentRouter.get("/students", isLogin, isAdmin, getAllStudentsByAdmin);
studentRouter.get("/:studentID", isLogin, isAdmin, getStudentByAdmin);
// studentRouter.post("/exambyclass",isStudentLogin,isStdudent,getExamByClassLevel);
studentRouter.post("/getExamBySubject",isStudentLogin,isStdudent,getExamBySubject);
// studentRouter.post("/saveExamAttempt",isStudentLogin,isStdudent,saveExamAttempt);

studentRouter.post(
    "/exam/:examID",
    isStudentLogin,
    isStdudent,
    writeExam
  );
studentRouter.put("/update", isStudentLogin, isStdudent, studentUpdateProfile);
studentRouter.put(
  "/:studentID/update/admin",
  isLogin,
  isAdmin,
  adminUpdateStudent
);

module.exports = studentRouter;
