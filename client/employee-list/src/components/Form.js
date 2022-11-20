import React, { useState } from "react";
import axios from "axios";
import '../App.css'

const Form = ({ setIsUpdating, curEmp }) => {
  const [state, setState] = useState({
    empId: curEmp.empId,
    firstName: curEmp.firstName,
    lastName: curEmp.lastName,
    deptName: curEmp.deptName,
    location: curEmp.location,
  });
  //Update employee
  const updateEmployee = async (e) => {
    try {
      const res = await axios.put(
        `http://localhost:5500/api/employee/${curEmp._id}`,
        state
      );
      console.log(res);
      setIsUpdating(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-3 mb-3">Update Employee</h2>
        <form onSubmit={updateEmployee} style={{marginLeft:'300px'}}>
          <div className="form-group">
            <label for="empId">Employee ID</label>
            <input
              type="text"
              placeholder={curEmp.empId}
              onChange={handleChange}
              value={state.id}
              defaultValue={curEmp.empId}
              name="empId"
              id="empId"
              className="form-control w-50"
            />
          </div>
          <div className="form-group">
            <label for="firstName">First Name</label>
            <input
              type="text"
              placeholder={curEmp.firstName}
              onChange={handleChange}
              value={state.firstName}
              defaultValue={curEmp.firstName}
              name="firstName"
              id="firstName"
              className="form-control w-50"
            />
          </div>
          <div className="form-group">
            <label for="lastName">LastName</label>
            <input
              type="text"
              placeholder={curEmp.lastName}
              onChange={handleChange}
              value={state.lastName}
              defaultValue={curEmp.lastName}
              name="lastName"
              id="lastName"
              className="form-control w-50"
            />
          </div>
          <div className="form-group">
            <label for="deptName">Department Name</label>
            <input
              type="text"
              placeholder={curEmp.deptName}
              onChange={handleChange}
              value={state.deptName}
              defaultValue={curEmp.deptName}
              name="deptName"
              id="deptName"
              className="form-control w-50"
            />
          </div>
          <div className="form-group">
            <label for="location">Location</label>
            <input
              type="text"
              placeholder={curEmp.location}
              onChange={handleChange}
              value={state.location}
              defaultValue={curEmp.location}
              name="location"
              id="location"
              className="form-control w-50"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary w-25 m-1">Save</button>
            <button
              onClick={() => {
                setIsUpdating(false);
              }}
              className="btn btn-primary w-25 m-1"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
