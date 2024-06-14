const mongoose = require("mongoose");
const SchoolAdminSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "schoolAdmin",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SuperAdmin",
      required: true
    },
    domainName: {
      type: String,
      required: false
    },
    databaseName: {
      type: String,
      required: false
    },
    // designation:{
    //   type:String,
    //   required:true
    // },
    phonenumber:{
      type:Number,
      required:true
    },
    // gender:{
    //   type:String,
    //   required:true
    // },
    // qualification:{
    //   type:String,
    //   required:true
    // },
    // experience:{
    //   type:String,
    //   required:true
    // },
    // location:{
    //   type:String,
    //   required:true
    // },
    // branchname:{
    //   type:String,
    //   required:true
    // }
  },
  {
    timestamps: true,
  }
);

//model
const SchoolAdmin = mongoose.model("SchoolAdmin", SchoolAdminSchema);

module.exports = SchoolAdmin;