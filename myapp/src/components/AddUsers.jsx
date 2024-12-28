import axios from 'axios';
import React, { useState,useEffect } from 'react';

const AddUser = () => {
  const [Name, Setname] = useState('');
  const [Email, Setemail] = useState('');
  const [Mobile, Setmobile] = useState('');
  const [Password, Setpassword] = useState('');
  const [Role, Setrole] = useState('');
  const [submittedData, setSubmittedData] = useState(null); // For storing submitted data
  const [listData , setListData] = useState([]);
  const usermydata =async ()=>{
    const UserData = await axios.get(`http://localhost:7000/users`);
    setListData(UserData.data.response);
  //  console.log('----------mydata>>>>>>>>>',UserData.data.response);
    console.log('----------mydata>>>>>>>>>',listData);

  };
  useEffect(
    ()=>{
      const usermydata =async ()=>{
        const UserData = await axios.get(`http://localhost:7000/users`);
        setListData(UserData.data.response);
      //  console.log('----------mydata>>>>>>>>>',UserData.data.response);
        console.log('----------mydata>>>>>>>>>',listData);
  
      };
      usermydata();
      
    },[]
  );
  const submitData = async () => {
    // Create a new FormData object
    const formData = new FormData();

    // Append form data to the FormData object
    formData.append("name", Name);
    formData.append("email", Email);
    formData.append("mobile", Mobile);
    formData.append("password", Password);
    formData.append("roleId", Role);

    try {
      // Send the POST request with FormData
      const response = await axios.post('http://localhost:7000/register_user', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',  // Ensure content type is multipart/form-data
        },
      });

      // Log the response to check if it's successful
      // console.log('Response from backend:', response.data);
      if (response.data.success) {
        alert(response.data.message);
        usermydata();
        // Save the submitted data for table display
      
      //  console.log(listData.response);
        setSubmittedData({
          name: Name,
          email: Email,
          mobile: Mobile,
          role: Role === '1' ? 'Admin' : Role === '2' ? 'User' : 'Guest'
        });
      } else {
        alert(response.data.message);
        
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

// const usermydata =async ()=>{
//   const UserData = await axios.get(`http://localhost:7000/users`);
//   setListData(UserData.data.response);
  
  
// }



// console.log(listData.response);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Registration Form</h2>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" onInput={(e) => Setname(e.target.value)} id="name" placeholder="Enter your name" required />
      </div>

      {/* Email Field */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" onInput={(e) => Setemail(e.target.value)} id="email" placeholder="Enter your email" required />
      </div>

      {/* Mobile Field */}
      <div className="mb-3">
        <label htmlFor="mobile" className="form-label">Mobile Number</label>
        <input type="tel" className="form-control" id="mobile" onInput={(e) => { Setmobile(e.target.value) }} placeholder="Enter your mobile number" required />
      </div>

      {/* Password Field */}
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" onInput={(e) => { Setpassword(e.target.value) }} id="password" placeholder="Enter your password" required />
      </div>

      {/* Role ID Field */}
      <div className="mb-3">
        <label htmlFor="roleid" className="form-label">Role ID</label>
        <select className="form-select" id="roleid" onChange={(e) => { Setrole(e.target.value) }} required>
          <option value="">Select Role</option>
          <option value="1">Admin</option>
          <option value="2">User</option>
          <option value="3">Guest</option>
        </select>
      </div>

      <div className="text-center">
        <button type="button" className="btn btn-primary" onClick={submitData}>Submit</button>
      </div>

      {/* Table to display the submitted data */}
 
        <div className="mt-5">
          <h4 className="text-center">Submitted User Data</h4>
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
            
   {listData.map((data, index )=>
    
    {
      return(
        <tr key={index}>
          <td>{data?.name}</td>
          <td>{data?.email}</td>
          <td>{data?.mobile}</td>
          <td>{data?.roleId}</td>


        </tr>)
    })}       
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
            
          
      
              
            </tbody>
          </table>
        </div>
    
    </div>
  );
};

export default AddUser;
