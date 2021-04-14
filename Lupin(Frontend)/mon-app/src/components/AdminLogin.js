import React, { Component } from "react";

import axios from "axios";
export default class LoginAdmin extends Component {
    handleSubmit=e=>{
        e.preventDefault();
        const data = {
            phone:this.phone,
            password:this.password
        }
        axios.post('http://localhost:2029/admin/login',data).then(
            res=> {
                console.log(res.data.token)
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('is_admin',res.data.admin.is_admin);
                localStorage.setItem('is_super_admin',res.data.admin.is_super_admin);


                
                setTimeout(function(){window.location.assign("http://localhost:3000/Gadmin");  }, 3000);

            }
        ).catch(
            err=>{
                console.log(err);
            }
        )
        console.log(data)
    }
    render() {
        return (
            <div className="auth-wrapper"> 
        
            <div className="auth-inner">
            <form  onSubmit ={this.handleSubmit}>
                <h3>Login Admin</h3>

                <div className="form-group">
                    <label>phone address</label>
                    <input type="text" onChange={e=> this.phone= e.target.value} className="form-control" placeholder="Enter phone" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={e=> this.password= e.target.value} className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                    
                </div>

                <button onSubmit ={this.handleSubmit} type="submit" className="btn btn-primary btn-block">Submit</button>
                {/* <p className="forgot-password text-right">
                    if You don't have an account  <a href="./sign-up">sign up</a>
                </p> */}

            </form></div>
            </div>
        );
    }
}