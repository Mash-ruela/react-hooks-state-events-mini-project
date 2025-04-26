import React from "react";

function Task({ text, category, onDelete }) {

  function deleteTask() {
    onDelete(text)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteTask}>X</button>
    </div>
  );
}

export default Task;