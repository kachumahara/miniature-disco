// src/App.js

///Dependences, I added ( yarn add react-beautiful-dnd and yarn uuid v4). /// https://github.com/uuidjs/uuid#deep-requires-now-deprecated explains reason for lines 8 and 9.
//DragDropCentext are all our columns
// Droppable are the colummns
// Draggable are items to drag

import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import API from "../../utils/API";
import uuid from "uuid/v4";
const { v4: uuidv4 } = require("uuid");
uuidv4();

function DragNDrop() {
  /// using UUID, how to integrate that to backend(Mongodb). These are the projects(items) we are going to drag around.

  //// ajax call to retrieve data from seed (Task)

  const [tasks, setTasks] = useState([]);
  // const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadTasks();
  }, []);

  function loadTasks() {
    API.getTasks()
      .then((res) => {
        // console.log(res);

        setTasks(res.data);
      })
      .catch((err) => console.log(err));
  }
  console.log(tasks);
  // TO DO: STRUCTURE THE RES(data), making a const and function for ItemsFrom back end and columesfrom back end.

 

  // /// Creating Columns for tasks columns
  // // moving the tasks seed to columns
  const columnsFromBackend = {
   
      [uuid()]: {
        name: "Requested",
        items: itemsFromBackEnd,
      },
      [uuid()]: {
        name: "To Do",
        items: [],
      },
      [uuid()]: {
        name: "In Progress",
        items: [],
      },
      [uuid()]: {
        name: "Done",
        items: [],
      },
    
  };
  // Drag functions
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  // The DragDropContext (Container) has children (Droppable (OnDrag) and Draggable). Its the wrapper

  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
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
                        {column.items.map((item, index) => {
                          console.log(item)
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
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
                                        ? "blue"
                                        : "green",
                                      color: "white",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    {item.content}
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
  );
}

export default DragNDrop;
