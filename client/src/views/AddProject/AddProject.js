import React, { useState, useEffect } from "react";
// import { useAuth0 } from "../../utils/auth0Provider";
import "./style.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../../components/Form/index";

function AddProject() {
  //   const { isAuthenticated, user } = useAuth0();

//   components initial state
  const [formObject, setFormObject] = useState({})

//   update component state when user types in input field
    function handleInputChange(e){
        const { name, value } =
        e.target;
        setFormObject({... formObject, [name]: value})
    };

// when form is submitted use API.saveProject method to save project data
    function handleFormSubmit(e){
        e.preventDefault();
        if(formObject.project && formObject.description) {
            API.createProject({
                project: formObject.project,
                description: formObject.description
            })
            .catch(err => console.log(err));
        }
    }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <h1>Add a New Project</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form>
            <Input
              onChange={handleInputChange}
              name="project"
              placeholder="project (required)"
            />
            <TextArea
              onChange={handleInputChange}
              name="description"
              placeholder="Description (required)"
            />
            <FormBtn><Link to={"/"}>Done</Link></FormBtn>
            <FormBtn
            disabled={!(formObject.project && formObject.description)}
            onClick={handleFormSubmit}
            >
              Save Project
            </FormBtn>
          </form>
        </div>
      </div>
    </div>
  );
}

/* {isAuthenticated && <p>{JSON.stringify(user, null, 2)}</p>} */

export default AddProject;
