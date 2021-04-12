import React, { Component } from "react";
import axios from "axios";

import '../App.css';


export default class ValidUser extends Component {
   
    constructor(props) {
		super(props)

		this.state = {
      Users: [],
      errorMsg: ''
		}
	}
    handleSubmit(id){
        console.log('nice khdma me3alm'+id)
    }

	componentDidMount() {
        axios.get("http://localhost:2029/admin/user")
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
         function update(id) {
            const config ={
                headers:{
                    votretoken: localStorage.getItem('token')
                }
            }
             const data = {
                is_valid:true
             }

            axios.put("http://localhost:2029/admin/valid/"+id,data,config)
            .then(
                
                res=> {
                    console.log(res)
                    window.location.assign("http://localhost:3000/Valid")

                   
                }
            ).catch(
                err=>{
                    console.log(err);
                }
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
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Phone</th>
      <th scope="col">Statut </th>
      <th scope="col">Valid participant</th>
    </tr>
  </thead>
  <tbody id="List">
      

{Users.length ?




Users.map(User =>  <tr key={User._id}>

        
        <td>{User.full_name}</td> 
        <td>{User.email}</td>
        <td>{User.age}</td>
        <td>{User.phone}</td>
        <td>{`${User.is_valid}`}</td>
        <td><button onClick ={ ()=> update(User._id)} type="submit" className="btn btn-primary btn-block">Valid participant</button>
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