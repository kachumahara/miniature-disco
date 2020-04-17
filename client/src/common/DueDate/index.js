import React from "react";
import "./style.css";
import {useAuth0} from "../../utils/auth0Provider";
import {Link} from "react-router-dom";






function DueDate() {
    const {isAuthenticated, loading, loginWithPopup, logout} = useAuth0();
    // const {isAuthenticated, loading, loginWithRedirect, logout} = useAuth0();

    

    return (

       <div class="sidenav">
 <ul>
 <li id='sideLi'>Shyaboi</li>
 <li id='sideLi'>Shyaboi</li>
 <li id='sideLi'>Shyaboi</li>
 <li id='sideLi'>Shyaboi</li>

 
</ul>
 
 
</div>

 


    );
}

export default DueDate;
