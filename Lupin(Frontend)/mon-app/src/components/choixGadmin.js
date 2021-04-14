import React, { Component } from "react";

export default class choixGAdmin extends Component {
   
    render() {
        return (
            <div className="auth-wrapper"> 
        
            <div className="auth-inner">
            <div class="flex-container">
           
            <div >  <a   style={{marginLeft: '-22PX'}} href="./AddAdmin" >ajouter admin </a></div>
            <div>  <a style={{marginLeft: '-22PX'}} href="./Valid" >validation participant</a></div>
            <div>  <a style={{marginLeft: '-28PX'}} href="./ValidOrder" >validation Order</a></div>

          </div>
           </div>
           </div>
        );
    }
}