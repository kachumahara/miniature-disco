// src/App.js

///Dependences, I added ( yarn add react-beautiful-dnd and yarn uuid v4). /// https://github.com/uuidjs/uuid#deep-requires-now-deprecated explains reason for lines 8 and 9.
//DragDropCentext are all our columns
// Droppable are the colummns
// Draggable are items to drag

import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import API from "../../utils/API";
import { useAuth0 } from "../../utils/auth0Provider";
import DueDate from "../../common/DueDate/index";
import "./style.css";
// import uuid from "uuid/v4";
// const { v4: uuidv4 } = require("uuid");
// uuidv4();

function DragNDrop() {
  /// using UUID, how to integrate that to backend(Mongodb). These are the projects(items) we are going to drag around.

  //// ajax call to retrieve data from seed (Task)
  const { getTokenSilently } = useAuth0();
  const [tasks, setTasks] = useState([]);
  // const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const token = await getTokenSilently();
    API.getTasks(token)
      .then((res) => {
        setTasks(res.data);
        setColumns({
          ["to-do"]: {
            ...columns["to-do"],
            tasks: res.data.filter((task) => task.status === "to-do"),
          },
          ["in-progress"]: {
            ...columns["in-progress"],
            tasks: res.data.filter((task) => task.status === "in-progress"),
          },
          ["done"]: {
            ...columns["done"],
            tasks: res.data.filter((task) => task.status === "done"),
          },
        });
      })
      .catch((err) => console.log(err));
  }

// }
    // async function deleteTask(id){
    //   const token = await getTokenSilently();
    //   API.deleteTasks(id, token)
    //   .then(res => loadTasks())
    //   .catch(err => console.log(err));
    //   }
  // console.log(tasks);
  // TO DO: STRUCTURE THE RES(data), making a const and function for ItemsFrom back end and columesfrom back end.

  // /// Creating Columns for tasks columns
  // // moving the tasks seed to columns
  const columnsFromBackend = {
    ["to-do"]: {
      name: "To Do",

      tasks: [],
    },
    ["in-progress"]: {
      name: "In Progress",

      tasks: [],
    },
    ["done"]: {
      name: "Done",

      tasks: [],
    },
  };
  // Drag functions
  async function onDragEnd(result, columns, setColumns) {
    const token = await getTokenSilently();
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.tasks];
      const destItems = [...destColumn.tasks];
      const [removed] = sourceItems.splice(source.index, 1);
      const selectedTask = sourceColumn.tasks[source.index]._id;
      destItems.splice(destination.index, 0, removed);
      API.updateTask(selectedTask, destination.droppableId, token).then(
        (res) => {
          setTasks(res.data);
          setColumns({
            ...columns,
            [source.droppableId]: {
              ...sourceColumn,
              tasks: sourceItems,
            },
            [destination.droppableId]: {
              ...destColumn,
              tasks: destItems,
            },
          });
        }
      );
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.tasks];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          tasks: copiedItems,
        },
      });
    }
  }

  // The DragDropContext (Container) has children (Droppable (OnDrag) and Draggable). Its the wrapper

  const [columns, setColumns] = useState(columnsFromBackend);

  // console.log("Columns", columns);

  return (
    <div>
    <DueDate />
    <div style={{ display: "flex", justifyContent: "center", height: "100%", marginRight: "10%", marginTop: "3%", }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, column]) => {
          return (
            <div
              style={{
                key: "index",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={id} key={id}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppablePorps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500,
                        }}
                      >
                        {column.tasks.map((task, index) => {
                          // console.log(task);
                          return (
                            <Draggable
                              key={task._id}
                              draggableId={task._id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.dragHandleProps}
                                    {...provided.draggableProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "black"
                                        : "blue",
                                      color: "white",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <h5><strong>{task.title}:</strong></h5>
                                    <div>
                                      {task.description}
                                    </div>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  </div>
  );
}

export default DragNDrop;
