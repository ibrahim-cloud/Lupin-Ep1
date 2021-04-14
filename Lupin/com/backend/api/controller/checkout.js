const stripe = require("stripe")("sk_test_51IeLLIH7UqzTK1GWiryzjV9WzFqcCzczfj8yrvWWfKreth7c3IKEiUVORheIqtjygFB7digRJXqQOQ5norPdZRu900AqD2Kp7c");
const Order = require('../models/OrderModels');
const Product = require('../models/productModels');
const User = require('../models/userModels');


const checkout = async (req,res)=>{

    

  let error;
  let status;
  try {


    const  product = req.body.product;
    const token = req.body.token;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id

    });
    console.log(    token.card.address_line1)
    console.log(product)

    const charge = await stripe.charges.create(
      {
       
        amount: product.prix * 100,
      
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.type}`,
        shipping: {
          name: token.card.name,
          
          address: {
              
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      }
      
    
      
    );

    // console.log("Charge:", { charge });
    status = "success";



    let orderDetails = { charge };
    let ShippingAddress = orderDetails.charge.source.address_line1
    let price = (orderDetails.charge.amount/100);
    let idProduct = product._id;
    let idSeller = product.id_vendeur;

    // ------------chage product status to selled ---------------------

    // let selledProduct = await Product.findByIdAndUpdate(idProduct,{selled: true});






    // ---------------------- add new Order ---------------------------------

 

///ajouter Order

    const id_vendeur = idSeller;
    const id_achteur = req.body.id_achteur;
    const id_product = idProduct;
    const Adresse = ShippingAddress;
    const Price = price;
    

    
  


    const newOrder = new Order({id_vendeur,id_achteur,id_product,Adresse,Price});
    newOrder
    .save()
    .then(() => res.json("Order successfully added"))
    .catch((err) => res.status(400).json("Error :" + err));



        //     const newOrder = new Order({
                
        //         idProduct: idProduct,
        //         ShippingAddress: ShippingAddress,
        //         price: price,
             
        // });

        //     const saveOrder = await newOrder.save(); 


    // ---------------------- add amount to the seller ---------------------------------


        await Product.findById(id_product)
        .then((products) => { 
            products.sold = true
            products
            .save()
            .then(() => res.json(products))
    
          
          })
       
    

  } catch (error) {
    console.error("Error:", error);
    
    status = "failure";
  }

  res.json({ error, status });


}

module.exports={
    checkout
}