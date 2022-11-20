const router = require('express').Router();
//import employeeList Model
const employeeModel=require('../models/employeeList')

//create first route --add Todo Item to database
router.post('/api/employee', async (req, res)=>{
    try{
      const {empId,firstName,lastName,deptName,location}=req.body
      const newEmployee = new employeeModel({
        empId,
        firstName,
        lastName,
        deptName,
        location
      })
      //save this item in database
      const saveEmployee = await newEmployee.save()
      res.status(200).json(saveEmployee);
    }catch(err){
      res.json(err);
    }
  })

// get data from database
router.get('/api/getEmployees', async (req, res)=>{
    try{
      const allEmployees = await employeeModel.find({});
      res.status(200).json(allEmployees)
    }catch(err){
      res.json(err);
    }
})

//update employee
router.put('/api/employee/:id', async (req, res)=>{
  try{
    //find the item by its id and update it
    const {id:_id}=req.params
    const {empId,firstName,lastName,deptName,location}=req.body
      const newEmployee = new employeeModel({
        empId,
        firstName,
        lastName,
        deptName,
        location,
        _id
      })
    const updateEmployee = await employeeModel.findByIdAndUpdate(_id,newEmployee);
    res.status(200).json(updateEmployee);
  }catch(err){
    res.json(err);
  }
})
  module.exports = router;