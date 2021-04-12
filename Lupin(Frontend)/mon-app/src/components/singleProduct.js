import React, { Component } from "react";
import axios from "axios";

import {Link } from "react-router-dom";

import '../App.css';


import StripeCheckout from "react-stripe-checkout";

import toastr from 'toastr';






export default class SingleProduit extends Component {


   
    constructor(props) {
		super(props)

		this.state = {
      produits: [],
      
      errorMsg: ''
		}
	}

    
 
    componentDidMount() {
     const idp =   this.props.match.params.id
        axios.get("http://localhost:2029/produit/find/"+idp)
			.then(response => {
				console.log(response)
				this.setState({ produits: response.data })
                localStorage.setItem('id_vendeur',response.data.id_vendeur) 
                localStorage.setItem('id_product',idp) 
                localStorage.setItem('price',response.data.prix) 

                console.log(response.data.id_vendeur)


			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}






   
    render() {



        const { produits, errorMsg } = this.state;

        
        function handleToken(token) {

       

            const response =  axios.post(`http://localhost:2029/checkout/checkout`,{ token, produits });
            const  status  = response.data;
            console.log("Response:", response);
            if (status === "success") {
    
              
    
              toastr.info('Success! Check email for details', {
                positionClass: "toast-top-left",
            })
    
            } else {
    
    
              toastr.warning('Something went wrong', {
                positionClass: "toast-top-left",
            })
            }
          }

        return (
          




	



<div className="p">
<div className="pop" ></div>
{produits ?



	
		// <div className="product-card">
        //     <Link to={"/Order"}>
		// 	<div className="product-image">
        //     <img src={produits.image}></img>
		// 	</div>
		// 	<div className="product-info">
        //     <h6>{produits.type}</h6>
		// 		<h6>{produits.prix}</h6>
		// 	</div></Link>
		// </div>
		
		
		<div className="product-card">
            <div className="badge">Hot</div>
            <div className="product-tumb">
              <img src="https://i.imgur.com/xdbHo4E.png" alt />
            </div>
            <div className="product-details">
              <span className="product-catagory">Women,bag</span>
              <h4><a href>{produits.type}</a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
              <div className="product-bottom-details">
                <div className="product-price"><small>${produits.prix}</small>${produits.prix}</div>
                <div className="product-links">
                  <a href><i className="fa fa-heart" /></a>
                  <a href><i className="fa fa-shopping-cart" /></a>
                
                </div>
              </div>  <button  type="submit" className="btn btn-primary btn-block">send Order</button>
            </div>


            <StripeCheckout className="flex ml-auto text-white  bg-blue-500 hover:bg-blue-700 border-0 py-2 px-6 focus:outline-none  rounded"
                        stripeKey="pk_test_51IeLLIH7UqzTK1GWjbfo7YDqU269eL04JexCy7MNMzXRuITGLdvvmUf5c6s0iJfdD8TtXk3fyjIepDKaD9E4IS0J00YVQYp2nr"
                        name={produits && produits.type}
                        token={handleToken}
                        billingAddress
                        shippingAddress
                        amount={produits && produits.prix * 100}
                    />
          
          </div>


     

        
      
    

    
    
   
: null}	
{errorMsg ? <div>{errorMsg}</div> : null}

<div className="pop" ></div>
          
          </div>        
        );
    }
}