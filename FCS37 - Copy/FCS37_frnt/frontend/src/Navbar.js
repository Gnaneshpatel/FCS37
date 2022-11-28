import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { API } from './Backend';


// const signoutUser = async () => {
  
//   return await fetch(`${API}/signout`, {
//       method: "GET"
//   }).then(res => {
//       return res.json();
//   })
//       .catch(err => console.log(err))
// }



export default function Navbar() {

  const [set, setSet] = useState(false);


  const signout = ()=>{
    // signoutUser();
    setSet(true);
    localStorage.clear();
    
}

const redirect = () =>{
  return <Redirect to="/" />
}

  const logged = () =>{
    if(localStorage.getItem("jwt")){
    var ans = localStorage.getItem("jwt");
  }
  else{
    return false
  }
    if(ans){
      var ans1= JSON.parse(ans);
    }
    if(ans1.user._id){
      return true;
    }
    else{
      return false;
    }
  }

  return (
    <div class="container">
  <nav class="container row navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid col-lg-3">
      <a class="navbar-brand" href="/">Patient Management system</a>
    </div>
    {!logged() && (
      <Fragment>
          <div class="container-fluid col-lg-3">
      <a class="navbar-brand" href="/signin">Sign in</a>
    </div><div class="container-fluid col-lg-3">
      <a class="navbar-brand" href="/signup">Sign up</a>
    </div>
      </Fragment>
    )}
    {logged() && (
      <div class="container-fluid col-lg-3">
  <button type="button" class="btn btn-block mb-4" onClick={signout}>Sign out</button>
  <div class="container-fluid col-lg-3">
      <a class="navbar-brand" href="/userprofile/12">Profile</a>
    </div>
    </div>
    )}
    {set && redirect()}
  </nav>
</div>
  )
}
