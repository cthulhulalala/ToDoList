import React from "react";

const ToDoList = ({ display, removeItems }) => {
  return (
    <>
      <div id="list">
        <ul>
          {display.map((newInput) => (
            <li key={newInput.key}>
              {newInput.task}{" "}
              <span type="submit" onClick={() => removeItems(newInput.key)}>
                x
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoList;
