import React from "react";

const ToDoForm = ({ getInput, inputRef, displayInput }) => {
  return (
    <>
      <div className="mainDiv">
        <form>
          <h1>ToDoList</h1>
          <input
            type="text"
            placeholder="Add a task..."
            onChange={getInput}
            ref={inputRef}
          ></input>
          <button onClick={displayInput}>ADD</button>
        </form>
      </div>
    </>
  );
};
export default ToDoForm;
