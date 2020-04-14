import React from "react";
import { useAuth0 } from "../../utils/auth0Provider";
import "./style.css";

function AddProject() {
    const { isAuthenticated, user } = useAuth0();
    return(
            <div className="row">
                <div className="col">
                    <h1>Add A Project</h1>
                    {isAuthenticated && <p>{JSON.stringify(user, null, 2)}</p>}
                </div>
            </div>
    )
}


export default AddProject;