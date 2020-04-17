import React from "react";
import "./style.css";
import { useAuth0 } from "../../utils/auth0Provider";
import { Link, Router, Route, Switch } from "react-router-dom";
import PopButt from "./popup"
import PopButt2 from "./popup2";;

// import Profile from "../src/views/Profile/Profile";

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

            {/* <li id="popButt2">
              <PopButt2 />
            </li> */}
            <li>
              <Link to={"/tasks/add"}><button>Add Task</button></Link>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
