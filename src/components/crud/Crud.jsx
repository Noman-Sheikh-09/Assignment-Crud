import React from "react";
import List from "../list/List";
import { Data } from "../data/Data";
// import Form from "../form/Form";
import { useState } from "react";
export default function Crud() {
  const [add, setAdd] = useState(false);
  const [employee, setEmployee] = useState(Data);
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);

  const delHandler = (index) => {
    let newEmployee = employee.filter((employee, i) => {
      if (i !== index) {
        return employee;
      }
    });

    setEmployee([...newEmployee]);
  };
  const updateHandler = (employee) => {
    console.log(employee); 

    setFirstName(employee.fname);
    setLastName(employee.lname);
    setEmail(employee.email);
    setFlag(true);
  };

  const ctaHandler = () => {
    setError("");
    if (fname != "" && lname != "" && email != "") {
      let emp = {
        fname,
        lname,
        email,
      };
      console.log(emp);
      setEmployee([...employee, emp]);
      setFirstName("");
      setLastName("");
      setEmail("");
    } else {
      setError("Please Fill All Blanks");
    }
  };

const ctaUpdateHandler= ()=>{
  setError("");
  if (fname != "" && lname != "" && email != "") {
    let emp = {
      fname,
      lname,
      email,
    };
    



    setEmployee([...employee, emp]);
    setFirstName("");
    setLastName("");
    setEmail("");
    flag(false)
  } else {
    setError("Please Fill All Blanks");
  }


}


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Employees List</h1>
      <button
        style={{
          backgroundColor: "DodgerBlue",
          color: "white",
          padding: "5px 10px",
          border: "1px solid DodgerBlue",
          borderRadius: "3px",
          marginLeft: "20px",
        }}
        onClick={() => setAdd(true)}
      >
        Add Employee
      </button>
      {/* {employee && <Form closeForm={setEmployee} />} */}
      <div style={{ marginTop: "20px", marginLeft: "360px" }}>
        <input
          type="name"
          placeholder="First Name"
          value={fname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="name"
          placeholder="Last Name"
          value={lname}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* <button onClick={()=>closeForm(false)}>
                Cancel
            </button> */}
        {/* <button>Submit</button> */}
      </div>
      {
      flag ?
      <button
        style={{
          backgroundColor: "tomato",
          color: "white",
          padding: "5px 10px",
          border: "1px solid tomato",
          borderRadius: "3px",
          textAlign: "center",
          marginLeft: "600px",
          marginTop: "10px",
        }}
        onClick={ctaHandler}
      >
        Update
      </button>
       : 
       <button
        style={{
          backgroundColor: "tomato",
          color: "white",
          padding: "5px 10px",
          border: "1px solid tomato",
          borderRadius: "3px",
          textAlign: "center",
          marginLeft: "600px",
          marginTop: "10px",
        }}
        onClick={ctaUpdateHandler}
      >
        Submit
      </button>
}

      {/* <button
        style={{
          backgroundColor: "tomato",
          color: "white",
          padding: "5px 10px",
          border: "1px solid tomato",
          borderRadius: "3px",
          textAlign: "center",
          marginLeft: "600px",
          marginTop: "10px",
        }}
        onClick={ctaHandler}
      >
        Submit
      </button> */}
      <p
        style={{
          backgroundColor: "white",
          color: "red",
          marginTop: "5px",
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        {error}
      </p>
      <table
        style={{
          marginLeft: "200px",
          marginTop: "50px",
          borderBottom: "1px solid black",
        }}
      >
        <tr>
          <th style={{ paddingRight: "100px" }}>Employee First Name</th>
          <th style={{ paddingRight: "100px" }}>Employee Last Name</th>
          <th style={{ paddingRight: "100px" }}>Employee Email</th>
          <th style={{ paddingRight: "150px" }}>Actions</th>
        </tr>
      </table>
      {employee.map((item, index) => {
        return (
          <List
            employee={item}
            index={index}
            delHandler={delHandler}
            updateHandler={updateHandler}
          />
        );
      })}
    </div>
  );
}
