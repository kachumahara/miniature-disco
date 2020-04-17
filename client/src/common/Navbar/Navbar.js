import React from "react";
import "./style.css";
import { useAuth0 } from "../../utils/auth0Provider";
import PopButt from "./popup";
import { Link } from "react-router-dom";

function Navbar() {
  const { isAuthenticated, loading, loginWithPopup, logout } = useAuth0();
  // const {isAuthenticated, loading, loginWithRedirect, logout} = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li id="signInOut" className="nav-item">
            {!isAuthenticated && !loading ? (
              <button onClick={() => loginWithPopup()} class="btn-liquid">
                <span class="inner">Liquid button ?</span>>Sign In
              </button>
            ) : (
              <button id="signOut" onClick={() => logout()}>
                Sign Out
              </button>
            )}{" "}
          </li>

          <li id="popButt">
            <PopButt />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
