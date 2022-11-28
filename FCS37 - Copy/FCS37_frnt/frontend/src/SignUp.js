import React, { Fragment, useState } from "react";
import { API } from './Backend';
import Navbar from "./Navbar";
import bcrypt from 'bcryptjs';
import { Link, Redirect } from "react-router-dom";

const salt = bcrypt.genSaltSync(10)

// console.log(salt);

const signup = async (user) => {
  return await fetch(`${API}/signup`, {
      method: "POST",
      headers: {
          Accept: "applicatin/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
  })
      .then(res => { return res.json(); })
      .catch(err => console.log(err));
};



const SignUp = () =>{

  const [values, setValuses] = useState({
    name: "",
    email: "",
    password: "",
    cPassword:"",
    phoneNumber:"",
    error: "",
    role:"",
    success: false,
    didRedirect: false
  });
  
const {success , error, didRedirect } = values;


  const handleChange = name => event => {
    setValuses({ ...values, error: false, [name]: event.target.value })
  }

  const { name, email, password, cPassword, role,phoneNumber } = values;

  // const performRedirect = () => {
  //   if (didRedirect) {
  //       return <Redirect to='/signin' />   
  //   }
  // }

  

  const onSubmit = (event) => {
    console.log("called");
    event.preventDefault()
    setValuses({ ...values, error: false })
    signup(values)
      .then(data => {
        if (data.error) {
          setValuses({ ...values, error: data.error, success: false })
        } else {
          setValuses({
            ...values,
            name: "",
            email: "",
            password: "",
            cPassword:"",
            error: "",
            phoneNumber: "",
            role:"",
            success: true,
            didRedirect : true
          });
        }
      })
      .catch(err => console.log(err));
  }

  const successMsg = () => {
    return (
      
      <div className="alert alert-success"
      style={{ display: success ? "" : "none" }}
      >
        New account has been created successfuly.please<Link to="/signin">login here</Link>
      </div>
    );
  }

  const errorMsg = () => {
    return (
      <div className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  }

    return(
        <div >
          <div className="mb-5 mt-4">
        <Navbar/>
        </div>
        <div className="container">
          <div className="container">
          <h2>Sign Up Form</h2>
          </div>
        <div className="container mt-5">
            <form>
  <div class=" row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example1" class="form-control" onChange={handleChange("name")} value={name}/>
        <label class="form-label" for="form3Example1">Name</label>
        
      </div>
    </div>
    {/* <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example2" class="form-control" />
        <label class="form-label" for="form3Example2">Last name</label>
      </div>
    </div> */}
  </div>

  <div class="form-outline mb-4">
    <input type="email" id="form3Example3" class="form-control" onChange={handleChange("email")} value={email}/>
    
    <label class="form-label" for="form3Example3">Email address</label>
  </div>

  <div class="form-outline mb-4">
    <input type="number" id="form3Example3" class="form-control" onChange={handleChange("phoneNumber")} value={phoneNumber}/>
    
    <label class="form-label" for="form3Example3">Phone Number</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form3Example4" class="form-control" onChange={handleChange("password")} value={password}/>
    
    <label class="form-label" for="form3Example4">Password</label> 
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form3Example4" class="form-control" onChange={handleChange("cPassword")} value={cPassword} />
    
    <label class="form-label" for="form3Example4">Confirm password</label> 
  </div>

  <select class="form-select mb-5" aria-label="Default select example" onChange={handleChange("role")} value={role}>
  <option selected>select type of user</option>
  <option value="patient">Patient</option>
  <option value="Health professional">Health professional</option>

</select>


  <button type="submit" class="btn btn-block mb-4" onClick={onSubmit}>Sign up</button>
    </form>
        </div>
        </div> 

      {/* <div className="alert alert-success"
      >
          <Link to="/signin">login here</Link>
      </div>  */}
        
        {successMsg()}
        {errorMsg()}
        {/* {performRedirect()} */}
        </div>
    )
}

export default SignUp;