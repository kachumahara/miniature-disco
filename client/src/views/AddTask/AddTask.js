import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../../components/Form/index";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function AddTask() {

//   components initial state
  const [formObject, setFormObject] = useState({})
  const [formDate, setDate] = useState(new Date())


//   update component state when user types in input field
    function handleInputChange(e){
        const { name, value } =
        e.target;
        setFormObject({...formObject, [name]: value})
    };

// handle component state when user selects date from calendar
    function handleDateChange(formDate){
      setDate(formDate);
    }

// when form is submitted use API.createTask method to save task data
    function handleFormSubmit(e){
        e.preventDefault();
        console.log(formDate)
        if(formObject.title && formObject.description && formDate) {
            API.createTask({
                title: formObject.title,
                description: formObject.description,
                due_date: formDate
            }).then(function(){
              //reset the state for the forms after data is passed
              setFormObject({"title":"","description":""});
            })
            .catch(err => console.log(err));
            alert('Task Submitted!')
        }
    }

  return (
    <div id="popAdd" className="container mt-4">
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
              value={formObject.title}
              idname="formText"
            />
            <TextArea
              onChange={handleInputChange}
              name="description"
              placeholder="Description of Task (required)"
              value={formObject.description}
              idname="formText"
            />
            <div className="dueDate fluid">
              <h3>Select Due Date Below</h3>
              <div className="calendar">
                <Calendar
                  onChange={handleDateChange}
                  value= {formDate}
                />
              </div>
              <div className="buttons">
                <FormBtn
                disabled={!(formObject.title && formObject.description)}
                onClick={handleFormSubmit}
                >
                 Save Task
                </FormBtn>
                <Link className="link" to={"/"}><FormBtn>Done</FormBtn></Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
