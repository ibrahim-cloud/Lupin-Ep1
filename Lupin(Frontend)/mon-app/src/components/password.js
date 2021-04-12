import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
    handleSubmit=e=>{
        e.preventDefault();
        const data = {
            password:this.password
        }
        axios.put('http://localhost:2029/user/valid/'+localStorage.getItem('id'),data)
        .then(
            res=> {
               
                window.location.assign("http://localhost:3000/AddProduct")

                
            }
        ).catch(
            err=>{
                console.log(err  );
            }
        )
        console.log(data)
    }
    render() {
        return (
            <div className="auth-wrapper"> 
        
            <div className="auth-inner">
            <form  onSubmit ={this.handleSubmit}>
                <h3>Changer le mot de pass</h3>

              

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
              

            </form>
            </div>
            </div>
        );
    }
}