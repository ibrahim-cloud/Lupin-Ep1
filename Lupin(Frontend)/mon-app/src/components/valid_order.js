import React, { Component } from "react";
import axios from "axios";

import '../App.css';


export default class ValidUser extends Component {
   
    constructor(props) {
		super(props)

		this.state = {
      order: [],
      errorMsg: ''
		}
	}
    handleSubmit(id){
        console.log('nice khdma me3alm'+id)
    }

	componentDidMount() {

        
        axios.get("http://localhost:2029/admin/order")
			.then(response => {
				console.log(response)
				this.setState({ order: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})








            
	}
   
    render() {
         const { order, errorMsg } = this.state;
         function update(id,id_vendeur,price) {
            const config ={
                headers:{
                    votretoken: localStorage.getItem('token')
                }
                
            }
// console.log(id_vendeur)

            const data1 = {
               revenu:price
            }
            console.log(data1)
            axios.patch("http://localhost:2029/admin/putR/"+id_vendeur,data1,config)
            .then(
                
                res=> {
                    console.log(res)
                }
            ) 
 
            .catch(
                err=>{
                    console.log(err);
                }
            )


            //////Valid 
              
            const data = {
                 
             }
            axios.patch("http://localhost:2029/admin/Validorder/"+id,data,config)
            .then(res=> {console.log(res)}
            )  
            .catch(
                err=>{console.log(err); }
            )
                 
            
        }
        return (
            <div className="auth-wrapper"> 
        
            <div className="auth-inner1">
            <div id="layoutSidenav_content"> 
            <main>
                <div className="container-fluid">
                   
                    <div className="card mb-4">
                       
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">
                          
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                 
                                <table  className="table table-bordered" id="doctors" width="100%" >
                                <thead>
    <tr>
      <th scope="col">Id product</th>
      <th scope="col">Adresse</th>
     
      <th scope="col">Valid Order</th>
    </tr>
  </thead>
  <tbody id="List">
      

{order.length ?




order.map(order =>  <tr key={order._id}>

<td>{order.id_product}</td>
<td>{order.id_product}</td>
      <td>{order.id_vendeur}</td>
        <td><button onClick ={ ()=> update(order._id,order.id_vendeur,order.Price)} type="submit" className="btn btn-primary btn-block">Valid Order</button>
</td>
    
    
     </tr> )
: null}
{errorMsg ? <div>{errorMsg}</div> : null}

   </tbody>
                                 </table>
                             </div>
                         </div>
                     </div>
                 </div>
                

             </div>
             </main>
             </div>
             </div>
             </div>
        );
    }
}