import React, { useState } from "react";
import "../Component/style.css";

export default function Todo() {
  const getItem = JSON.parse(localStorage.getItem("todotask"));
  const [task, settask] = useState(getItem ? getItem : []);
  const [errors, seterrors] = useState();
  const [text, settext] = useState("");

  const addTodo = () => {
    let errors = "";
    if (text === "") errors += "Please enter the text";
    if (errors === "") {
      settask([...task, text]);
      settext("");
    } else {
      seterrors(errors);
      alert(errors);
    }
    localStorage.setItem("todotask", JSON.stringify([...task, text]));
  };
  const remove = (indexToRemove) => {
    const updatedtask = task.filter((_, index) => index !== indexToRemove);
    settask(updatedtask);
    localStorage.setItem("todotask", JSON.stringify(updatedtask));
  };
  const edit = (indexToedit) => {
    settext(task[indexToedit]);
    remove(indexToedit);
   
  };
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          margin: "10px",
          color: "#073763",
          fontSize: "30px",
        }}
      >
        Create your todo
      </h1>
      <div className="todoapp">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
        <button onClick={addTodo}>Add task</button>
        <ul>
          {task.map((value, index) => (
            <li key={index} >
              {value} 
              <div>
              <i onClick={() => remove(index)} class="fa-solid fa-trash"></i>
              <i onClick={() => edit(index)} class="fa-solid fa-pen-to-square"></i></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
