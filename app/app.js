const express = require("express");
const cors = require('cors');
const {
  globalErrHandler,
  notFoundErr,
} = require("../middlewares/globalErrHandler");
const academicTermRouter = require("../routes/academics/academicTerm");
const academicYearRouter = require("../routes/academics/academicYear");
const classLevelRouter = require("../routes/academics/classLevel");
const examRouter = require("../routes/academics/examRoutes");
const programRouter = require("../routes/academics/program");
const questionsRouter = require("../routes/academics/questionRoutes");
const subjectRouter = require("../routes/academics/subjects");
const yearGroupRouter = require("../routes/academics/yearGroups");
const adminRouter = require("../routes/staff/adminRouter");
const studentRouter = require("../routes/staff/student");
const teachersRouter = require("../routes/staff/teachers");
const superAdminRouter = require("../routes/staff/superAdminRouter");
const schoolAdminRouter = require("../routes/staff/schoolAdminRouter");

const app = express();

//Middlewares
app.use(express.json()); //pass incoming json data
app.use(cors());
//Routes
app.use("/app/v1/superAdmins",superAdminRouter);
app.use("/app/v1/school-admins",schoolAdminRouter);
app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/academic-years", academicYearRouter);
app.use("/api/v1/academic-terms", academicTermRouter);
app.use("/api/v1/class-levels", classLevelRouter);
app.use("/api/v1/programs", programRouter);
app.use("/api/v1/subjects", subjectRouter);
app.use("/api/v1/year-groups", yearGroupRouter);
app.use("/api/v1/teachers", teachersRouter);
app.use("/api/v1/exams", examRouter);
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/questions", questionsRouter);
//Error middlewares
app.use(notFoundErr);
app.use(globalErrHandler);

module.exports = app;
