const AysncHandler = require("express-async-handler");
const SuperAdmin = require("../../model/Staff/SuperAdmin");
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../utils/verifyToken");
const { hashPassword, isPassMatched } = require("../../utils/helpers");

//Super Admin Register
exports.registerSuperAdminCtrl = AysncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const superadminFound = await SuperAdmin.findOne({ email });
    if (superadminFound) {
        throw new Error("School Admin Exists");
    }
    //register
    const superAdmin = await SuperAdmin.create({
        name,
        email,
        password: await hashPassword(password),
    });
    res.status(201).json({
        status: "Sucess",
        data: superAdmin,
        message: "Super Admin registered Sucessfully",
    });
});

//Super Admin login
exports.loginSuperAdmin = AysncHandler(async (req, res) => {
    const { email, password } = req.body;

    const superAdmin = await SuperAdmin.findOne({ email });
    //find school Admin
    if (!superAdmin) {
        return res.json({ message: "Invalid login credentials" });
    }
    
    //verify the password
    const isMatched = await isPassMatched(password,superAdmin?.password);
    if (!isMatched) {
        return res.json({ message: "Invalid login crendentials" });
      } else {
        return res.json({
          data: generateToken(superAdmin._id),
          message: "Super Admin logged in successfully",
          Role : superAdmin.role
        });
      }
})

//get single super admin details

exports.getSuperAdmin = AysncHandler(async (req, res) => {
    const superAdminId = req.params.SuperAdmin;
    //find the teacher
    const superAdmin = await SuperAdmin.findById(superAdminId);
    if (!superAdmin) {
      throw new Error("SuperAdmin not found");
    }
    res.status(200).json({
      status: "success",
      message: "SuperAdmin fetched successfully",
      data: superAdmin,
    });
  });
