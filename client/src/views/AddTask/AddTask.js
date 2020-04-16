import React, { useState, useEffect } from "react";
// import { useAuth0 } from "../../utils/auth0Provider";
import "./style.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../../components/Form/index";

function AddTask() {
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
        if(formObject.title && formObject.description) {
            API.createTask({
                title: formObject.title,
                description: formObject.description
            })
            .catch(err => console.log(err));
        }
    }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <h1>Add a New Task</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Task Title (required)"
            />
            <TextArea
              onChange={handleInputChange}
              name="description"
              placeholder="Description of Task (required)"
            />
            <FormBtn><Link to={"/"}>Done</Link></FormBtn>
            <FormBtn
            disabled={!(formObject.title && formObject.description)}
            onClick={handleFormSubmit}
            >
              Save Task
            </FormBtn>
          </form>
        </div>
      </div>
    </div>
  );
}

/* {isAuthenticated && <p>{JSON.stringify(user, null, 2)}</p>} */

export default AddTask;
