import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";

export const Edit = () => {
    const { store, actions } = useContext(Context)
    const {id}= useParams()
    const [data,setData]= useState({name:"",email:"",phone:"",address:""})
    const edit= (e)=>{
        e.preventDefault()
        actions.editContacts(id,data)
    }

    const input =(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={input} name="name" value={data.name}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={input} name="phone" value={data.phone}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={input} name="email" value={data.email}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"onChange={input} name="address" value={data.address}/>
                </div>

                <button type="submit" className="btn btn-primary" onClick={edit}>Submit</button>
            </form>
        </div>
    )





}