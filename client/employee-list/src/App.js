import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
const App = () => {
  const [listEmployees, setListEmployees] = useState([]);
  //id of the employee we need to update
  const [isUpdating, setIsUpdating] = useState({});

  //function to fetch all employees from database -- use useEffect hook
  useEffect(() => {
    const getEmployeeList = async () => {
      try {
        const res = await axios.get("http://localhost:5500/api/getEmployees");
        setListEmployees(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getEmployeeList();
  }, []);

  return isUpdating.state === true ? (
    <Form setIsUpdating curEmp={isUpdating.curEmp}/>
  ) : (
    <>
      <div className="container">
        <h2 className="text-center mt-1 mb-3">Employees List</h2>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Department Name</th>
              <th scope="col">Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listEmployees.map((emp) => {
              return (
                <tr>
                  <th scope="row" className="text-center">{emp.empId}</th>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.deptName}</td>
                  <td>{emp.location}</td>
                  <td className="text-center">
                  <button className="btn btn-primary"
                    onClick={() => {
                      setIsUpdating({state:true,
                      curEmp:emp});
                    }}
                  >
                    Edit
                  </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
