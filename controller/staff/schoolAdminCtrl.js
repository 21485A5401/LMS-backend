const AysncHandler = require("express-async-handler");
const SchoolAdmin = require('../../model/Staff/SchoolAdmin');
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../utils/verifyToken");
const { hashPassword, isPassMatched } = require("../../utils/helpers");

//School Admin Register
exports.registerSchoolAdminCtrl = AysncHandler(async (req, res) => {
    const { designation,fullname, email,phonenumber,gender,qualification,experience,location,branchname } = req.body;

    const schooladminFound = await SchoolAdmin.findOne({ email });
    console.log(email);
    if (schooladminFound) {
        throw new Error("School Admin Exists");
    }
    //register
    const school = new SchoolAdmin({
        designation,
        fullname,
        email,
        phonenumber,
        gender,
        qualification,
        experience,
        location,
        branchname,
        password: await hashPassword("12345678"),
        createdBy: req.userAuth?._id,
    });
    console.log(school);
    await school.save();
    res.status(201).json({
        status: "Sucess",
        data: school,
        message: "School Admin registered Sucessfully",
    });
});

//School Admin login
exports.loginSchoolAdmin = AysncHandler(async (req, res) => {
    const { email, password } = req.body;

    const school = await SchoolAdmin.findOne({ email });
    //find school Admin
    if (!school) {
        return res.json({ message: "Invalid login credentials" });
    }
    //verify the password
    const isMatched = await isPassMatched(password, school?.password);
    if (!isMatched) {
        return res.json({ message: "Invalid login crendentials" });
    } else {
        return res.json({
            data: generateToken(school._id),
            message: "School Admin logged in successfully",
            Role : school.role
        });
    }
})

//get  all School Admins
exports.getSchoolAdminsCtrl = AysncHandler(async (req, res) => {
    const schooladmins = await SchoolAdmin.find();
    res.status(200).json({
        status: "Sucess",
        message: "School Admins fetched Successfully",
        data: schooladmins,
    });
});

//getting school admin details

exports.getSchoolAdmin = AysncHandler(async (req, res) => {
    const schoolAdminId = req.params.SchoolAdmin;
    //find the teacher
    const schoolAdmin = await SchoolAdmin.findById(schoolAdminId);
    if (!schoolAdmin) {
      throw new Error("SchoolAdmin not found");
    }
    res.status(200).json({
      status: "success",
      message: "SchoolAdmin fetched successfully",
      data: schoolAdmin,
    });
  });