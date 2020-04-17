import React from "react";
import "./style.css";
import { useAuth0 } from "../../utils/auth0Provider";
import PopButt from "./popup";
import { Link } from "react-router-dom";

function Navbar() {
  const { isAuthenticated, loading, loginWithPopup, logout } = useAuth0();
  // const {isAuthenticated, loading, loginWithRedirect, logout} = useAuth0();

  /* <Link className="navbar-brand" to="/">
      <img id="signInOut" src={Home} alt="home"/>
      </Link> */
  /* <li className="nav-item"> */
  /* <Link
              to="/Contact"
              className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
              >
              Contact
            </Link> */
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand mr-auto" idname="popButt">
        <PopButt />
            <div idname="signInOut" className="nav-item">
                { !isAuthenticated && !loading ? (
                    <button id="signIn" onClick={() => loginWithPopup()}>
                    Sign In</button>) : (<button id="signOut"
                    onClick={() => logout()}>Sign Out</button>)
                } 
            </div>
      </div>
        {/* <ul className="navbar-nav mr-auto"> */}
            { isAuthenticated && (
      <div idname="navbarText">

            <div className="nav-item">
                <Link to={"/"}><button>Home</button></Link>
            </div>
            <div className="nav-item">
                <Link to={"/profile"}><button>Profile</button></Link>
            </div>
            <div>
                <Link to={"/tasks/add"}><button>Add A Task</button></Link>
            </div>
        </div>
            )}

        {/* </ul> */}
    </nav>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div idname="navbarSupportedContent">
    //         <ul className="navbar-nav mr-auto">
    //             <li idname="signInOut" className="nav-item">
    //                     {
    //                     !isAuthenticated && !loading ? (
    //                         <button id="signIn" onClick={
    //                             () => loginWithPopup()
    //                         }>Sign In</button>
    //                     ) : (
    //                         <button id="signOut" onClick={
    //                             () => logout()
    //                         }>Sign Out</button>
    //                     )
    //                 } </li>
    //             <li idname='popButt'>
    //                 <PopButt />
    //             </li>
    //         </ul>
    //     </div>
    //     <div idname="navbarSupportedContent">
    //         <ul className="navbar-nav ml-auto">
    //             <li className="nav-item">
    //             { isAuthenticated && (
    //                 <div>
    //                 <Link to={"/"}><button>Home</button></Link>
    //                 <Link to={"/profile"}><button>Profile</button></Link>
    //                 <Link to={"/tasks/add"}><button>Add a Task</button></Link>
    //                 </div>
    //                 )}
    //             </li>
    //         </ul>
    //     </div>
    // </nav>
  );
}

export default Navbar;
