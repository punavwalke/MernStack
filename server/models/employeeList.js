//import mongoose to create mongoose model
const mongoose = require('mongoose');

//create Schema
const EmployeeSchema = new mongoose.Schema({
  empId:{
    type:Number,
    required:true
  },
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  deptName:{
    type:String,
    required:true
  },
  location:{
    type:String,
    required:true
  }
})

//export this Schema
module.exports = mongoose.model('employee', EmployeeSchema);