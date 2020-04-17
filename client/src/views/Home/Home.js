import React from "react";
import { useAuth0 } from "../../utils/auth0Provider";
import { Link } from "react-router-dom";

function Home() {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div>
      <h1>Welcome Home!</h1>
      { isAuthenticated && (
        <div>
        <Link to={"/profile"}><button>Profile</button></Link>
        <Link to={"/tasks/add"}><button>Add a Task</button></Link>
        </div>
      )}
    </div>
        )
      }
      //  {isAuthenticated && <p>{JSON.stringify(user, null, 2)}</p>}
      // <div><Link to={"/tasks/add"}>Add a Task</Link></div>

export default Home;
