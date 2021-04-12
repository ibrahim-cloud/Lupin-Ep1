import React, { Component } from "react";



export default class choix extends Component {
   
    render() {
        return (
            <div className="auth-wrapper"> 
        
            <div className="auth-inner">
            <div class="flex-container">
            <div> <a href="./sign-in">Login Users</a>   </div>
            <div > <a href="./AdminLogin">Login Admin</a></div>
          
          </div>
          </div>
          </div>
           
        );
    }
}