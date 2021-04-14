import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './home.css';

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
// import Home from "./components/home.component";
import choix from "./components/choixLogin";
import AdminLogin from "./components/AdminLogin";
import Gadmin from "./components/choixGadmin";
import Valid from "./components/validationUser";
import pass from "./components/password";
import AddAdmin from "./components/addAdmin";
import product from "./components/page_product";
import DashProduit from "./components/dashboardVendeur";
import AllProduit from "./components/allproduit";
import singleProduct from "./components/singleProduct";
import Order from "./components/Order";
import PrivateRoute from "./auth/PrivateRoute"
import SuperAdminRoute from "./auth/SuperAdminRoute"
import ValidOrder from "./components/valid_order";
import choixUser from "./components/ChoixUser";

import choixVendeur from "./components/ChoixVendeur";


// import validationUser from "./components/validationUser";



function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>Lupin</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
          
         
              <li className="nav-item">
                <Link className="nav-link" to={"/"} onClick={()=> localStorage.clear()} > log out</Link>
            </li>       
            </ul>
          </div>
        </div>
      </nav>


    
          <Switch>
         
       {/* <Route path="/validationUser" component={validationUser} /> */}
       <Route path="/Gadmin" component={Gadmin} />
       <Route path="/Valid" component={Valid} />
       <Route path="/pass" component={pass} />
       <Route path="/AddProduct" component={product} />
       <Route path="/dashvendeur" component={DashProduit} />
       <Route path="/All" component={AllProduit} />
       <Route path="/single/:id" component={singleProduct} />
       <Route path="/Order" component={Order} />
       <Route path="/choixVendeur" component={choixVendeur} />

       <Route path="/choixUser" component={choixUser} />
       
       <Route path="/ValidOrder" component={ValidOrder} />


          <Route path="/AddAdmin" component={AddAdmin} />
            <Route path="/AdminLogin" component={AdminLogin} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/" component={choix} /> 
          </Switch>
        </div>  
    </Router>
    

    
  );
}

export default App;