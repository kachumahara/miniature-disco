import React from "react";
import "./style.css";
import {useAuth0} from "../../utils/auth0Provider";
import PopButt from "./popup";


function Navbar() {
    const {isAuthenticated, loading, loginWithPopup, logout} = useAuth0();

    

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <Link className="navbar-brand" to="/">
      <img id="signInOut" src={Home} alt="home"/>
      </Link> */}
            <div>
                <ul className="navbar-nav">

                    {/* <li className="nav-item"> */}
                        {/* <Link
              to="/Contact"
              className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
              >
              Contact
            </Link> */}
                        <li id="signInOut" className="nav-item">
                            {
                            !isAuthenticated && !loading ? (
                                <button id="signIn" onClick={
                                    () => loginWithPopup()
                                }>Sign In</button>
                            ) : (
                                <button id="signOut" onClick={
                                    () => logout()
                                }>Sign Out</button>
                            )
                        } </li>
                    {/* </li> */}
                    <li id='popButt'>
                        <PopButt />
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;
