import React, { useEffect, useState } from "react";
import { API } from "./Backend";
import Navbar from "./Navbar";

const getUserId=()=>{
    const ans = localStorage.getItem("jwt");
    const ans1= JSON.parse(ans);
    console.log(ans1);
    return ans1.user._id;
}

const getUser = async () => {
    const userId=getUserId();
    console.log(userId);
    return await fetch(`${API}/user/${userId}`, {
        method: "GET"
    }).then(res => {
        return res.json();
    })
        .catch(err => console.log(err))
}

// 636b3656c4b4e193ea7cd31f
const UserProfile = ()=>{

    const [user, setUser] = useState({});
    const [error, setError] = useState(false);

    useEffect(()=>{
        loadUser();
    },[])

    const loadUser=()=>{
        getUser().then((data)=>{
            if(data.error){
                setError(true);
                console.log("first")
            }
            else{
                setUser(data);
                console.log("1")
            }
        }).catch(error => console.log(error))
    }

    console.log(user);

    // console.log(user[0]);


    // const params = useParams()
    // console.log(params);

    return(
        <div class="container rounded bg-white mt-5 mb-5">
            <Navbar/>
            
        <div class="row">
            <div class="col-md-3 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">{user[0]?.name}</span><span class="text-black-50">{user[0]?.email}</span><span> </span></div>
            </div>
            <div class="col-md-5 border-right">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right">Profile Settings</h4>
                    </div>
                    <div class="row mt-2">
                    </div>
                    <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Name : </label>{user[0]?.name}</div>

                        <div class="col-md-12"><label class="labels">Mobile Number : </label>{user[0]?.phoneNumber}</div>
                        <div class="col-md-12"><label class="labels">Email ID : </label>{user[0]?.email}</div>                        
                    </div>
                    
                    <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center experience"><span>Edit Medical history</span></div><br/>
                    <div class="col-md-12"><label class="labels">Documents</label><input type="text" class="form-control" placeholder="documents to be uploded" value=""/></div> <br/>
                    <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""/></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default UserProfile;