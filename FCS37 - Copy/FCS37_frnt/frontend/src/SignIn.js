import React,{useEffect, useState} from "react";
import Navbar from "./Navbar";
import { API } from './Backend';
import { Redirect} from 'react-router-dom';



const signin = async (user) => {
  return await fetch(`${API}/signin`, {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
  })
      .then(res => { return res.json() })
      .catch(err => console.log(err));
};

const isAuthenticated = () => {
  if (typeof window == "undefined") {
      return false
  }
  if (localStorage.getItem("jwt")) {
    
      return JSON.parse(localStorage.getItem("jwt"))
  } else {
      return false
  }
};

const SignIn = ()=>{

  // const [user1, setUser1] = useState();

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
});

// useEffect(()=>{

// },[user1])

const { email, password, error, loading, didRedirect } = values;

const { user } = isAuthenticated();

const handleChange = name => event => {
  setValues({ ...values, error: false, [name]: event.target.value })
}

const performRedirect = (id) => {
  if (didRedirect) {
      if (user && user.role === "admin") {
          return <Redirect to='/admin' />
      } else {
          return <Redirect to='/userprofile/12' />
      }
  }
  if (isAuthenticated()) {
      return <Redirect to="/" />
  }
}

const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
      localStorage.setItem("jwt", JSON.stringify(data))

      next();
  }
};


const onSubmit = event => {
  event.preventDefault()
  setValues({ ...values, error: false, loading: true })
  signin(values).then(data => {
          if (data.error) {
              setValues({ ...values, error: data.error, loading: false })
          } 
          else {
              authenticate(data, () => {
                  setValues({ ...values, didRedirect: true })
              })
          }
      })
      .catch(error => console.log(error));
      
}
    return(
      
    <div className="container mt-5">
      <div className="mb-5 mt-4">
      <Navbar/>
      </div>
      <div className="container mb-5">
        <h2>Sign In Form</h2>
      </div>
    <form>
  
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" onChange={handleChange("email")} value={email}/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" onChange={handleChange("password")} value={password} />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  
  {/* <div class="mb-4 ">

    <div class="container">
     
      <a href="#!">Forgot password?</a>
    </div>
  </div> */}

 
  <button type="button" class="btn btn-block mb-4" onClick={onSubmit}>Sign in</button>

</form>
{performRedirect()}
</div>
    )
}

export default SignIn;