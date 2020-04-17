import React, { Fragment } from "react";
import { useAuth0 } from "../../utils/auth0Provider";
import "./style.css";
import logo from "../../components/images/logo6.png";

const Splash = () => {
  const { isAuthenticated, loading, loginWithPopup, logout, user } = useAuth0();
  if (loading || !user) {
    return (
      <div id="main">
        <button
          onClick={() => loginWithPopup()}
          class="glow-on-hover"
          type="button"
        >
          <img id="logo" src={logo} alt="logo" />
        </button>
        ;
      </div>
    );
  }

  if (isAuthenticated === true) {
    alert("nice");
  }

  return <div id="nothing"></div>;
};

export default Splash;
