
import React, { Component } from "react";

import '../test2.css';


export default class home extends Component {
   
    render() {
        return (

          
          
            <div className="container">
              <div className="pop"></div>
            <div className="row">

    
           
              <div className="col-xs-12 col-sm-6 col-md-4">
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
                        € 499
                      </div>
                    </div>
                    {/* divider */}
                    <hr />
                    {/* sizes */}
                    
                    {/* colors */}
                    <div className="color-wrapper">
                      <b>Colors</b>
                      <br />
                      <ul className="list-inline color-list">
                        <li className="color-list__item color-list__item--red" />
                        <li className="color-list__item color-list__item--blue" />
                        <li className="color-list__item color-list__item--green" />
                        <li className="color-list__item color-list__item--orange" />
                        <li className="color-list__item color-list__item--purple" />
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        );
    }
}















// export default class AllProduit extends Component {
   
//     constructor(props) {
// 		super(props)

// 		this.state = {
//       produits: [],
//       errorMsg: ''
// 		}
// 	}

//     componentDidMount() {
//         axios.get("http://localhost:2029/produit/All")
// 			.then(response => {
// 				console.log(response)
// 				this.setState({ produits: response.data })
// 			})
// 			.catch(error => {
//         console.log(error)
//         this.setState({errorMsg: 'Error retrieving data'})
// 			})
// 	}

   
//     render() {
//         const { produits, errorMsg } = this.state;

//         return (
          



           

	


// <div class="products">

// {produits.length ?

// produits.map($produit =>  

	
// 		<div class="product-card">
//             <Link to={"/single/"+ $produit._id}>
// 			<div class="product-image">
//             <img src={$produit.image}></img>
// 			</div>
// 			<div class="product-info">
// 				<h6>{$produit.prix}</h6>
//                 <button> read more</button>
// 			</div>
//             </Link>
// 		</div>
		
		
		


     

        
      
    

    
//     )
   
// : null}	
// {errorMsg ? <div>{errorMsg}</div> : null}

//              </div>         
//         );
//     }
// }