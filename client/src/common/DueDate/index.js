import React from "react";
import "./style.css";
import {useAuth0} from "../../utils/auth0Provider";
import {Link} from "react-router-dom";
import API from "../../utils/API";

var axios = require("axios");



function DueDate() {
    const {isAuthenticated, loading, loginWithPopup, logout} = useAuth0();
    // const {isAuthenticated, loading, loginWithRedirect, logout} = useAuth0();

    

    return (

       <div className="sidenav">
 <ul>
 <li id='sideLi'><p>Shyaboi</p><p>10/24/3030</p></li>
 <li id='sideLi'><p>Shyaboi</p><p>10/24/3030</p></li>
 <li id='sideLi'><p>Shyaboi</p><p>10/24/3030</p></li>
 <li id='sideLi'><p>Shyaboi</p><p>10/24/3030</p></li>
 <li id='sideLi'><p>Shyaboi</p><p>10/24/3030</p></li>
 <li id='sideLi'><p>Shyaboi</p><p>10/24/3030</p></li>
 <li id='sideLi'><p>Shyaboi</p><p>10/24/3030</p></li>
 <li id='sideLi'><p>Shyaboi</p><p>10/24/3030</p></li>


 
</ul>
 
 
</div>

 


    );
}

export default DueDate;
