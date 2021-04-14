import React, { Component } from "react";
import jwt from 'jwt-decode'


export default class choixGAdmin extends Component {
   
    render() {
        const token = localStorage.getItem('token')
        const is_vendeur = jwt(token).is_vendeur
        return (
            <>

            {is_vendeur ? (
            <div className="auth-wrapper"> 
        
            <div className="auth-inner">
            <div class="flex-container">
           
            <div >  <a   style={{marginLeft: '-22PX'}} href="./AddProduct" >ajouter Produits </a></div>
            <div>  <a style={{marginLeft: '-22PX'}} href="./dashvendeur" > DashBoard</a></div>

          </div>
           </div>
           </div>
            ) : (
                <div>
            <div className="pop"></div>
                
            <h1  style={{textAlign: 'Center'},{marginLeft:'773px'}}>Error 403</h1>
                </div>
            )}
            </>
        );
    }
}