// import React, { Component } from "react";
// import axios from "axios";

// export default class Order extends Component {
//     handleSubmit=e=>{
//         e.preventDefault();
//         const data = {
//             Adresse:this.Adresse,
//             id_vendeur: localStorage.getItem('id_vendeur'),
//             id_achteur :localStorage.getItem('id'),
//             id_product:localStorage.getItem('id_product'),
//             Price: localStorage.getItem('price') 

//         }
//         axios.post('http://localhost:2029/produit/PutProduct/'+localStorage.getItem('id_product'))
//         .then(

//             res=> {
//                 console.log(res)
                               
//                         // window.location.assign("http://localhost:3000")
//                         // localStorage.setItem('id',res.data.User._id);
//                         // console.log()
                       

                    
//                 }
//         ).catch(
//             err=>{
//                 console.log(err  );
//             }
//         )



//         axios.post('http://localhost:2029/produit/addOrder',data).then(


//             res=> {
//                 console.log(res)
                               
//                         window.location.assign("http://localhost:3000/All")
//                         // localStorage.setItem('id_order',);
//                         // console.log()
                       

                    
//                 }
             
               
                
            
//         ).catch(
//             err=>{
//                 console.log(err  );
//             }
//         )
//         console.log(data)
//     }
//     render() {
//         return (
//             <div className="auth-wrapper"> 
        
//             <div className="auth-inner">
//             <form  onSubmit ={this.handleSubmit}>
//                 <h3>send Order</h3>

//                 <div className="form-group">
//                     <label> address</label>
//                     <input type="text" onChange={e=> this.Adresse= e.target.value} className="form-control" placeholder="Enter Adresse" />
//                 </div>
//                 <button onSubmit ={this.handleSubmit} type="submit" className="btn btn-primary btn-block">Submit</button>
          

//             </form>
//             </div>
//             </div>
//         );
//     }
// }









