import { ContactSupport } from "@material-ui/icons";
import React, { useRef, useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";




const App3 = () => {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const getInput = (event) => {
    setInput(event.target.value);
  };

  const displayInput = (event) => {
    event.preventDefault();
    const newInput = { task: input, key: Date.now() };
    setDisplay([...display, newInput]);
    inputRef.current.value = "";
  };

  const removeItems = (key) => {
    const deleteItems = display.filter((newInput) => newInput.key !== key);
    setDisplay(deleteItems);
  };

  return (
    <>
      <ToDoForm
        getInput={getInput}
        inputRef={inputRef}
        displayInput={displayInput}
      />
      <ToDoList display={display} removeItems={removeItems} />
    </>
  );
};
export default App3;
