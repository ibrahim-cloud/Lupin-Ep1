import React, { Component } from "react";
import axios from "axios";

import jwt from 'jwt-decode'


export default class dashboardVendeur extends Component {
   
    constructor(props) {
		super(props)

		this.state = {
      Users: [],
      errorMsg: ''
		}
	}
	componentDidMount() {
        const id = localStorage.getItem('id')
        console.log(id)
        axios.get("http://localhost:2029/user/"+id)
			.then(response => {
				console.log(response)
				this.setState({ Users: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}
   
    render() {
        const { Users, errorMsg } = this.state;
        const token = localStorage.getItem('token')
        const is_vendeur = jwt(token).is_vendeur
        
        return (
            <>

            {is_vendeur ? (
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
                                <a href="http://localhost:3000/choixUser">return</a>

                                <table  className="table table-bordered" id="doctors" width="100%" >
                                <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Number Produits</th>
      <th scope="col">revenu</th>
      <th scope="col">type account</th>
    </tr>
  </thead>
  <tbody id="Listp">
      

{Users ?



<tr>

        
        <td>{Users.full_name}</td> 
        <td>{Users.Number_Posts}</td>
        <td>{Users.revenu}</td>
        <td>{Users.type_account}</td>
    
    
     </tr> 
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