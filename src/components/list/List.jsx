import React from "react";

export default function List({ employee, index ,delHandler,}) {
  return (
    <div>
      <table
        style={{
          marginLeft: "200px",
          marginTop: "20px",
          borderBottom: "1px solid black",
        }}
      >
        <tr>
          <td style={{ paddingRight: "200px" }}>{employee.fname}</td>
          <td style={{ paddingRight: "200px" }}>{employee.lname}</td>
          <td style={{ paddingRight: "100px" }}>{employee.email}</td>
          <td>
            <button
              style={{
                backgroundColor: "DodgerBlue",
                color: "white",
                border: "1px solid DodgerBlue",
                borderRadius: "2px",
                padding: "5px 7px",
               
              }}
              onClick={()=>delHandler(index)}
            >
              Delete
            </button>
            <button
              style={{
                backgroundColor: "Tomato",
                color: "white",
                border: "1px solid Tomato",
                borderRadius: "2px",
                padding: "5px 7px",
              }}
            >
              Update
            </button>
            <button
              style={{
                backgroundColor: "DodgerBlue",
                color: "white",
                border: "1px solid DodgerBlue",
                borderRadius: "2px",
                padding: "5px 7px",
              }}
            >
              View
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
