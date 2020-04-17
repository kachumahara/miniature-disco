import React from "react";
import "./style.css";
import {useAuth0} from "../../utils/auth0Provider";
import {Link} from "react-router-dom";
function Navbar() {
    const {isAuthenticated, loading, loginWithPopup, logout} = useAuth0();
    // const {isAuthenticated, loading, loginWithRedirect, logout} = useAuth0();

    

    return (

       <div class="sidenav">
 <ul>
 <li>Shyaboi</li>
 <li>Shyaboi</li>
 <li>Shyaboi</li>
 <li>Shyaboi</li>
 
</ul>
 
 
</div>

 


    );
}

export default Navbar;
