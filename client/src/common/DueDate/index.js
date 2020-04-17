import "./style.css";
// const db = require("../../models/task");
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import uuid from "uuid/v4";
const { v4: uuidv4 } = require("uuid");
uuidv4();

/// using UUID, how to integrate that to backend(Mongodb). These are the projects(items) we are going to drag around.

//// ajax call to retrieve data from seed (Task)
function DueDate() {
  const [tasks, setTasks] = useState([
    {
      title: "",
    },
  ]);
  // const [formObject, setFormObject] = useState({})
  useEffect(() => {
    loadTasks();
  }, []);

  function loadTasks() {
    API.getTasks()
      .then((res) => {
          let dong, i, x = '';
        dong = res.data
        // console.log(dood);
        for (i in dong.title) {
            x += dong.title[i] + "<br>";
            console.log(x)
          }
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
