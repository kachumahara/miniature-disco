import React, { Fragment } from "react";
import { useAuth0 } from "../../utils/auth0Provider";
import './style.css';


const Splash = () => {
  const {isAuthenticated, loading, loginWithPopup, logout, user} = useAuth0();
  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
        <div>
        <div id="signInOut" className="nav-item">
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
                        } </div>
                        </div>
    </Fragment>
  );
};

export default Splash;