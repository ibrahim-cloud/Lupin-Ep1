
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import { Image } from 'react-bootstrap';
import toastr from 'toastr';
import "toastr/build/toastr.css";


const singleProduct = () => {
  const history = useHistory();
    const [product,setProduct] = useState('');

    
    const {id} = useParams();

    useEffect(async()=>{


    // console.log('yes he go this '   +   id)



    
        try {


            axios.get("http://localhost:2029/produit/find/"+id)
                .then(response => {
                    console.log(response)
                    // this.setState({ produits: response.data })
                    localStorage.setItem('id_vendeur',response.data.id_vendeur) 
                    // localStorage.setItem('id_product',idp) 
                    localStorage.setItem('price',response.data.prix) 
    
                    console.log(response.data)
                    setProduct(response.data);
    
    
                })
              
        
            // const response = await axios.get(`${process.env.REACT_APP_URL_API}/product/productById/${idProduct}`);

            // setProduct(response.data);

        } catch (error) {

            console.log(error);
            
        }

    
      },[])


    



      async function handleToken(token, addresses) {

       

        const response = await axios.post(
            `http://localhost:2029/checkout/checkout`,
          { token, product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {

          history.push('/')

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
        <>
<div className="p">
<div className="pop" ></div>




	

		
		
		<div className="product-card">
            <div className="badge">Hot</div>
            <div className="product-tumb">
                
            <Image src={'/image/'+ product.image} alt="bg image"  fluid />                       
            </div>
            <div className="product-details">
              <span className="product-catagory">Women,bag</span>
              <h4><a href>{product .type}</a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
              <div className="product-bottom-details">
                <div className="product-price"><small>${product .prix}</small>${product .prix}</div>
                <div className="product-links">
                  <a href><i className="fa fa-heart" /></a>
                  <a href><i className="fa fa-shopping-cart" /></a>
                
                </div>
              </div>       <StripeCheckout className="flex ml-auto text-white  bg-blue-500 hover:bg-blue-700 border-0 py-2 px-6 focus:outline-none  rounded"
                        stripeKey="pk_test_51IeLLIH7UqzTK1GWjbfo7YDqU269eL04JexCy7MNMzXRuITGLdvvmUf5c6s0iJfdD8TtXk3fyjIepDKaD9E4IS0J00YVQYp2nr"
                        name={product && product.type}
                        token={handleToken}
                        billingAddress
                        shippingAddress
                        amount={product && product.prix * 100}
                    />
            </div>
                  

               
                    
                    
               
                    </div>
        
                    <div className="pop" ></div>
          
          </div> 

        </>
     );
}
 
export default singleProduct;