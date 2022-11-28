import React, { useEffect, useState } from "react";
import { API } from './Backend';
import Navbar from "./Navbar";

export const getAllUserFalse = async () => {
    return await fetch(`${API}/getAllUserFalse`, {
        method: "GET"
    }).then(res => {
        return res.json();
    })
        .catch(err => console.log(err))
}

export const getAllUserTrue = async () => {
    return await fetch(`${API}/getAllUserTrue`, {
        method: "GET"
    }).then(res => {
        return res.json();
    })
        .catch(err => console.log(err))
}



const Admin = () => {

    const [userFalse, setuserFalse] = useState([]);
    const [userTrue, setuserTrue] = useState([]);
    const [reload, setReload] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        loadgetAllUserFalse();
        loadgetAllUserTrue();
    }, [reload]);

    const loadgetAllUserFalse = ()=>{
        getAllUserFalse().then(data => {
            if(data.error){
                setError(true);
            }
            else {
                setuserFalse(data)
            }
        }).catch(err => console.log(err))
        }
    
        const loadgetAllUserTrue = ()=>{
            getAllUserTrue().then(data => {
                if(data.error){
                    setError(true);
                }
                else {
                    setuserTrue(data)
                }
            }).catch(err => console.log(err))
            }
        
            // const users1 = () => {
            //     userFalse.map()
            // }
            
            const deleteUser = async(id)=>{
                return await fetch(`${API}/deleteUser/${id}`, {
                    method: "DELETE"
                }).then(res => {
                    setReload(true);
                    return res.json();
                })
                    .catch(err => console.log(err))
            }
            const approveUser = async(id)=>{
                return await fetch(`${API}/userapprove/${id}`, {
                    method: "PUT"
                }).then(res => {
                    setReload(true);
                    return res.json();
                })
                    .catch(err => console.log(err))
            }

        
    return(
        <div>
            <Navbar/>
            <h1 className="container justify-content-center mt-5">hello admin</h1>
            <div className="container mt-5 mb-5">
                <h2>User list for approval</h2>
                <div class="card">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
            <ul class="list-group">
                
                {
                    userFalse.map((product, index)=>{
                        {console.log(product._id)}
                        return(
                            <div key={index}>
                            <div className="container row">
                                
                            <li class="list-group-item">{product.name}</li>
                            <button  onClick={()=>{approveUser(product._id)}}>Approve User</button>
                            <button onClick={()=>{deleteUser(product._id)}}>Delete User</button>
                            </div>
                            </div>
                        )
                    })
                }
            </ul>
            </div>
            </div>
            </div>
            <div className="container mt-5 mb-5">
                <h2>User list which are approved</h2>
                <div class="card">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
            <ul class="list-group">
                
                {
                    userTrue.map((product1, index)=>{
                        return(
                            <div key={index}>
                            <div className="container row">
                            <li class="list-group-item">{product1.name}</li>
                            <button onClick={()=>{deleteUser(product1._id)}}>Delete User</button>
                            </div>
                            </div>
                        )
                    })
                }
            </ul>
            </div>
            </div>
            </div>
            <div className="container mt-5 mb-5">
                <h2>organization list that needs to approved</h2>
                <div class="card">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div className="container mt-5 mb-5">
                <h2>organization list that needs to approved</h2>
                <div class="card">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>

        </div>
    )
}

export default Admin;