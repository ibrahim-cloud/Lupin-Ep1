import React, { Component } from "react";
import axios from "axios";



export default class AddAdmin extends Component {
    handleSubmit=e=>{
        e.preventDefault();

        const config ={
            headers:{
                votretoken: localStorage.getItem('token')
            }
        }
        const data = {
            full_name:this.full_name,
            phone:this.phone,
            password:this.password,
            email:this.email
            
        }
        axios.post('http://localhost:2029/admin/AddAdmin',data,config).then(
            res=> {
                console.log(res)
                window.location.assign("http://localhost:3000/AddAdmin")

               
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
                <h3>Ajouter Admin</h3>

                <div className="form-group">
                    <label>full_name</label>
                    <input type="text" className="form-control" placeholder="full_name" onChange={e=> this.full_name= e.target.value} />
                </div>

                <div className="form-group">
                    <label>phone</label>
                    <input type="text" className="form-control" placeholder="phone" onChange={e=> this.phone= e.target.value} />
                </div>

                <div className="form-group">
                    <label> password</label>
                    <input type="password" className="form-control" placeholder=" password" onChange={e=> this.password= e.target.value}/>
                </div>

                <div className="form-group">
                    <label>email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={e=> this.email= e.target.value} />
                </div>

                <button onSubmit ={this.handleSubmit} type="submit" className="btn btn-primary btn-block"> Ajouter Admin</button>
                <p className="forgot-password text-right">
                     <a href="./choixGadmin">return</a>
                </p>
            </form></div></div>
        );
    }
}