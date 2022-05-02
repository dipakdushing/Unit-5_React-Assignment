import "../styles.css";
import React, { useState } from "react";
import TodoList from "./TodoList";

export default function App() {
  const [inputList, setInputList] = useState("");
  const [todo, setTodo] = useState([]);

  const inputBox = (event) => {
    setInputList(event.target.value);
  };

  const addTodo = () => {
    setTodo((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    // console.log("delete");
    setTodo((oldItem) => {
      return oldItem.filter((elem, index) => {
        return id !== index;
      });
    });
  };

  const checkStatus = (id) => {
    console.log(id);
    const newTodo = todo.map((e) => {
      if (e.id === id) {
        return { ...e, done: !e.done };
      }
      return e;
    });
    console.log(newTodo);
  };

  return (
    <div className="main">
      <div className="container">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add your Task"
          onChange={inputBox}
          value={inputList}
        />
        <button onClick={addTodo}> + </button>

        <div className="list-area">
          {todo.map((e, index) => {
            return (
              <TodoList
                inp={e}
                key={index}
                id={index}
                onSelect={deleteItem}
                handleChange={checkStatus}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
