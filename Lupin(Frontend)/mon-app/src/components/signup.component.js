import React, { Component } from "react";
import axios from "axios";

import '../App.css';


export default class SignUp extends Component {
    handleSubmit=e=>{
        e.preventDefault();
        const data = {
            full_name:this.first_name,
            age:this.age,
            email:this.email,
            password:this.password,
            phone:this.phone,
            is_vendeur: this.vendeur
        }
        axios.post('http://localhost:2029/user/signup',data).then(
            res=> {
                console.log(res)
                window.location.assign("http://localhost:3000/sign-in")
               
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
            <form onSubmit ={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={e=> this.first_name= e.target.value} />
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" placeholder="Phone" onChange={e=> this.phone= e.target.value} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={e=> this.email= e.target.value}/>
                </div>
                <div className="form-group">
                    <label>age</label>
                    <input type="number" className="form-control" placeholder="Enter age" onChange={e=> this.age= e.target.value}/>
                </div>                   
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={e=> this.password= e.target.value} />
                </div>
      <div className="form-group">
                <div className="form-check">
  <input className="form-check-input" type="checkbox"  onChange={e=> this.vendeur= e.target.value=true} id="flexCheckDefault"/>
  <label className="form-check-label" >
  vous êtes vendeur ?
  </label>
</div>
                </div>
                <button onSubmit ={this.handleSubmit} type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="./sign-in">sign in?</a>
                </p>
            </form>
            </div>
            </div>
        );
    }
}