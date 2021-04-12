import React, { Component } from "react";
import axios from "axios";



export default class AddProduct extends Component {
    handleSubmit=e=>{
        e.preventDefault();

        const config ={
            headers:{
                votretoken: localStorage.getItem('token')
            }
        }
        const data = {
            image:this.image,
            type:this.type,
            description:this.description,
            prix:this.prix
            
        }
        axios.post('http://localhost:2029/user/AddProduct',data,config).then(
            res=> {
                alert(res.data);
                console.log(res.data)
                window.location.assign("http://localhost:3000/AddProduct")

               
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
                <h3>Ajouter Produit</h3>

                <div className="form-group">
                    <label>Image</label>
                    <input type="file" className="form-control" placeholder="Image"  onChange={e=> this.image= e.target.value} />
                </div>

                <div className="form-group">
                    <label>type</label>
                    <input type="text" className="form-control" placeholder="type" onChange={e=> this.type= e.target.value} />
                </div>

                <div className="form-group">
                    <label> description</label>
                    <input type="text" className="form-control" placeholder=" description" onChange={e=> this.description= e.target.value}/>
                </div>

                <div className="form-group">
                    <label>prix</label>
                    <input type="number" className="form-control" placeholder="Enter prix" onChange={e=> this.prix= e.target.value} />
                </div>

                <button onSubmit ={this.handleSubmit} type="submit" className="btn btn-primary btn-block"> Ajouter Produit</button>
                <p className="forgot-password text-right">
                     <a href="./choixGadmin">return</a>
                </p>
            </form></div></div>
        );
    }
}