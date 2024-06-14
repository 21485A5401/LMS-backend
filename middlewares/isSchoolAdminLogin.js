const SchoolAdmin = require('../model/Staff/SchoolAdmin');
const verifyToken = require("../utils/verifyToken");

const isSchoolAdminLogin = async (req, res, next) => {
  //get token from header
  const headerObj = req.headers['x-token'];
  // const token = headerObj?.authorization?.split(" ")[1];

  //verify token
  const verifiedToken = verifyToken(headerObj);
  if (verifiedToken) {
    //find the admin
    const user = await SchoolAdmin.findById(verifiedToken.id).select(
      "name email role"
    );
    //save the user into req.obj
    req.userAuth = user;
    // console.log(req?.userAuth?._id);
    next();
  } else {
    const err = new Error("Token expired/invalid");
    next(err);
  }
};

module.exports = isSchoolAdminLogin;
