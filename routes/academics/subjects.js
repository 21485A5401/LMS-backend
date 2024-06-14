const express = require("express");
const {
  createSubject,
  deleteSubject,
  getProgram,
  getSubjects,
  updatSubject,
} = require("../../controller/academics/subjects");

const isAdmin = require("../../middlewares/isAdmin");
const isLogin = require("../../middlewares/isLogin");

const isTeacher = require("../../middlewares/isTeacher");
const isTeacherLogin = require("../../middlewares/isTeacherLogin");

const subjectRouter = express.Router();

subjectRouter.get("/teacher",isTeacherLogin, isTeacher, getSubjects);

subjectRouter.post("/create_subject", isLogin, isAdmin, createSubject);

subjectRouter.get("/", isLogin, isAdmin, getSubjects);

subjectRouter.get("/:id", isLogin, isAdmin, getProgram);
subjectRouter.put("/:id", isLogin, isAdmin, updatSubject);
subjectRouter.delete("/:id", isLogin, isAdmin, deleteSubject);

module.exports = subjectRouter;
