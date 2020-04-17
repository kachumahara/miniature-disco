import React from "react";
import {useAuth0} from "../../utils/auth0Provider";
import DragNDrop from "../../components/DragNDrop/index";

function Home() {
  const {isAuthenticated} = useAuth0();
  return (
    <div>
      <h1>Welcome Home!</h1>
      {isAuthenticated && (
        <DragNDrop />
      )}
    </div>
        )
      }

export default Home;
