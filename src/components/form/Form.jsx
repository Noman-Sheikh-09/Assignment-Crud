import React from "react";

export default function Form({closeForm}) {
  return (
    <div>
        <div style={{marginTop:'20px', marginLeft:'400px'}}>
            
        <input type="name" placeholder="First Name"  />
        <input type="name" placeholder="Last Name" />
        <input type="email" placeholder="Email Address" />
        {/* <button onClick={()=>closeForm(false)}>
            Cancel
        </button> */}
        {/* <button>Submit</button> */} 
      </div>
    </div>
  );
}
