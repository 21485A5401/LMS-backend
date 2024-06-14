const express = require("express");
const { createQuestion, getQuestions, getQuestion, updateQuestion } = require("../../controller/academics/questionsCtrl");
const isTeacher = require("../../middlewares/isTeacher");
const isTeacherLogin = require("../../middlewares/isTeacherLogin");

const questionsRouter = express.Router();

questionsRouter.get("/", isTeacherLogin, isTeacher, getQuestions);
questionsRouter.post("/", isTeacherLogin, isTeacher, createQuestion);
questionsRouter.get("/:id", isTeacherLogin, isTeacher, getQuestion);
questionsRouter.put("/:id", isTeacherLogin, isTeacher, updateQuestion);

module.exports = questionsRouter;
 