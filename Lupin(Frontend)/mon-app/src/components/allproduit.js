import React, { Component } from "react";
import axios from "axios";
import {Link } from "react-router-dom";




export default class AllProduit extends Component {
   
    constructor(props) {
		super(props)

		this.state = {
      produits: [],
      errorMsg: ''
		}
	}

    componentDidMount() {
        axios.get("http://localhost:2029/produit/All")
			.then(response => {
				console.log(response)
				this.setState({ produits: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}

   
    render() {
        const { produits, errorMsg } = this.state;

        return (
          


            <div className="container">

            <div className="pop"></div>
            <div className="row">
           {produits.length ?
           
           produits.map($produit =>  
           
              
               
           
        
                 <div className="col-xs-12 col-sm-6 col-md-4">   
                        <Link to={"/single/"+ $produit._id}>

                   <article className="card-wrapper">
                     <div className="image-holder">
                       <a href="#" className="image-holder__link" />
                       <div className="image-liquid image-holder--original" style={{backgroundImage: 'url("http://www.publicdomainpictures.net/pictures/20000/nahled/red-shoes-isolated.jpg")'}}>
                       </div>
                     </div>
                     <div className="product-description">
                       {/* title */}
                       <h1 className="product-description__title">
                         <a href="#">						
                           Adidas Originals
                         </a>
                       </h1>
                       {/* category and price */}
                       <div className="row">
                         <div className="col-sm-8 product-description__category secondary-text">
                           Men's running shirt
                         </div>
                         <div className="col-sm-4 product-description__price text-right">
                           € {$produit.prix}
                         </div>
                       </div>  
                     </div>
                   </article>
                    </Link>  
                 </div>
             
              
           
                   
                   
                   
                   
           
           
                
           
                   
                 
               
           
               
               )
              
           : null}	
           {errorMsg ? <div>{errorMsg}</div> : null}
           
            </div>
             </div>
           

	


    
        );
    }
}