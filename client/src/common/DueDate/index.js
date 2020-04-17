import "./style.css";
// const db = require("../../models/task");
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useAuth0 } from "../../utils/auth0Provider";
import uuid from "uuid/v4";
const { v4: uuidv4 } = require("uuid");
uuidv4();

/// using UUID, how to integrate that to backend(Mongodb). These are the projects(items) we are going to drag around.

//// ajax call to retrieve data from seed (Task)
function DueDate() {
  const {getTokenSilently} = useAuth0();
  const [tasks, setTasks] = useState([
//  console.log(title)
  ]);
  // const [formObject, setFormObject] = useState({})
  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const token = await getTokenSilently();
    API.getTasks(token)
      .then((res) => {

        // info = res.data

        setTasks(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="sidenav">
      <ul>
        <li id="sideLi">Shyaboi</li>
      </ul>
    </div>
  );
}
export default DueDate;

// function DueDate() {

//     return (

//        <div className="sidenav">
//  <ul>
//  <li id='sideLi'><p>Shyaboi</p><p>10/24/3030</p></li>
//  <li id='sideLi'><p>Shyaboi</p><p>10/24/3030</p></li>
//  <li id='sideLi'><p>Shyaboi</p><p>10/24/3030</p></li>
//  <li id='sideLi'><p>Shyaboi</p><p>10/24/3030</p></li>
//  <li id='sideLi'><p>Shyaboi</p><p>10/24/3030</p></li>
//  <li id='sideLi'><p>Shyaboi</p><p>10/24/3030</p></li>
//  <li id='sideLi'><p>Shyaboi</p><p>10/24/3030</p></li>
//  <li id='sideLi'><p>Shyaboi</p><p>10/24/3030</p></li>

// </ul>

// </div>

//     );
// }
