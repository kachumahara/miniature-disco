import React from "react";
import { useAuth0 } from "../../utils/auth0Provider";
import "./style.css";
import Container from "../../common/Container"

function AddProject() {
    const { isAuthenticated, user } = useAuth0();
    return(
        <Container>
            <div className="row">
                <div className="col">
                    <h1>Add A Project</h1>
                    {isAuthenticated && <p>{JSON.stringify(user, null, 2)}</p>}
                </div>
            </div>
        </Container>
    )
}


export default AddProject;